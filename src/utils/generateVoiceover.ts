import {ElevenLabsClient} from 'elevenlabs';
import {writeFile} from 'fs/promises';
import path from 'path';

const client = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY
});

export async function generatePersonalizedVoiceover(
  name: string,
  startWeight: number,
  goalWeight: number,
  plan: string
) {
  const weightLoss = startWeight - goalWeight;
  
  // Use the same calculation as YourJourneyTimeline component
  const weeksToGoal = weightLoss / 1.5; // Assuming 1.5 lbs/week
  const monthsToGoal = Math.ceil(weeksToGoal / 4);

  const script = 
  `  <break time="2.5s"/>

  Imagine yourself six months from now. ${weightLoss} pounds lighter. Healthier, happier, living the life you deserve.
  
  Picture the life you imagined. ${startWeight} pounds to ${goalWeight} pounds. That transformation? It's closer than you think.
  
  You won't do this alone. Meet Dr. Michael Fitch, your board-certified physician. And Betsy Moeller, your nutritional coach. Real experts, dedicated to your success.
  
  Your personalized journey: ${startWeight} to ${goalWeight} pounds in approximately ${monthsToGoal} months. Your medication delivered monthly. Regular check-ins with Dr. Fitch. Weekly support from Betsy. Unlimited messaging. Everything you need.
  
  Thousands of people are already transforming their lives with GOAL M D. This isn't a gimmick. These are real, lasting results.
  
  So what's next? You'll select your preferred treatment and book your appointment. This choice is provisional. Dr. Fitch makes the final call. During your online consultation, he reviews your medical history and goals, then creates your personalized plan. He may adjust your medication based on his clinical expertise. That's what sets us apart. Real medical oversight, not a vending machine. If you're not approved, you receive a full refund. Once approved, your medication arrives in five to seven days.
  
  Your transformation begins right now. Start your ${plan.toLowerCase()} plan today.
  `.trim();

  try {
    const audio = await client.generate({
      voice: "Rachel",
      text: script,
      model_id: "eleven_multilingual_v2"
    });

    const chunks: Buffer[] = [];
    for await (const chunk of audio) {
      chunks.push(chunk);
    }
    const audioBuffer = Buffer.concat(chunks);

    const fileName = `voiceover-${name}-${Date.now()}.mp3`;
    const filePath = path.join(process.cwd(), 'public', 'voiceovers', fileName);
    
    await writeFile(filePath, audioBuffer);

    return `/voiceovers/${fileName}`;
  } catch (error) {
    console.error('ElevenLabs generation failed:', error);
    throw error;
  }
}