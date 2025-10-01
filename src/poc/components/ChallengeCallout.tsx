import type {Props} from '../POC_JourneyVideo';

export const ChallengeCallout: React.FC<Props> = ({challenge}) => {
  return (
    <div style={{position: 'absolute', left: 60, right: 60, top: 720}}>
      <div style={{fontSize: 36, fontWeight: 900, color: '#fff', marginBottom: 8}}>
        Past struggle: {challenge}
      </div>
      <div style={{fontSize: 28, color: 'rgba(255,255,255,.95)'}}>
        {challenge === 'Emotional eating' &&
          'Your plan includes support to manage cravings.'}
        {challenge === 'Staying on plan' && 'We’ll give you tools to stay consistent.'}
        {challenge === 'Slow metabolism' &&
          'GLP-1s help address metabolic hurdles.'}
        {challenge === 'No time' && 'Fast, convenient care — no clinic visits needed.'}
        {challenge === 'Medication side effects' &&
          'We’ll optimise tolerance and comfort.'}
      </div>
    </div>
  );
};
