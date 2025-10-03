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
      autoPlay={true}
      loop={false}
      showVolumeControls={true}
      clickToPlay={true}
      doubleClickToFullscreen={true}
      spaceKeyToPlayOrPause={true}
      moveToBeginningWhenEnded={false}
      style={{ 
        width: '100%', 
        height: '100%',
        borderRadius: '12px',
        overflow: 'hidden'
      }}
      renderLoading={() => (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          background: 'linear-gradient(135deg, #fff4f0 0%, #ffe8dd 100%)',
        }}>
          <div style={{
            textAlign: 'center',
            color: '#666'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #F26622',
              borderRadius: '50%',
              margin: '0 auto 20px',
              animation: 'spin 1s linear infinite'
            }}></div>
            <p>Preparing video...</p>
          </div>
        </div>
      )}
    />
  );
});

PlayerWrapper.displayName = 'PlayerWrapper';

export { React, ReactDOM };
export default PlayerWrapper;