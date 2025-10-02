// api/render-progress.js
import { getRenderProgress } from '@remotion/lambda/client';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { renderId, bucketName } = req.query;

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
    return res.status(500).json({ error: error.message });
  }
}