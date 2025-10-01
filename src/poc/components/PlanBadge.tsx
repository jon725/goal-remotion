export const PlanBadge: React.FC<{plan:'Injection'|'Tablet'; brand:string}> = ({plan, brand}) => {
  const icon = plan === 'Injection' ? '💉' : '💊';
  return (
    <div style={{
      position:'absolute', top:40, right:40, display:'inline-flex', alignItems:'center', gap:10,
      padding:'10px 14px', borderRadius:999, background:'rgba(0,0,0,.45)', border:`1px solid ${brand}77`,
      color:'#fff', fontWeight:800
    }}>
      <span style={{fontSize:22}}>{icon}</span>
      <span>{plan} plan</span>
    </div>
  );
};