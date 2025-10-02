import React from 'react';
import { Player } from '@remotion/player';
import { POC_JourneyVideo } from './poc/POC_JourneyVideo';

interface PlayerProps {
  name: string;
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
  voiceoverUrl: string | null;
}

export const PlayerWrapper: React.FC<PlayerProps> = (props) => {
  return (
    <Player
      component={POC_JourneyVideo}
      inputProps={{
        ...props,
        plan: 'Injection' as const,
        brand: '#F26622',
      }}
      durationInFrames={3000}
      fps={30}
      compositionWidth={1920}
      compositionHeight={1080}
      controls
      style={{ width: '100%', aspectRatio: '16/9' }}
    />
  );
};

// Export to window for Webflow
if (typeof window !== 'undefined') {
  (window as any).RemotionPlayerWrapper = PlayerWrapper;
  (window as any).React = React;
  (window as any).ReactDOM = require('react-dom');
}