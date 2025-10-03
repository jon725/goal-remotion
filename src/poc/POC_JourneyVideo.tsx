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

// Safe area wrapper component
const SafeArea: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div style={{
    position: 'absolute',
    top: '5%',
    left: '5%',
    right: '5%',
    bottom: '5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }}>
    {children}
  </div>
);

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
  const pricing = getPricing(couponCode, plan);

  // VOICEOVER TIMING MARKERS (30fps)
  // 0-8.25s (0-248 frames): Hero Opener
  // 8.25-20s (248-600 frames): Transformation Vision
  // 20-44s (600-1320 frames): Meet Your Team
  // 44-68s (1320-2040 frames): Your Journey Timeline
  // 68-74.5s (2040-2235 frames): Success Stories
  // 74.5-94s (2235-2820 frames): What Happens Next
  // 94-100s (2820-3000 frames): Final CTA

  return (
    <AbsoluteFill style={{
      fontFamily: 'Inter, -apple-system, system-ui, sans-serif'
    }}>
      {voiceoverUrl && (
        <Audio src={voiceoverUrl} volume={1.0} />
      )}
      
      <BrightBackground brand={brand} />

      <SafeArea>
        {/* 0-8.25s: Hero Opener */}
        {frame < 248 && (
          <HeroOpener name={name} frame={frame} brand={brand} />
        )}

        {/* 8.25-20s: Transformation Vision */}
        {frame >= 248 && frame < 600 && (
          <TransformationVision
            startWeight={startWeight}
            goalWeight={goalWeight}
            frame={frame - 248}
            brand={brand}
          />
        )}

        {/* 20-44s: Meet Your Team */}
        {frame >= 600 && frame < 1320 && (
          <MeetYourTeam frame={frame - 600} brand={brand} />
        )}

        {/* 44-68s: Your Journey Timeline */}
        {frame >= 1320 && frame < 2040 && (
          <YourJourneyTimeline
            startWeight={startWeight}
            currentWeight={currentWeight}
            goalWeight={goalWeight}
            milestones={milestones}
            etaToGoal={etaToGoal}
            frame={frame - 1320}
            brand={brand}
          />
        )}

        {/* 68-74.5s: Success Stories */}
        {frame >= 2040 && frame < 2235 && (
          <SuccessStories frame={frame - 2040} brand={brand} />
        )}

        {/* 74.5-94s: What Happens Next */}
        {frame >= 2235 && frame < 2820 && (
          <WhatHappensNext frame={frame - 2235} brand={brand} />
        )}

        {/* 94-100s: Final CTA */}
        {frame >= 2820 && (
          <FinalCTA 
            plan={displayPlan} 
            frame={frame - 2820} 
            brand={brand}
            pricing={pricing}
          />
        )}
      </SafeArea>
    </AbsoluteFill>
  );
};