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
  compositionWidth: z.number().optional(),
  compositionHeight: z.number().optional(),
});

export const PlayerWrapper = React.memo((props: z.infer<typeof PlayerPropsSchema>) => {
  const playerRef = React.useRef<any>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const width = props.compositionWidth || 1920;
  const height = props.compositionHeight || 1080;

  const handlePlayClick = () => {
    if (playerRef.current) {
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleFullscreen = () => {
    const elem = containerRef.current;
    if (!elem) return;

    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if ((elem as any).webkitRequestFullscreen) {
        (elem as any).webkitRequestFullscreen();
      } else if ((elem as any).msRequestFullscreen) {
        (elem as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleCTAClick = () => {
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'SCROLL_TO_PAYMENT' }, '*');
    }
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
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
        compositionWidth={width}
        compositionHeight={height}
        controls
        autoPlay={false}
        loop={false}
        showVolumeControls={true}
        clickToPlay={false}
        spaceKeyToPlayOrPause={true}
        moveToBeginningWhenEnded={false}
        initialFrame={60}
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
      
      {/* Fullscreen Button */}
      <button
        onClick={handleFullscreen}
        style={{
          position: 'absolute',
          bottom: '70px',
          right: '15px',
          background: 'rgba(0, 0, 0, 0.6)',
          border: 'none',
          borderRadius: '4px',
          padding: '10px',
          cursor: 'pointer',
          color: 'white',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
        }}
        title="Fullscreen"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
        </svg>
      </button>

      {/* CTA Button */}
      <button
        onClick={handleCTAClick}
        style={{
          position: 'absolute',
          bottom: '15px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#F26622',
          border: 'none',
          borderRadius: '8px',
          padding: '14px 32px',
          cursor: 'pointer',
          color: 'white',
          fontSize: '16px',
          fontWeight: '700',
          zIndex: 100,
          boxShadow: '0 4px 12px rgba(242, 102, 34, 0.4)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#d44f1b';
          e.currentTarget.style.transform = 'translateX(-50%) scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#F26622';
          e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
        }}
      >
        Start Treatment Now
      </button>
      
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
            zIndex: 50,
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