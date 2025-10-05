import React from 'react';
import {spring, useVideoConfig, interpolate, Easing} from 'remotion';

export const HeroOpener: React.FC<{
  name: string;
  frame: number;
  brand: string;
}> = ({name, frame, brand}) => {
  const {fps} = useVideoConfig();
  
  const fadeIn = interpolate(frame, [0, 30], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp'
  });
  
  const slideUp = interpolate(frame, [10, 40], [50, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp'
  });
  
  const scaleIn = spring({frame: frame - 20, fps, config: {damping: 15, mass: 0.5}});
  
  return (
    <div style={{
      position:'absolute',
      inset:0,
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      opacity: fadeIn,
      transform: `translateY(${slideUp}px)`
    }}>
      <div style={{
        fontSize: 40, // Increased from 28
        fontWeight: 600,
        color: '#64748b',
        marginBottom: 32,
        letterSpacing: 3,
        textTransform: 'uppercase'
      }}>
        Imagine Yourself
      </div>
      
      <div style={{
        fontSize: 120, // Increased from 92
        fontWeight: 900,
        color: '#0f172a',
        textAlign: 'center',
        lineHeight: 1.1,
        marginBottom: 40,
        background: `linear-gradient(135deg, #0f172a 0%, ${brand} 100%)`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      }}>
        {name}, 6 Months<br/>From Now
      </div>
      
      <div style={{
        fontSize: 44, // Increased from 32
        fontWeight: 500,
        color: '#475569',
        textAlign: 'center',
        maxWidth: 1200, // Increased from 900
        lineHeight: 1.6,
        marginBottom: 48,
        transform: `scale(${scaleIn})`,
        opacity: frame > 20 ? 1 : 0
      }}>
        Healthier. Happier. More confident.<br/>
        <span style={{color: brand, fontWeight: 700}}>
          This isn't just a dream — it's your future.
        </span>
      </div>
      
      {frame > 40 && (
        <div style={{
          padding: '20px 40px', // Increased padding
          background: `${brand}15`,
          border: `2px solid ${brand}40`,
          borderRadius: 16,
          color: brand,
          fontWeight: 700,
          fontSize: 28, // Increased from 20
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          ✨ Your transformation starts here
        </div>
      )}
    </div>
  );
};