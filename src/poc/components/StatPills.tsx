import {useCurrentFrame, interpolate} from 'remotion';
import type {Props} from '../POC_JourneyVideo';
import {GlassCard} from './GlassCard';

const Chip: React.FC<{label:string; value:string; i:number; color:string}> = ({label, value, i, color}) => {
  const f = useCurrentFrame();
  const start = 8 + i*6;
  const o = interpolate(f, [start, start+12], [0, 1]);
  const y = interpolate(f, [start, start+12], [12, 0]);
  return (
    <GlassCard style={{display:'inline-flex', alignItems:'center', gap:10, marginRight:12, transform:`translateY(${y}px)`, opacity:o}}>
      <span style={{opacity:.8, fontWeight:600}}>{label}</span>
      <span style={{fontWeight:900, color}}>{value}</span>
    </GlassCard>
  );
};

export const StatPills: React.FC<Props & {onlyPlan?: boolean}> = ({height, weight, bmi, plan, theme, onlyPlan}) => (
  <div style={{position:'absolute', left:60, top:260}}>
    {!onlyPlan && <>
      <Chip label="Height" value={height} i={0} color="#fff"/>
      <Chip label="Weight" value={`${weight} lb`} i={1} color="#fff"/>
      <Chip label="BMI" value={bmi.toFixed(1)} i={2} color={theme.brandColor}/>
    </>}
    <Chip label="Preferred" value={plan} i={onlyPlan ? 0 : 3} color={theme.brandColor}/>
  </div>
);
