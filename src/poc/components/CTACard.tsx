import React from 'react';
import {interpolate, Easing} from 'remotion';

export const CTACard: React.FC<{
  plan: string;
  brand: string;
  frame: number;
}> = ({plan, brand, frame}) => {
  const scale = interpolate(frame, [0, 25], [0.9, 1], {
    easing: Easing.out(Easing.back(1.2)),
    extrapolateRight: 'clamp'
  });
  const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});
  
  return (
    <div style={{
      position:'absolute',
      left:80,
      right:80,
      bottom:100,
      transform: `scale(${scale})`,
      opacity
    }}>
      <div style={{
        padding: '48px 56px',
        borderRadius: 28,
        background: 'rgba(255,255,255,.97)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 30px 80px rgba(0,0,0,.4)',
        border: '1px solid rgba(255,255,255,.3)',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: 52,
          fontWeight: 900,
          color: '#0a0d12',
          marginBottom: 16
        }}>
          Start Your {plan} Plan Today
        </div>
        <div style={{
          fontSize: 24,
          color: '#0a0d12',
          opacity: 0.7,
          marginBottom: 32
        }}>
          Doctor consultations • Medication • Shipping — all included
        </div>
        <div style={{
          display: 'inline-block',
          padding: '20px 48px',
          borderRadius: 16,
          background: brand,
          color: '#fff',
          fontWeight: 900,
          fontSize: 32,
          boxShadow: `0 8px 24px ${brand}60`,
          cursor: 'pointer'
        }}>
          Get Started →
        </div>
        <div style={{
          marginTop: 24,
          fontSize: 16,
          color: '#0a0d12',
          opacity: 0.5
        }}>
          Trusted by thousands nationwide • Start from £49/month
        </div>
      </div>
    </div>
  );
};