import {useCurrentFrame, interpolate, Easing} from 'remotion';

export const BackgroundModern: React.FC<{brand: string}> = ({brand}) => {
  const f = useCurrentFrame();
  const rot = interpolate(f, [0, 300], [0, 90], {easing: Easing.linear});
  const sweep = interpolate(f, [0, 120], [0.2, 0.9], {easing: Easing.inOut(Easing.cubic)});
  const tint = `${brand}33`;

  return (
    <div style={{position:'absolute', inset:0, overflow:'hidden', background:'#0b0e14'}}>
      {/* radial base */}
      <div style={{
        position:'absolute', inset:0,
        background:'radial-gradient(1200px 900px at 20% 15%, #1b2333, #0b0e14 70%)'
      }}/>
      {/* animated conic sweep */}
      <div style={{
        position:'absolute', inset:-200,
        background:`conic-gradient(from ${rot}deg at 25% 10%, ${tint}, transparent ${sweep*100}%)`,
        filter:'blur(80px)', mixBlendMode:'screen'
      }}/>
      {/* subtle diagonal overlay */}
      <div style={{
        position:'absolute', inset:0,
        background:'linear-gradient(120deg, transparent 40%, rgba(0,0,0,.45))'
      }}/>
      {/* vignette */}
      <div style={{
        position:'absolute', inset:0,
        background:'radial-gradient(120% 120% at 50% 60%, transparent 60%, rgba(0,0,0,.55))'
      }}/>
    </div>
  );
};
