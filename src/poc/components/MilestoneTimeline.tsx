import React from 'react';
import {interpolate, Easing} from 'remotion';
import {GlassCard} from './GlassCard';

export type Milestone = {
  label: string;
  lossLbs: number;
  reached: boolean;
  deltaNeeded: number;
  etaWeeksFromNow: number;
};

export const MilestoneTimeline: React.FC<{
  milestones: Milestone[];
  brand: string;
  frame: number;
  startWeight: number;
  currentWeight: number;
}> = ({milestones, brand, frame, startWeight, currentWeight}) => {
  const baseDelay = 10;
  
  return (
    <div style={{position:'absolute', left:80, right:80, top:420}}>
      <GlassCard>
        <div style={{
          fontSize: 28, 
          fontWeight: 900, 
          color: '#0a0d12',
          marginBottom: 20
        }}>
          Your Milestones
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:16}}>
          {milestones.map((m, i) => {
            const delay = baseDelay + i * 4;
            const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {extrapolateRight: 'clamp'});
            const y = interpolate(frame, [delay, delay + 15], [20, 0], {
              easing: Easing.out(Easing.cubic),
              extrapolateRight: 'clamp'
            });
            
            return (
              <div key={m.label} style={{
                padding:'20px 18px',
                borderRadius:18,
                background: m.reached ? `${brand}15` : 'rgba(0,0,0,.03)',
                border: `2px solid ${m.reached ? brand : 'rgba(0,0,0,.08)'}`,
                transform: `translateY(${y}px)`,
                opacity,
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  fontSize: 32,
                  fontWeight: 900,
                  color: m.reached ? brand : '#0a0d12'
                }}>
                  {m.label}
                </div>
                <div style={{
                  fontSize: 16,
                  color: '#0a0d12',
                  opacity: 0.7,
                  marginTop: 4
                }}>
                  {m.lossLbs} lb loss
                </div>
                {m.reached ? (
                  <div style={{
                    marginTop: 12,
                    color: brand,
                    fontWeight: 800,
                    fontSize: 18
                  }}>
                    ✓ Achieved!
                  </div>
                ) : (
                  <div style={{
                    marginTop: 12,
                    fontSize: 14,
                    color: '#0a0d12',
                    opacity: 0.6
                  }}>
                    ~{m.etaWeeksFromNow} weeks
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div style={{
          marginTop: 20,
          padding: '12px 16px',
          borderRadius: 12,
          background: `${brand}10`,
          color: '#0a0d12',
          fontSize: 16
        }}>
          <strong>{Math.max(0, startWeight - currentWeight)} lb lost</strong> so far. Keep going! 🎯
        </div>
      </GlassCard>
    </div>
  );
};