import React from 'react';
import {spring, useVideoConfig, interpolate, Easing} from 'remotion';

export const HeroOpener: React.FC<{
  name: string;
  frame: number;
  brand: string;
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
  etaToGoal: number;
}> = ({name, frame, brand, startWeight, currentWeight, goalWeight, etaToGoal}) => {
  const {fps, width, height} = useVideoConfig();
  const isMobile = height > width;
  
  // Calculate months to goal from weeks
  const monthsToGoal = Math.ceil(etaToGoal / 4);
  
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
      justifyContent: isMobile ? 'flex-start' : 'center',
      paddingTop: isMobile ? '200px' : 0,
      padding: isMobile ? '200px 60px 60px' : '0 80px',
      opacity: fadeIn,
      transform: `translateY(${slideUp}px)`
    }}>
      <div style={{
        fontSize: isMobile ? 52 : 40,
        fontWeight: 600,
        color: '#64748b',
        marginBottom: isMobile ? 48 : 32,
        letterSpacing: 3,
        textTransform: 'uppercase'
      }}>
        Imagine Yourself
      </div>
      
      <div style={{
        fontSize: isMobile ? 140 : 120,
        fontWeight: 900,
        color: '#0f172a',
        textAlign: 'center',
        lineHeight: 1.1,
        marginBottom: isMobile ? 60 : 40,
        background: `linear-gradient(135deg, #0f172a 0%, ${brand} 100%)`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      }}>
        {name}, {monthsToGoal} Months<br/>From Now
      </div>
      
      <div style={{
        fontSize: isMobile ? 56 : 44,
        fontWeight: 500,
        color: '#475569',
        textAlign: 'center',
        maxWidth: isMobile ? '100%' : 1200,
        lineHeight: 1.6,
        marginBottom: isMobile ? 80 : 48,
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
          padding: isMobile ? '28px 48px' : '20px 40px',
          background: `${brand}15`,
          border: `2px solid ${brand}40`,
          borderRadius: 16,
          color: brand,
          fontWeight: 700,
          fontSize: isMobile ? 36 : 28,
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          ✨ Your transformation starts here
        </div>
      )}
    </div>
  );
};