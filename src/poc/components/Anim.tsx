import {useCurrentFrame, interpolate, Easing} from 'remotion';

export const FadeIn: React.FC<{delay?:number; dur?:number; children:any}> = ({delay=0, dur=15, children}) => {
  const f = useCurrentFrame();
  const o = interpolate(f, [delay, delay+dur], [0, 1], {extrapolateLeft:'clamp', extrapolateRight:'clamp'});
  return <div style={{opacity:o}}>{children}</div>;
};

export const SlideInLeft: React.FC<{delay?:number; dur?:number; px?:number; children:any}> =
({delay=0, dur=18, px=24, children}) => {
  const f = useCurrentFrame();
  const t = interpolate(f, [delay, delay+dur], [px, 0], {easing:Easing.out(Easing.cubic), extrapolateLeft:'clamp', extrapolateRight:'clamp'});
  const o = interpolate(f, [delay, delay+dur/2], [0, 1], {extrapolateLeft:'clamp', extrapolateRight:'clamp'});
  return <div style={{transform:`translateX(${t}px)`, opacity:o}}>{children}</div>;
};

export const ScaleIn: React.FC<{delay?:number; dur?:number; from?:number; children:any}> =
({delay=0, dur=18, from=.96, children}) => {
  const f = useCurrentFrame();
  const s = interpolate(f, [delay, delay+dur], [from, 1], {easing:Easing.out(Easing.cubic), extrapolateLeft:'clamp', extrapolateRight:'clamp'});
  const o = interpolate(f, [delay, delay+dur/2], [0, 1], {extrapolateLeft:'clamp', extrapolateRight:'clamp'});
  return <div style={{transform:`scale(${s})`, opacity:o}}>{children}</div>;
};