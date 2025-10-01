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
      opacity: fadeIn
    }}>
      <div style={{
        maxWidth: isMobile ? '100%' : 1400,
        width: '100%',
        padding: isMobile ? '60px 40px' : '0 80px'
      }}>
        <div style={{
          fontSize: isMobile ? 42 : 48,
          fontWeight: 900,
          color: '#0f172a',
          textAlign: 'center',
          marginBottom: isMobile ? 50 : 60,
          lineHeight: 1.1
        }}>
        Imagine {Math.abs(weightLoss)} lbs Lighter…
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: isMobile ? 30 : 40,
          marginBottom: isMobile ? 50 : 80
        }}>
          {/* Before - Stacked on mobile */}
          <div style={{
            width: isMobile ? '100%' : 400,
            padding: isMobile ? 36 : 48,
            background: 'white',
            borderRadius: 24,
            boxShadow: '0 10px 40px rgba(0,0,0,.08)',
            border: '2px solid #e2e8f0',
            textAlign: 'center',
            opacity: frame > 20 ? 0.6 : 1,
            transition: 'opacity 0.5s ease'
          }}>
            <div style={{
              width: isMobile ? 140 : 180,
              height: isMobile ? 140 : 180,
              margin: '0 auto 20px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? 56 : 72,
              fontWeight: 900,
              color: '#991b1b'
            }}>
              {startWeight}
            </div>
            <div style={{
              fontSize: isMobile ? 20 : 24,
              fontWeight: 700,
              color: '#64748b',
              marginBottom: 8
            }}>
              Today
            </div>
            <div style={{
              fontSize: isMobile ? 15 : 18,
              color: '#94a3b8'
            }}>
              Starting weight
            </div>
          </div>
          
          {/* Arrow - Rotated for mobile */}
          <div style={{
            fontSize: isMobile ? 48 : 64,
            color: brand,
            fontWeight: 900,
            transform: isMobile ? 'rotate(90deg)' : 'none'
          }}>
            →
          </div>
          
          {/* After */}
          <div style={{
            width: isMobile ? '100%' : 400,
            padding: isMobile ? 36 : 48,
            background: `linear-gradient(135deg, white 0%, ${brand}08 100%)`,
            borderRadius: 24,
            boxShadow: `0 20px 60px ${brand}30`,
            border: `3px solid ${brand}`,
            textAlign: 'center',
            transform: frame > 20 ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}>
            <div style={{
              width: isMobile ? 140 : 180,
              height: isMobile ? 140 : 180,
              margin: '0 auto 20px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${brand}20 0%, ${brand}40 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? 56 : 72,
              fontWeight: 900,
              color: brand,
              boxShadow: `0 10px 30px ${brand}40`
            }}>
              {frame > 20 ? currentDisplay : goalWeight}
            </div>
            <div style={{
              fontSize: isMobile ? 20 : 24,
              fontWeight: 700,
              color: brand,
              marginBottom: 8
            }}>
              Your Goal
            </div>
            <div style={{
              fontSize: isMobile ? 15 : 18,
              color: '#64748b',
              fontWeight: 600,
              lineHeight: 1.4
            }}>
              {Math.abs(weightLoss)} lbs lighter<br/>More energy • Better health
            </div>
          </div>
        </div>
        
        {/* Key benefits - Stack on mobile for better readability */}
        {frame > 60 && (
          <div style={{
            marginTop: isMobile ? 40 : 80,
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? 20 : 24
          }}>
            {[
              {text: 'Doctor-Prescribed & Monitored for Safety'},
              {text: 'Clinically Proven, Real Results'},
              {text: 'Reduces Food Noise & Cravings'},
              {text: 'Sustainable Weight Loss & Better Health'}
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: isMobile ? 16 : 0,
                flexDirection: isMobile ? 'row' : 'column',
                padding: isMobile ? '20px 24px' : 24,
                background: 'white',
                borderRadius: 16,
                textAlign: isMobile ? 'left' : 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,.06)',
                opacity: interpolate(frame, [60 + i*5, 75 + i*5], [0, 1], {extrapolateRight: 'clamp'}),
                transform: `translateY(${interpolate(frame, [60 + i*5, 75 + i*5], [20, 0], {extrapolateRight: 'clamp'})}px)`
              }}>
                <div style={{
                  fontSize: isMobile ? 36 : 40,
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div style={{
                  fontSize: isMobile ? 18 : 18,
                  fontWeight: 700,
                  color: '#1e293b',
                  lineHeight: 1.3
                }}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};