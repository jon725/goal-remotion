import React from 'react';
import {spring, useVideoConfig, interpolate} from 'remotion';

export const TitleCard: React.FC<{
  name: string;
  plan: string;
  brand: string;
  frame: number;
}> = ({name, plan, brand, frame}) => {
  const {fps} = useVideoConfig();
  const slideX = spring({frame, fps, config: {damping: 20, mass: 0.5}}) * 100 - 100;
  const fadeIn = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});
  
  return (
    <div style={{
      position:'absolute', 
      left:80, 
      top:140,
      transform: `translateX(${slideX}px)`,
      opacity: fadeIn
    }}>
      <div style={{
        fontSize: 72,
        fontWeight: 900,
        letterSpacing: -1,
        color: '#fff',
        lineHeight: 1.1,
        textShadow: '0 4px 20px rgba(0,0,0,.5)'
      }}>
        {name}'s<br/>
        <span style={{
          background: `linear-gradient(120deg, ${brand}, #ffffff)`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          Weight Loss
        </span>{' '}Journey
      </div>
      <div style={{
        marginTop: 24,
        display: 'inline-block',
        padding: '10px 20px',
        borderRadius: 16,
        fontSize: 22,
        background: 'rgba(255,255,255,.15)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,.2)',
        color: '#fff',
        fontWeight: 600
      }}>
        GLP-1 {plan} • Doctors & Meds Included
      </div>
    </div>
  );
};