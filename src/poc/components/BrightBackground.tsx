import React from 'react';
import {useCurrentFrame, interpolate, Easing} from 'remotion';

export const BrightBackground: React.FC<{brand: string}> = ({brand}) => {
  const frame = useCurrentFrame();
  
  // Slow, gentle movement for professional feel
  const float1 = Math.sin(frame * 0.02) * 30;
  const float2 = Math.cos(frame * 0.015) * 40;
  const rotate = interpolate(frame, [0, 900], [0, 360], {easing: Easing.linear});
  
  return (
    <div style={{
      position:'absolute',
      inset:0,
      background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 50%, #ffffff 100%)',
      overflow: 'hidden'
    }}>
      {/* Soft gradient orbs for depth - medical/professional feel */}
      <div style={{
        position:'absolute',
        top: `${20 + float1}%`,
        left: `${15}%`,
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${brand}15, transparent 70%)`,
        filter: 'blur(60px)',
      }}/>
      
      <div style={{
        position:'absolute',
        bottom: `${10 + float2}%`,
        right: `${10}%`,
        width: 700,
        height: 700,
        borderRadius: '50%',
        background: `radial-gradient(circle, #10b98120, transparent 70%)`,
        filter: 'blur(70px)',
      }}/>
      
      {/* Subtle animated shapes for modern feel */}
      <div style={{
        position:'absolute',
        top: '50%',
        left: '50%',
        width: 800,
        height: 800,
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
        background: `conic-gradient(from 0deg, transparent 0%, ${brand}08 25%, transparent 50%, #10b98108 75%, transparent 100%)`,
        filter: 'blur(80px)',
        opacity: 0.5
      }}/>
      
      {/* Clean grid overlay for medical/precise aesthetic */}
      <div style={{
        position:'absolute',
        inset:0,
        backgroundImage: `
          linear-gradient(${brand}03 1px, transparent 1px),
          linear-gradient(90deg, ${brand}03 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.3
      }}/>
      
      {/* Subtle vignette */}
      <div style={{
        position:'absolute',
        inset:0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(255,255,255,.4) 100%)'
      }}/>
    </div>
  );
};