import {Composition, staticFile} from 'remotion';
import {POC_JourneyVideo} from './poc/POC_JourneyVideo';

export const RemotionRoot: React.FC = () => {
  const defaultProps = {
    name: 'Brandon',
    startWeight: 190,
    currentWeight: 182,
    goalWeight: 155,
    plan: 'Injection' as const,
    brand: '#F26622',
    voiceoverUrl: staticFile('voiceovers/voiceover-Brandon-1759260979410.mp3'),
  };

  return (
    <>
      {/* Vertical (social) */}
      <Composition
        id="journey-poc"
        component={POC_JourneyVideo}
        durationInFrames={3000}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={defaultProps}
      />

      {/* Widescreen (results page) */}
      <Composition
        id="journey-poc-wide"
        component={POC_JourneyVideo}
        durationInFrames={3000}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={defaultProps}
      />
    </>
  );
};