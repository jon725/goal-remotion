// api/render-video.js
// Vercel serverless function to trigger Remotion Lambda renders

import { renderMediaOnLambda } from '@remotion/lambda/client';
import { getRenderProgress } from '@remotion/lambda/client';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      firstName, 
      lastName, 
      sex, 
      currentWeight, 
      goalWeight,
      email,
      phone,
      address,
      city,
      state,
      zip
    } = req.body;

    // Validate required fields
    if (!firstName || !currentWeight || !goalWeight) {
      return res.status(400).json({ 
        error: 'Missing required fields: firstName, currentWeight, goalWeight' 
      });
    }

    console.log('📹 Starting video render for:', firstName, lastName);

    // Step 1: Generate ElevenLabs voiceover
    const voiceoverUrl = await generateVoiceover({
      name: firstName,
      currentWeight,
      goalWeight
    });

    // Step 2: Prepare Remotion input props
    const inputProps = {
      name: firstName,
      startWeight: parseFloat(currentWeight),
      currentWeight: parseFloat(currentWeight),
      goalWeight: parseFloat(goalWeight),
      plan: 'Injection', // You can make this dynamic based on their selection
      brand: '#F26622',
      voiceoverUrl: voiceoverUrl,
    };

    // Step 3: Trigger Remotion Lambda render
    const renderResponse = await renderMediaOnLambda({
      region: process.env.AWS_REGION || 'us-east-1',
      functionName: process.env.REMOTION_LAMBDA_FUNCTION_NAME,
      serveUrl: process.env.REMOTION_SITE_ID,
      composition: 'journey-poc-wide', // Use the widescreen composition
      inputProps: inputProps,
      codec: 'h264',
      imageFormat: 'jpeg',
      maxRetries: 1,
      privacy: 'public',
      outName: `${firstName}-${lastName}-journey-${Date.now()}.mp4`,
    });

    console.log('🎬 Render started! Render ID:', renderResponse.renderId);

    // Step 4: Poll for render completion (optional - or return immediately)
    let progress = await getRenderProgress({
      renderId: renderResponse.renderId,
      bucketName: renderResponse.bucketName,
      functionName: process.env.REMOTION_LAMBDA_FUNCTION_NAME,
      region: process.env.AWS_REGION || 'us-east-1',
    });

    // Return the render info immediately
    // The frontend can poll for completion or wait for webhook
    return res.status(200).json({
      success: true,
      renderId: renderResponse.renderId,
      bucketName: renderResponse.bucketName,
      message: 'Video render started',
      progress: progress,
    });

  } catch (error) {
    console.error('❌ Error rendering video:', error);
    return res.status(500).json({ 
      error: 'Failed to render video', 
      details: error.message 
    });
  }
}

// Helper function to generate ElevenLabs voiceover
async function generateVoiceover({ name, currentWeight, goalWeight }) {
  const script = `
    Imagine yourself 6 months from now, ${name}. 
    You've gone from ${currentWeight} pounds to your goal of ${goalWeight} pounds.
    With GLP-1 therapy, this isn't just a dream - it's your future.
  `;

  try {
    const response = await fetch(
      'https://api.elevenlabs.io/v1/text-to-speech/YOUR_VOICE_ID',
      {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'xi-api-key': process.env.ELEVENLABS_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: script,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error('ElevenLabs API failed');
    }

    // Upload audio to S3 or return URL
    // For now, return a placeholder
    return 'https://your-bucket.s3.amazonaws.com/voiceover.mp3';

  } catch (error) {
    console.error('Failed to generate voiceover:', error);
    // Return null to render video without voiceover
    return null;
  }
}