import type {Props} from '../POC_JourneyVideo';

export const MotivationBurst: React.FC<Props> = ({motivation}) => {
  return (
    <div style={{position: 'absolute', left: 60, right: 60, top: 860}}>
      <div
        style={{
          fontSize: 44,
          fontWeight: 900,
          color: '#fff',
          textShadow: '0 6px 30px rgba(0,0,0,.35)',
        }}
      >
        Your #1 goal: {motivation}
      </div>
    </div>
  );
};
