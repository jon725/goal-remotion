// api/generate-voiceover.js
// Vercel serverless function to generate ElevenLabs voiceover

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, currentWeight, goalWeight } = req.body;

    if (!name || !currentWeight || !goalWeight) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, currentWeight, goalWeight' 
      });
    }

    console.log('Generating voiceover for:', name);

    // Create personalized script
    const script = generateScript(name, currentWeight, goalWeight);

    // Generate voiceover with ElevenLabs
    const audioBuffer = await generateElevenLabsAudio(script);

    // Upload to S3
    const audioUrl = await uploadToS3(audioBuffer, name);

    return res.status(200).json({
      success: true,
      audioUrl: audioUrl,
      message: 'Voiceover generated successfully'
    });

  } catch (error) {
    console.error('Error generating voiceover:', error);
    return res.status(500).json({ 
      error: 'Failed to generate voiceover', 
      details: error.message 
    });
  }
}

function generateScript(name, currentWeight, goalWeight) {
  const weightLoss = currentWeight - goalWeight;
  const monthsToGoal = Math.ceil(weightLoss / 1.5 / 4);
  
  return `
Imagine yourself, ${name}, 6 months from now. Healthier, happier, more confident.

With GLP-1 therapy, losing weight isn't about willpower alone. It's about science working with your body.

Picture this: going from ${currentWeight} pounds to ${goalWeight} pounds. That's ${weightLoss} pounds lighter. More energy. Better health.

You won't be doing this alone. Meet your dedicated care team.

Dr. Michael Fitch is your actual GOAL M D physician. No outsourced companies here. He'll oversee your entire journey, providing medical oversight, monthly check-ins, and adjusting your doses as needed.

And Betsy, your nutritional coach. She's a registered dietitian who'll help you build sustainable habits and maximize your results.

Here's your personalized path, ${name}. From ${currentWeight} pounds to ${goalWeight} pounds in approximately ${monthsToGoal} months.

You'll get GLP-1 medication delivered monthly, regular medical care from Dr. Fitch, weekly nutrition coaching from Betsy, smart tracking through our app, unlimited messaging, and detailed progress reports.

You're joining thousands of success stories. Real people. Real results. No gimmicks.

Here's exactly what happens after you sign up, ${name}.

First, you've just qualified and selected your preferred medication plan.

Within 24 hours, Dr. Fitch will personally review your case. He'll confirm the right treatment for you, or adjust it based on his clinical expertise.

Within 48 hours, he'll call or video chat with you to discuss your personalized plan and answer any questions.

Once approved, your medication ships in 2 to 3 days. Discreet packaging, fast delivery.

In week one, Betsy will reach out for your first nutrition session, and you'll have ongoing support throughout your journey.

Remember, the medication you selected is your preference, but Dr. Fitch has the final say. This is real medical care, not a vending machine.

${name}, your transformation starts right now. Join 15,000 people who've transformed their lives with GOAL M D.

Start your plan today.

Your journey starts right now.
  `.trim();
}

async function generateElevenLabsAudio(text) {
  const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
  const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'EXAVITQu4vr4xnSDxMaL'; // Default: Bella

  if (!ELEVENLABS_API_KEY) {
    throw new Error('ELEVENLABS_API_KEY not configured');
  }

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
    {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        model_id: 'eleven_monolingual_v1',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`ElevenLabs API error: ${error}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function uploadToS3(audioBuffer, userName) {
  const s3Client = new S3Client({
    region: process.env.AWS_REGION || 'us-east-1',
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  const timestamp = Date.now();
  const fileName = `voiceovers/${userName}-${timestamp}.mp3`;
  const bucketName = process.env.S3_BUCKET_NAME || 'remotionlambda-useast1-gtrmt3wak7';

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileName,
    Body: audioBuffer,
    ContentType: 'audio/mpeg',
    ACL: 'public-read', // Make it publicly accessible
  });

  await s3Client.send(command);

  return `https://${bucketName}.s3.${process.env.AWS_REGION || 'us-east-1'}.amazonaws.com/${fileName}`;
}