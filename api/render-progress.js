// api/render-progress.js
import { getRenderProgress } from '@remotion/lambda';

export default async function handler(req, res) {
  // Handle OPTIONS for CORS
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { renderId, bucketName } = req.query;

  if (!renderId || !bucketName) {
    return res.status(400).json({ error: 'Missing renderId or bucketName' });
  }

  try {
    const progress = await getRenderProgress({
      renderId,
      bucketName,
      functionName: process.env.REMOTION_LAMBDA_FUNCTION_NAME,
      region: process.env.AWS_REGION || 'us-east-1',
    });

    return res.status(200).json({
      done: progress.done,
      progress: progress.overallProgress,
      videoUrl: progress.outputFile || null
    });
  } catch (error) {
    console.error('Progress error:', error);
    return res.status(500).json({ error: error.message });
  }
}