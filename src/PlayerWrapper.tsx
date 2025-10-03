import { Player } from '@remotion/player';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { z } from 'zod';
import { POC_JourneyVideo } from './poc/POC_JourneyVideo';

const PlayerPropsSchema = z.object({
  name: z.string(),
  startWeight: z.number(),
  currentWeight: z.number(),
  goalWeight: z.number(),
  voiceoverUrl: z.string().optional(),
});

export const PlayerWrapper = React.memo((props: z.infer<typeof PlayerPropsSchema>) => {
  return (
    <Player
      component={POC_JourneyVideo}
      inputProps={{
        ...props,
        voiceoverUrl: props.voiceoverUrl || undefined,
        plan: 'Injection',
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
});

PlayerWrapper.displayName = 'PlayerWrapper';

export { React, ReactDOM };
export default PlayerWrapper;