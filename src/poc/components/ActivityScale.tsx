import type {Props} from '../POC_JourneyVideo';

const levels = ['Sedentary', 'Light activity', 'Regular exercise', 'Very active'] as const;

export const ActivityScale: React.FC<Props> = ({activity, theme}) => {
  return (
    <div style={{position: 'absolute', left: 60, right: 60, top: 520}}>
      <div style={{fontSize: 32, color: '#fff', marginBottom: 14}}>
        Current activity
      </div>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10}}>
        {levels.map((lvl) => {
          const active = lvl === activity;
          return (
            <div
              key={lvl}
              style={{
                padding: '18px 14px',
                borderRadius: 14,
                background: active ? `${theme.brandColor}` : 'rgba(255,255,255,.08)',
                color: active ? '#0b0e14' : '#fff',
                fontWeight: 800,
                textAlign: 'center',
              }}
            >
              {lvl}
            </div>
          );
        })}
      </div>
      <div style={{marginTop: 10, color: '#fff', opacity: 0.9}}>
        Your plan will fit your routine.
      </div>
    </div>
  );
};
