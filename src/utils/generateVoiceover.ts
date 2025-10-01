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
  const monthsToGoal = Math.ceil(weightLoss / 1.5 / 4);

  const script = `
Imagine yourself, ${name}, 6 months from now. Healthier, happier, more confident.

With GLP-1 therapy, losing weight isn't about willpower alone. It's about science working with your body.

Picture this: going from ${startWeight} pounds to ${goalWeight} pounds. That's ${weightLoss} pounds lighter. More energy. Better health.

You won't be doing this alone. Meet your dedicated care team.

Dr. Michael Fitch is your actual GOAL M D physician. No outsourced companies here. He'll oversee your entire journey, providing medical oversight, monthly check-ins, and adjusting your doses as needed.

And Betsy, your nutritional coach. She's a registered dietitian who'll help you build sustainable habits and maximize your results.

Here's your personalized path, ${name}. From ${startWeight} pounds to ${goalWeight} pounds in approximately ${monthsToGoal} months.

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

Start your ${plan.toLowerCase()} plan today.

Your journey starts right now.
  `.trim();

  try {
    // Generate audio
    const audio = await client.generate({
      voice: "Rachel", // Professional, warm female voice
      text: script,
      model_id: "eleven_multilingual_v2"
    });

    // Convert stream to buffer
    const chunks: Buffer[] = [];
    for await (const chunk of audio) {
      chunks.push(chunk);
    }
    const audioBuffer = Buffer.concat(chunks);

    // Save to public folder (for testing)
    const fileName = `voiceover-${name}-${Date.now()}.mp3`;
    const filePath = path.join(process.cwd(), 'public', 'voiceovers', fileName);
    
    await writeFile(filePath, audioBuffer);

    // Return public URL
    return `/voiceovers/${fileName}`;
  } catch (error) {
    console.error('ElevenLabs generation failed:', error);
    throw error;
  }
}