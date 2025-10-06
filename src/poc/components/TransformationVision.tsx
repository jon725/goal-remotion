import React from 'react';
import {interpolate, Easing, spring, useVideoConfig} from 'remotion';

export const TransformationVision: React.FC<{
  startWeight: number;
  goalWeight: number;
  frame: number;
  brand: string;
}> = ({startWeight, goalWeight, frame, brand}) => {
  const {fps, width, height} = useVideoConfig();
  const isMobile = height > width;
  
  const fadeIn = interpolate(frame, [0, 25], [0, 1], {extrapolateRight: 'clamp'});
  const weightLoss = startWeight - goalWeight;
  
  // Animated transformation
  const transformProgress = spring({frame: frame - 20, fps, config: {damping: 20}});
  const currentDisplay = Math.round(startWeight - (weightLoss * transformProgress));
  
  return (
    <div style={{
      position:'absolute',
      inset:0,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      opacity: fadeIn,
      padding: isMobile ? '40px 20px' : '60px 80px'
    }}>
      <div style={{
        maxWidth: 1400,
        width: '100%'
      }}>
        {/* Title */}
        <div style={{
          fontSize: isMobile ? 36 : 64,
          fontWeight: 900,
          color: '#0f172a',
          textAlign: 'center',
          marginBottom: isMobile ? 40 : 50,
          lineHeight: 1.1
        }}>
          Imagine {Math.abs(weightLoss)} lbs Lighter…
        </div>
        
        {/* Weight cards - side by side */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? 24 : 40,
          marginBottom: isMobile ? 40 : 50
        }}>
          {/* Start Weight */}
          <div style={{
            width: isMobile ? '100%' : 320,
            maxWidth: 320,
            padding: isMobile ? 28 : 36,
            background: 'white',
            borderRadius: 20,
            boxShadow: '0 10px 40px rgba(0,0,0,.08)',
            border: '2px solid #e2e8f0',
            textAlign: 'center',
            opacity: frame > 20 ? 0.6 : 1,
            transition: 'opacity 0.5s ease'
          }}>
            <div style={{
              width: isMobile ? 120 : 150,
              height: isMobile ? 120 : 150,
              margin: '0 auto 16px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? 48 : 64,
              fontWeight: 900,
              color: '#991b1b'
            }}>
              {startWeight}
            </div>
            <div style={{
              fontSize: isMobile ? 18 : 24,
              fontWeight: 700,
              color: '#64748b',
              marginBottom: 6
            }}>
              Today
            </div>
            <div style={{
              fontSize: isMobile ? 14 : 18,
              color: '#94a3b8'
            }}>
              Starting weight
            </div>
          </div>
          
          {/* Arrow */}
          <div style={{
            fontSize: isMobile ? 40 : 56,
            color: brand,
            fontWeight: 900,
            transform: isMobile ? 'rotate(90deg)' : 'none'
          }}>
            →
          </div>
          
          {/* Goal Weight */}
          <div style={{
            width: isMobile ? '100%' : 320,
            maxWidth: 320,
            padding: isMobile ? 28 : 36,
            background: `linear-gradient(135deg, white 0%, ${brand}08 100%)`,
            borderRadius: 20,
            boxShadow: `0 20px 60px ${brand}30`,
            border: `3px solid ${brand}`,
            textAlign: 'center',
            transform: frame > 20 ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}>
            <div style={{
              width: isMobile ? 120 : 150,
              height: isMobile ? 120 : 150,
              margin: '0 auto 16px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${brand}20 0%, ${brand}40 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? 48 : 64,
              fontWeight: 900,
              color: brand,
              boxShadow: `0 10px 30px ${brand}40`
            }}>
              {frame > 20 ? currentDisplay : goalWeight}
            </div>
            <div style={{
              fontSize: isMobile ? 18 : 24,
              fontWeight: 700,
              color: brand,
              marginBottom: 6
            }}>
              Your Goal
            </div>
            <div style={{
              fontSize: isMobile ? 14 : 18,
              color: '#64748b',
              fontWeight: 600,
              lineHeight: 1.4
            }}>
              {Math.abs(weightLoss)} lbs lighter
            </div>
          </div>
        </div>
        
        {/* Bottom tagline */}
        {frame > 60 && (
          <div style={{
            textAlign: 'center',
            opacity: interpolate(frame, [60, 80], [0, 1], {extrapolateRight: 'clamp'})
          }}>
            <div style={{
              fontSize: isMobile ? 24 : 40,
              fontWeight: 700,
              color: brand,
              lineHeight: 1.4
            }}>
              More energy • Better health
            </div>
          </div>
        )}
      </div>
    </div>
  );
};