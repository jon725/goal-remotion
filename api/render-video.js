// api/render-video.js
import { renderMediaOnLambda } from '@remotion/lambda';

export default async function handler(req, res) {
  // Handle OPTIONS first, before anything else
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Set CORS headers for actual request
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, startWeight, currentWeight, goalWeight, voiceoverUrl } = req.body;

    if (!name || !currentWeight || !goalWeight) {
      return res.status(400).json({ 
        error: 'Missing required fields' 
      });
    }

    const inputProps = {
      name: name,
      startWeight: parseFloat(startWeight),
      currentWeight: parseFloat(currentWeight),
      goalWeight: parseFloat(goalWeight),
      plan: 'Injection',
      brand: '#F26622',
      voiceoverUrl: voiceoverUrl || null,
    };

    const renderResponse = await renderMediaOnLambda({
      region: process.env.AWS_REGION || 'us-east-1',
      functionName: process.env.REMOTION_LAMBDA_FUNCTION_NAME,
      serveUrl: process.env.REMOTION_SITE_ID,
      composition: 'journey-poc-wide',
      inputProps: inputProps,
      codec: 'h264',
      privacy: 'public',
    });

    return res.status(200).json({
      success: true,
      renderId: renderResponse.renderId,
      bucketName: renderResponse.bucketName,
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: error.message 
    });
  }
}