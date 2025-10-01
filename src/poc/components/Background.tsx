import {useCurrentFrame, interpolate, Easing} from 'remotion';

export const Background: React.FC<{videoUrl?: string|null; tint: string}> = ({videoUrl, tint}) => {
  const f = useCurrentFrame();
  const sweep = interpolate(f, [0, 90], [0, 1], {easing: Easing.out(Easing.cubic)});
  return (
    <div style={{position:'absolute', inset:0, overflow:'hidden'}}>
      {videoUrl ? (
        <video src={videoUrl} autoPlay muted loop playsInline
          style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', filter:'brightness(.6)'}} />
      ) : (
        <div style={{
          position:'absolute', inset:0,
          background: 'radial-gradient(1200px 800px at 20% 20%, #131723, #0b0e14 70%)'
        }}/>
      )}

      {/* Soft animated gradient sweep */}
      <div style={{
        position:'absolute', inset:-200,
        background: `conic-gradient(from ${sweep*120}deg at 30% 10%, ${tint}33, transparent 40%, ${tint}22, transparent 70%)`,
        mixBlendMode:'screen', filter:'blur(60px)'
      }}/>

      {/* Vignette */}
      <div style={{
        position:'absolute', inset:0,
        background:'radial-gradient(120% 120% at 50% 60%, transparent 50%, rgba(0,0,0,.55) 100%)'
      }}/>

      {/* Film grain */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'url("data:image/svg+xml;utf8, \
          <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'>\
            <filter id=\'n\'>\
              <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'2\' stitchTiles=\'stitch\'/>\
              <feColorMatrix type=\'saturate\' values=\'0\'/>\
              <feComponentTransfer><feFuncA type=\'linear\' slope=\'0.065\'/></feComponentTransfer>\
            </filter>\
            <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/>\
          </svg>")',
        opacity:.35, mixBlendMode:'soft-light'
      }}/>
    </div>
  );
};
