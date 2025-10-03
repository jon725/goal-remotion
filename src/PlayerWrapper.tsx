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
  const playerRef = React.useRef<any>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayClick = () => {
    if (playerRef.current) {
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Player
        ref={playerRef}
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
        autoPlay={false}
        loop={false}
        showVolumeControls={true}
        clickToPlay={false}
        doubleClickToFullscreen={true}
        spaceKeyToPlayOrPause={true}
        moveToBeginningWhenEnded={false}
        allowFullscreen={true}
        initiallyShowControls={true}
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
      
      {/* Big Play Button Overlay */}
      {!isPlaying && (
        <div 
          onClick={handlePlayClick}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '12px',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)';
          }}
        >
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: '#F26622',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(242, 102, 34, 0.5)',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="white"
              style={{ marginLeft: '4px' }}
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
});

PlayerWrapper.displayName = 'PlayerWrapper';

export { React, ReactDOM };
export default PlayerWrapper;