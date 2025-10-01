import {useCurrentFrame, interpolate, Easing} from 'remotion';
import type {Props} from '../POC_JourneyVideo';

export const ProgressSection: React.FC<Props> = ({weight, goalWeight, theme}) => {
  const f = useCurrentFrame();
  const pct = Math.max(
    0,
    Math.min(1, interpolate(f, [0, 60], [0, 1], {easing: Easing.out(Easing.cubic)}))
  );
  const current = Math.round(weight - (weight - goalWeight) * pct);
  return (
    <div style={{position: 'absolute', left: 60, right: 60, bottom: 240}}>
      <div
        style={{
          height: 18,
          borderRadius: 14,
          background: 'rgba(255,255,255,.28)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${pct * 100}%`,
            height: '100%',
            background: theme.brandColor,
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: '#fff',
          marginTop: 12,
          fontWeight: 800,
        }}
      >
        <span>{weight} lb</span>
        <span>{current} lb</span>
        <span>{goalWeight} lb</span>
      </div>
      <div style={{marginTop: 6, color: '#fff', opacity: 0.9, fontWeight: 700}}>
        From {weight} lb → {goalWeight} lb ({weight - goalWeight} lb to go)
      </div>
    </div>
  );
};
