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
  
  return `
    Imagine yourself 6 months from now, ${name}. 
    You've transformed from ${currentWeight} pounds to your goal of ${goalWeight} pounds.
    That's a ${weightLoss} pound transformation.
    
    With GLP-1 therapy, this isn't just a dream - it's your future.
    
    Meet the team who'll be with you every step of the way.
    Board-certified physicians, registered dietitians, and health coaches.
    All focused on one thing: your success.
    
    Your personalized journey starts here, ${name}.
    Based on your current weight and goal, we've mapped out your path.
    Step by step, milestone by milestone.
    
    Join thousands who've transformed their lives with our program.
    Real people, real results, real support.
    
    Here's exactly what happens after you sign up.
    Complete your medical intake, get your personalized plan, receive your medication, and start your transformation.
    
    Start your journey today, ${name}.
    Your future self is waiting.
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