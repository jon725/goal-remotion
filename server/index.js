import express from 'express';
import cors from 'cors';
import {ElevenLabsClient} from 'elevenlabs';
import {writeFile, mkdir, stat} from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';
import dotenv from 'dotenv';
import {existsSync, createReadStream} from 'fs';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve audio files with proper headers for Remotion
app.get('/voiceovers/:filename', async (req, res) => {
  try {
    const filePath = path.join(__dirname, '..', 'public', 'voiceovers', req.params.filename);
    
    if (!existsSync(filePath)) {
      return res.status(404).send('File not found');
    }

    const stats = await stat(filePath);
    const fileSize = stats.size;
    const range = req.headers.range;

    if (range) {
      // Handle range requests for seeking
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
      const chunksize = (end - start) + 1;
      const file = createReadStream(filePath, {start, end});

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': 'audio/mpeg',
      });

      file.pipe(res);
    } else {
      // Normal request
      res.writeHead(200, {
        'Content-Length': fileSize,
        'Content-Type': 'audio/mpeg',
        'Accept-Ranges': 'bytes',
      });

      createReadStream(filePath).pipe(res);
    }
  } catch (error) {
    console.error('Error serving audio:', error);
    res.status(500).send('Error serving audio file');
  }
});

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY
});

app.post('/api/generate-voiceover', async (req, res) => {
  try {
    const {name, startWeight, goalWeight, plan} = req.body;

    console.log('Received request:', {name, startWeight, goalWeight, plan});

    // Validation
    if (!name || !startWeight || !goalWeight || !plan) {
      return res.status(400).json({error: 'Missing required fields'});
    }

    const weightLoss = startWeight - goalWeight;
    const monthsToGoal = Math.ceil(weightLoss / 1.5 / 4);

    const script = `
Imagine yourself six months from now. ${weightLoss} pounds lighter. Healthier, happier, living the life you deserve.

Picture the life you imagined. ${startWeight} pounds to ${goalWeight} pounds. That transformation? It's closer than you think.

You won't do this alone. Meet Dr. Michael Fitch, your board-certified physician. And Betsy Moeller, your nutritional coach. Real experts, dedicated to your success.

Your personalized journey: ${startWeight} to ${goalWeight} pounds in approximately ${monthsToGoal} months. Your medication delivered monthly. Regular check-ins with Dr. Fitch. Weekly support from Betsy. Unlimited messaging. Everything you need.

Thousands of people are already transforming their lives with GOAL M D. This isn't a gimmick. These are real, lasting results.

So what's next? You'll select your preferred treatment and book your appointment. This choice is provisional. Dr. Fitch makes the final call. During your online consultation, he reviews your medical history and goals, then creates your personalized plan. He may adjust your medication based on his clinical expertise. That's what sets us apart. Real medical oversight, not a vending machine. If you're not approved, you receive a full refund. Once approved, your medication arrives in five to seven days.

Your transformation begins right now. Start your ${plan.toLowerCase()} plan today.
`.trim();

    console.log('Generating voiceover with ElevenLabs...');

    const audio = await client.generate({
      voice: "wJqPPQ618aTW29mptyoc",
      text: script,
      model_id: "eleven_multilingual_v2",
      voice_settings: {
        stability: 0.4,
        similarity_boost: 0.75,
        style: 0.5,
        use_speaker_boost: true
      }
    });

    console.log('Audio generated, converting stream to buffer...');

    // Convert stream to buffer
    const chunks = [];
    for await (const chunk of audio) {
      chunks.push(chunk);
    }
    const audioBuffer = Buffer.concat(chunks);

    console.log('Buffer created, saving file...');

    // Ensure directory exists
    const publicPath = path.join(__dirname, '..', 'public', 'voiceovers');
    if (!existsSync(publicPath)) {
      await mkdir(publicPath, {recursive: true});
      console.log('Created voiceovers directory');
    }

    // Save file
    const fileName = `voiceover-${name.replace(/\s+/g, '-')}-${Date.now()}.mp3`;
    const filePath = path.join(publicPath, fileName);
    
    await writeFile(filePath, audioBuffer);

    console.log('✅ Voiceover saved:', fileName);

    res.json({
      voiceoverUrl: `/voiceovers/${fileName}`,
      success: true,
      fileName
    });

  } catch (error) {
    console.error('❌ Error generating voiceover:', error);
    res.status(500).json({
      error: 'Failed to generate voiceover',
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    hasApiKey: !!process.env.ELEVENLABS_API_KEY
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/health`);
  console.log(`🎤 API Key configured:`, !!process.env.ELEVENLABS_API_KEY);
});