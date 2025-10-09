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
    const { name, currentWeight, goalWeight, treatmentType } = req.body;

    if (!name || !currentWeight || !goalWeight) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, currentWeight, goalWeight' 
      });
    }

    console.log('Generating voiceover for:', name, 'Treatment:', treatmentType);

    // Create personalized script
    const script = generateScript(name, currentWeight, goalWeight, treatmentType);

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

function generateScript(name, currentWeight, goalWeight, treatmentType) {
  const weightLoss = currentWeight - goalWeight;
  
  // Match planMath.ts calculations based on treatment type
  const rampWeeks = 8;
  const rampLossLbsPerWeek = 0.8;
  
  // Oral = 1.5 lbs/week, Injection = 2.5 lbs/week (default)
  const steadyLossLbsPerWeek = treatmentType === 'Oral' ? 1.5 : 2.5;
  
  // Calculate weeks to goal using same logic as weeksToLose()
  const rampCap = rampWeeks * rampLossLbsPerWeek; // 6.4 lbs
  let weeksToGoal;
  
  if (weightLoss <= rampCap) {
    weeksToGoal = weightLoss / rampLossLbsPerWeek;
  } else {
    const remaining = weightLoss - rampCap;
    weeksToGoal = rampWeeks + (remaining / steadyLossLbsPerWeek);
  }
  
  const monthsToGoal = Math.ceil(weeksToGoal / 4);
  
  return `<break time="5.5s"/>

Imagine yourself ${monthsToGoal} months from now, ${weightLoss} pounds lighter, healthier, happier, living the life you deserve. 

Picture going from ${currentWeight} pounds to ${goalWeight} pounds. That transformation? It's closer than you think. 
<break time="2.0s"/>
You won't do this alone. Meet Dr. Michael Fitch, your board-certified physician, <break time="1.0s"/>and Betsy Moeller, your nutritional coach. Real experts dedicated to your success. 
<break time="4.0s"/>
Your personalised journey, ${currentWeight} pounds to ${goalWeight} in approximately ${monthsToGoal} months. Your medication delivered monthly. 

Regular check-ins with Dr. Fitch. Weekly support from Betsy. Unlimited messaging. Everything you need. 

Thousands of people are already transforming their lives with GoalMD. This isn't a gimmick. These are real, lasting results. 
<break time="4.0s"/>
So, what's next? You'll select your preferred treatment and book your appointment. This choice is provisional. Dr. Fitch makes the final call. During your online consultation, he reviews your medical history and goals, then creates your personalised plan.

He may adjust your medication based on his clinical expertise. That's the GoalMD difference — real doctors, real care. If you're not approved, you receive a full refund. Once approved, your medication arrives in five to seven days. 
<break time="5.5s"/>
You've taken the first step ${name},.
Now lock in your plan — and get free shipping for life.

  `.trim();
}

async function generateElevenLabsAudio(text) {
  const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
  const VOICE_ID = process.env.ELEVENLABS_VOICE_ID || 'tnSpp4vdxKPjI9w0GnoV';

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
        model_id: 'eleven_turbo_v2_5', // This model supports SSML
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