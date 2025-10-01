import React from 'react';
import {interpolate, Easing} from 'remotion';
import {GlassCard} from './GlassCard';

export const ProjectionPanel: React.FC<{
  start: number;
  current: number;
  goal: number;
  etaTo20: number | null;
  etaToGoal: number;
  brand: string;
  frame: number;
}> = ({start, current, goal, etaTo20, etaToGoal, brand, frame}) => {
  const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});
  const y = interpolate(frame, [0, 25], [40, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp'
  });
  
  const toGoal = Math.max(0, current - goal);
  const totalTo20 = Math.round(start * 0.20);
  
  return (
    <div style={{
      position:'absolute',
      left:80,
      right:80,
      top:680,
      transform: `translateY(${y}px)`,
      opacity
    }}>
      <GlassCard>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:20, marginBottom: 24}}>
          <Stat label="Start Weight" value={`${start} lb`} />
          <Stat label="Current Weight" value={`${current} lb`} accent={brand} />
          <Stat label="Goal Weight" value={`${goal} lb`} />
        </div>
        
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:20}}>
          <HighlightBadge
            label="To 20% Loss"
            value={`${totalTo20} lb total`}
            sub={etaTo20 === 0 ? '✓ Reached!' : etaTo20 ? `~${etaTo20} weeks` : '—'}
            brand={brand}
          />
          <HighlightBadge
            label="To Goal"
            value={`${toGoal} lb remaining`}
            sub={etaToGoal === 0 ? '✓ Reached!' : `~${etaToGoal} weeks`}
            brand={brand}
          />
        </div>
        
        <div style={{
          marginTop: 20,
          padding: 16,
          borderRadius: 12,
          background: 'rgba(0,0,0,.02)',
          fontSize: 14,
          color: '#0a0d12',
          opacity: 0.7
        }}>
          Projections based on clinical averages. Individual results vary by adherence and response.
        </div>
      </GlassCard>
    </div>
  );
};

const Stat: React.FC<{label: string; value: string; accent?: string}> = ({label, value, accent}) => (
  <div style={{
    padding: '20px',
    borderRadius: 16,
    background: accent ? `${accent}10` : 'rgba(0,0,0,.03)',
    border: accent ? `2px solid ${accent}40` : '1px solid rgba(0,0,0,.08)',
    textAlign: 'center'
  }}>
    <div style={{fontSize: 14, color: '#0a0d12', opacity: 0.6, marginBottom: 8, fontWeight: 600}}>
      {label}
    </div>
    <div style={{fontSize: 28, fontWeight: 900, color: accent || '#0a0d12'}}>
      {value}
    </div>
  </div>
);

const HighlightBadge: React.FC<{label: string; value: string; sub: string; brand: string}> = 
({label, value, sub, brand}) => (
  <div style={{
    padding: '20px 24px',
    borderRadius: 16,
    background: `${brand}08`,
    border: `2px solid ${brand}`,
  }}>
    <div style={{fontSize: 16, fontWeight: 800, color: '#0a0d12', marginBottom: 8}}>
      {label}
    </div>
    <div style={{fontSize: 20, color: '#0a0d12', opacity: 0.8, marginBottom: 12}}>
      {value}
    </div>
    <div style={{fontSize: 22, color: brand, fontWeight: 900}}>
      {sub}
    </div>
  </div>
);