import {GlassCard} from './GlassCard';

export const PlanOverview: React.FC<{
  plan: 'Injection'|'Tablet';
  assumptions: {rampWeeks:number};
}> = ({plan, assumptions}) => {
  return (
    <div style={{position:'absolute', left:60, right:60, top:260}}>
      <GlassCard>
        <div style={{display:'flex', justifyContent:'space-between', gap:16, flexWrap:'wrap'}}>
          <Phase title="Titration" weeks={assumptions.rampWeeks} detail="Dose increases for tolerance" active />
          <Phase title="Steady Loss" weeks="Ongoing" detail="Consistent weekly reduction" />
          <Phase title="Maintenance" weeks="After goal" detail="Stabilise & sustain" />
        </div>
        <div style={{marginTop:12, opacity:.9}}>
          Plan type: <strong>{plan}</strong>. We adjust dosing clinically and track response.
        </div>
      </GlassCard>
    </div>
  );
};

const Phase: React.FC<{title:string; weeks:number|string; detail:string; active?:boolean}> = ({title, weeks, detail, active}) => (
  <div style={{
    flex:'1 1 200px', padding:'14px 16px', borderRadius:14,
    background: active ? 'rgba(255,255,255,.10)' : 'rgba(255,255,255,.06)',
    border:'1px solid rgba(255,255,255,.15)'
  }}>
    <div style={{fontWeight:900, fontSize:18}}>{title}</div>
    <div style={{opacity:.9, marginTop:4}}>{typeof weeks==='number' ? `${weeks} wks` : weeks}</div>
    <div style={{opacity:.8, marginTop:6, fontSize:14}}>{detail}</div>
  </div>
);
