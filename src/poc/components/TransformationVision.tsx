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
  
  // Slower animation
  const transformProgress = spring({frame: frame - 20, fps, config: {damping: 40}});
  const currentDisplay = Math.round(startWeight - (weightLoss * transformProgress));
  
  return (
    <div style={{
      position:'absolute',
      inset:0,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      opacity: fadeIn,
      padding: isMobile ? '30px 20px' : '40px 60px'
    }}>
      <div style={{
        maxWidth: 1400,
        width: '100%'
      }}>
        {/* Title */}
        <div style={{
          fontSize: isMobile ? 32 : 56,
          fontWeight: 900,
          color: '#0f172a',
          textAlign: 'center',
          marginBottom: isMobile ? 30 : 40,
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
          gap: isMobile ? 20 : 32,
          marginBottom: isMobile ? 30 : 40
        }}>
          {/* Start Weight */}
          <div style={{
            width: isMobile ? '100%' : 280,
            maxWidth: 280,
            padding: isMobile ? 24 : 32,
            background: 'white',
            borderRadius: 20,
            boxShadow: '0 10px 40px rgba(0,0,0,.08)',
            border: '2px solid #e2e8f0',
            textAlign: 'center',
            opacity: frame > 20 ? 0.6 : 1,
            transition: 'opacity 0.5s ease'
          }}>
            <div style={{
              width: isMobile ? 100 : 130,
              height: isMobile ? 100 : 130,
              margin: '0 auto 14px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? 40 : 56,
              fontWeight: 900,
              color: '#991b1b'
            }}>
              {startWeight}
            </div>
            <div style={{
              fontSize: isMobile ? 16 : 22,
              fontWeight: 700,
              color: '#64748b',
              marginBottom: 4
            }}>
              Today
            </div>
            <div style={{
              fontSize: isMobile ? 13 : 16,
              color: '#94a3b8'
            }}>
              Starting weight
            </div>
          </div>
          
          {/* Arrow */}
          <div style={{
            fontSize: isMobile ? 36 : 48,
            color: brand,
            fontWeight: 900,
            transform: isMobile ? 'rotate(90deg)' : 'none'
          }}>
            →
          </div>
          
          {/* Goal Weight */}
          <div style={{
            width: isMobile ? '100%' : 280,
            maxWidth: 280,
            padding: isMobile ? 24 : 32,
            background: `linear-gradient(135deg, white 0%, ${brand}08 100%)`,
            borderRadius: 20,
            boxShadow: `0 20px 60px ${brand}30`,
            border: `3px solid ${brand}`,
            textAlign: 'center',
            transform: frame > 20 ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}>
            <div style={{
              width: isMobile ? 100 : 130,
              height: isMobile ? 100 : 130,
              margin: '0 auto 14px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${brand}20 0%, ${brand}40 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: isMobile ? 40 : 56,
              fontWeight: 900,
              color: brand,
              boxShadow: `0 10px 30px ${brand}40`
            }}>
              {frame > 20 ? currentDisplay : goalWeight}
            </div>
            <div style={{
              fontSize: isMobile ? 16 : 22,
              fontWeight: 700,
              color: brand,
              marginBottom: 4
            }}>
              Your Goal
            </div>
            <div style={{
              fontSize: isMobile ? 13 : 16,
              color: '#64748b',
              fontWeight: 600
            }}>
              {Math.abs(weightLoss)} lbs lighter
            </div>
          </div>
        </div>
        
        {/* Benefits grid */}
        {frame > 80 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? 12 : 16,
            marginTop: isMobile ? 20 : 30
          }}>
            {[
              {icon: '💊', text: 'Doctor Prescribed'},
              {icon: '📊', text: 'Proven Results'},
              {icon: '🎯', text: 'Reduces Cravings'},
              {icon: '✨', text: 'Sustainable'}
            ].map((item, i) => (
              <div key={i} style={{
                padding: isMobile ? 14 : 18,
                background: 'white',
                borderRadius: 12,
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,.06)',
                opacity: interpolate(frame, [80 + i*3, 92 + i*3], [0, 1], {extrapolateRight: 'clamp'}),
                transform: `translateY(${interpolate(frame, [80 + i*3, 92 + i*3], [15, 0], {extrapolateRight: 'clamp'})}px)`
              }}>
                <div style={{fontSize: isMobile ? 24 : 28, marginBottom: 6}}>
                  {item.icon}
                </div>
                <div style={{
                  fontSize: isMobile ? 12 : 15,
                  fontWeight: 700,
                  color: '#1e293b',
                  lineHeight: 1.2
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