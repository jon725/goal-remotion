import React from 'react';
import {AbsoluteFill, useCurrentFrame, Audio} from 'remotion';
import {BrightBackground} from './components/BrightBackground';
import {HeroOpener} from './components/HeroOpener';
import {TransformationVision} from './components/TransformationVision';
import {MeetYourTeam} from './components/MeetYourTeam';
import {YourJourneyTimeline} from './components/YourJourneyTimeline';
import {SuccessStories} from './components/SuccessStories';
import {WhatHappensNext} from './components/WhatHappensNext';
import {FinalCTA} from './components/FinalCTA';
import {projectETAs, DEFAULT_ASSUMPTIONS, type PlanAssumptions} from './planMath';
import {getPricing} from './pricingUtils';

export type Props = {
  name: string;
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
  plan: 'Injection' | 'Tablet' | 'Oral';
  brand?: string;
  couponCode?: string;
  voiceoverUrl?: string;
};

export const POC_JourneyVideo: React.FC<Props> = ({
  name,
  startWeight,
  currentWeight,
  goalWeight,
  plan,
  brand = '#6366F1',
  couponCode,
  voiceoverUrl,
}) => {
  const frame = useCurrentFrame();
  
  const assumptions: PlanAssumptions = {
    ...DEFAULT_ASSUMPTIONS,
    ...(plan === 'Tablet' || plan === 'Oral' ? {steadyLossLbsPerWeek: 1.4} : {}),
  };

  const {milestones, etaTo20, etaToGoal} = projectETAs(
    startWeight,
    currentWeight,
    goalWeight,
    assumptions
  );

  const displayPlan = plan === 'Oral' ? 'Tablet' : plan;
  
  // Get pricing based on coupon
  const pricing = getPricing(couponCode, plan);
  
  // VOICEOVER TIMING MARKERS (30fps = frames)
  // 0-8.25s (0-248 frames): Hero Opener
  // 8.25-16.5s (248-495 frames): Transformation Vision
  // 16.5-31s (495-930 frames): Meet Your Team
  // 31-49s (930-1470 frames): Your Journey Timeline
  // 49-58.5s (1470-1755 frames): Success Stories
  // 58.5s-1:34 (1755-2820 frames): What Happens Next
  // 1:34-1:40 (2820-3000 frames): Final CTA

  return (
    <AbsoluteFill style={{
      fontFamily: 'Inter, -apple-system, system-ui, sans-serif'
    }}>
      {/* Add voiceover audio */}
      {voiceoverUrl && (
        <Audio src={voiceoverUrl} volume={1.0} />
      )}
      
      <BrightBackground brand={brand} />

      {/* 0-8.25s: Hero Opener - Aspirational hook */}
      {frame < 248 && (
        <HeroOpener name={name} frame={frame} brand={brand} />
      )}

      {/* 8.25-16.5s: Transformation Vision - Show the dream */}
      {frame >= 248 && frame < 495 && (
        <TransformationVision
          startWeight={startWeight}
          goalWeight={goalWeight}
          frame={frame - 248}
          brand={brand}
        />
      )}

      {/* 16.5-31s: Meet Your Team - Build trust */}
      {frame >= 495 && frame < 930 && (
        <MeetYourTeam frame={frame - 495} brand={brand} />
      )}

      {/* 31-49s: Your Journey Timeline - Personalized path */}
      {frame >= 930 && frame < 1470 && (
        <YourJourneyTimeline
          startWeight={startWeight}
          currentWeight={currentWeight}
          goalWeight={goalWeight}
          milestones={milestones}
          etaToGoal={etaToGoal}
          frame={frame - 930}
          brand={brand}
        />
      )}

      {/* 49-58.5s: Success Stories - Social proof */}
      {frame >= 1470 && frame < 1755 && (
        <SuccessStories frame={frame - 1470} brand={brand} />
      )}

      {/* 58.5s-1:34: What Happens Next - Process clarity */}
      {frame >= 1755 && frame < 2820 && (
        <WhatHappensNext frame={frame - 1755} brand={brand} />
      )}

      {/* 1:34-1:40: Final CTA - Clear next step */}
      {frame >= 2820 && (
        <FinalCTA 
          plan={displayPlan} 
          frame={frame - 2820} 
          brand={brand}
          pricing={pricing}
        />
      )}
    </AbsoluteFill>
  );
};