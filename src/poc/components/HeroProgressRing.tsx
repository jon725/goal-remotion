import React from 'react';
import {spring, useVideoConfig, interpolate, Easing} from 'remotion';

export const HeroProgressRing: React.FC<{
  start: number;
  current: number;
  goal: number;
  brand: string;
  frame: number;
}> = ({start, current, goal, brand, frame}) => {
  const {fps} = useVideoConfig();
  const progress = Math.max(0, Math.min(1, (start - current) / (start - goal)));
  
  const animProgress = spring({frame, fps, config: {damping: 20}});
  const displayProgress = progress * animProgress;
  
  const size = 320;
  const stroke = 18;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - displayProgress);
  
  const scale = interpolate(frame, [0, 20], [0.8, 1], {
    easing: Easing.out(Easing.back(1.5)),
    extrapolateRight: 'clamp'
  });
  
  return (
    <div style={{
      position:'absolute',
      right: 100,
      top: 280,
      transform: `scale(${scale})`
    }}>
      <svg width={size} height={size} style={{
        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,.4))'
      }}>
        <defs>
          <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={brand}/>
            <stop offset="100%" stopColor="#ffffff"/>
          </linearGradient>
        </defs>
        <circle
          cx={size/2} cy={size/2} r={radius}
          stroke="rgba(255,255,255,.2)"
          strokeWidth={stroke}
          fill="rgba(255,255,255,.05)"
        />
        <circle
          cx={size/2} cy={size/2} r={radius}
          stroke="url(#progressGrad)"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size/2} ${size/2})`}
        />
      </svg>
      <div style={{
        position:'absolute',
        inset:0,
        display:'flex',
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
        color:'#fff',
        textAlign: 'center'
      }}>
        <div style={{fontSize: 56, fontWeight: 900, lineHeight: 1}}>
          {Math.round(current)}
        </div>
        <div style={{fontSize: 20, opacity: 0.8, marginTop: 8}}>
          pounds
        </div>
        <div style={{
          marginTop: 16,
          fontSize: 18,
          opacity: 0.9,
          fontWeight: 600
        }}>
          Goal: {goal} lb
        </div>
        <div style={{
          marginTop: 8,
          fontSize: 24,
          fontWeight: 900,
          color: brand
        }}>
          {Math.round(progress * 100)}% there
        </div>
      </div>
    </div>
  );
};