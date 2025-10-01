import React from 'react';
import {useCurrentFrame, interpolate, Easing} from 'remotion';

export const AnimatedBackground: React.FC<{brand: string}> = ({brand}) => {
  const frame = useCurrentFrame();
  const rot = interpolate(frame, [0, 600], [0, 180], {easing: Easing.linear});
  const pulse = Math.sin(frame * 0.05) * 0.3 + 0.7;
  
  return (
    <div style={{position:'absolute', inset:0, overflow:'hidden', background:'#0a0d12'}}>
      <div style={{
        position:'absolute', inset:0,
        background:'radial-gradient(1400px 1000px at 25% 20%, #1a2332, #0a0d12 65%)'
      }}/>
      <div style={{
        position:'absolute', inset:-300,
        background:`conic-gradient(from ${rot}deg at 30% 15%, ${brand}40, transparent 25%, ${brand}20, transparent 50%)`,
        filter:'blur(100px)', 
        mixBlendMode:'screen',
        opacity: pulse
      }}/>
      <div style={{
        position:'absolute', inset:0,
        background:'linear-gradient(135deg, transparent 30%, rgba(0,0,0,.6))'
      }}/>
      <div style={{
        position:'absolute', inset:0,
        background:'radial-gradient(130% 130% at 50% 60%, transparent 55%, rgba(0,0,0,.7))'
      }}/>
    </div>
  );
};