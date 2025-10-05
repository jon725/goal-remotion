import React from 'react';
import {interpolate, Easing, Img, useVideoConfig} from 'remotion';

export const MeetYourTeam: React.FC<{
  frame: number;
  brand: string;
}> = ({frame, brand}) => {
  const {width, height} = useVideoConfig();
  const isMobile = height > width;
  const fadeIn = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});
  
  // Dr. Fitch shows from frame 0-210
  // Transition happens 210-240
  // Betsy shows from 240+
  const drFitchOpacity = interpolate(frame, [0, 20, 210, 240], [0, 1, 1, 0], {extrapolateRight: 'clamp'});
  const betsyOpacity = interpolate(frame, [210, 240], [0, 1], {extrapolateRight: 'clamp'});
  
  const drFitchSlide = interpolate(frame, [210, 240], [0, -100], {
    easing: Easing.inOut(Easing.ease),
    extrapolateRight: 'clamp'
  });
  
  const betsySlide = interpolate(frame, [210, 240], [100, 0], {
    easing: Easing.inOut(Easing.ease),
    extrapolateRight: 'clamp'
  });
  
  return (
    <div style={{
      position:'absolute',
      inset:0,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      opacity: fadeIn,
      padding: isMobile ? '60px 40px' : '80px 120px'
    }}>
      <div style={{maxWidth: 1600, width: '100%', position: 'relative'}}>
        {/* Title - stays throughout */}
        <div style={{
          fontSize: isMobile ? 42 : 72,
          fontWeight: 900,
          color: '#0f172a',
          textAlign: 'center',
          marginBottom: 64,
          lineHeight: 1.1
        }}>
          Meet Your Personal Care Team
        </div>
        
        {/* Dr. Fitch Card */}
        <div style={{
          position: 'absolute',
          width: '100%',
          opacity: drFitchOpacity,
          transform: `translateX(${drFitchSlide}%)`,
          pointerEvents: frame > 210 ? 'none' : 'auto'
        }}>
          <TeamMemberCard
            name="Dr. Michael Fitch"
            role="Your GOAL.MD Physician"
            description="Board-certified in weight management. Dr. Fitch personally oversees your treatment from start to finish."
            brand={brand}
            imageUrl="https://assets.cdn.filesafe.space/LchNNcx4oSFzaphyXK3t/media/689d01e1d232a3b5c315a965.png"
            highlights={[
              'Direct monthly check-ins with your physician',
              'Personalized dosing for maximum results',
              'Real medical oversight, not a vending machine'
            ]}
            isMobile={isMobile}
          />
        </div>
        
        {/* Betsy Card */}
        <div style={{
          position: 'absolute',
          width: '100%',
          opacity: betsyOpacity,
          transform: `translateX(${betsySlide}%)`,
          pointerEvents: frame < 240 ? 'none' : 'auto'
        }}>
          <TeamMemberCard
            name="Betsy Moeller"
            role="Your Nutrition Coach"
            description="Registered dietitian helping you turn results into lasting success through practical strategies."
            brand={brand}
            imageUrl="https://storage.googleapis.com/msgsndr/LchNNcx4oSFzaphyXK3t/media/68b87a79ca12c66425fd793c.png"
            highlights={[
              'Custom meal planning for your lifestyle',
              'Weekly accountability to keep you on track',
              'Nutrition strategies that prevent plateaus'
            ]}
            isMobile={isMobile}
          />
        </div>
        
        {/* Trust badge at bottom */}
        {frame > 300 && (
          <div style={{
            position: 'absolute',
            bottom: -100,
            left: '50%',
            transform: 'translateX(-50%)',
            opacity: interpolate(frame, [300, 320], [0, 1], {extrapolateRight: 'clamp'})
          }}>
            <div style={{
              padding: '24px 48px',
              background: 'white',
              borderRadius: 20,
              boxShadow: '0 10px 40px rgba(0,0,0,.08)',
              border: `3px solid ${brand}30`
            }}>
              <div style={{
                fontSize: 36,
                fontWeight: 900,
                color: brand
              }}>
                Available 24/7 via Secure Messaging
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TeamMemberCard: React.FC<{
  name: string;
  role: string;
  description: string;
  brand: string;
  imageUrl: string;
  highlights: string[];
  isMobile: boolean;
}> = ({name, role, description, brand, imageUrl, highlights, isMobile}) => {
  return (
    <div style={{
      maxWidth: 1200,
      margin: '0 auto',
      padding: isMobile ? 40 : 60,
      background: 'white',
      borderRadius: 32,
      boxShadow: '0 20px 60px rgba(0,0,0,.15)',
      border: `4px solid ${brand}20`,
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      gap: isMobile ? 32 : 60
    }}>
      {/* Photo */}
      <div style={{
        width: isMobile ? 180 : 280,
        height: isMobile ? 180 : 280,
        borderRadius: '50%',
        border: `6px solid ${brand}`,
        boxShadow: `0 15px 40px ${brand}40`,
        overflow: 'hidden',
        background: '#f1f5f9',
        flexShrink: 0
      }}>
        <Img 
          src={imageUrl}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      
      {/* Content */}
      <div style={{flex: 1}}>
        {/* Name */}
        <div style={{
          fontSize: isMobile ? 32 : 56,
          fontWeight: 900,
          color: '#0f172a',
          marginBottom: 12,
          lineHeight: 1.2
        }}>
          {name}
        </div>
        
        {/* Role */}
        <div style={{
          fontSize: isMobile ? 20 : 32,
          fontWeight: 700,
          color: brand,
          marginBottom: 24,
          lineHeight: 1.3
        }}>
          {role}
        </div>
        
        {/* Description */}
        <div style={{
          fontSize: isMobile ? 18 : 24,
          color: '#64748b',
          lineHeight: 1.6,
          marginBottom: 32
        }}>
          {description}
        </div>
        
        {/* Highlights */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
          {highlights.map((highlight, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 16,
              fontSize: isMobile ? 16 : 22,
              fontWeight: 600,
              color: '#1e293b',
              lineHeight: 1.5
            }}>
              <span style={{
                color: brand, 
                fontSize: isMobile ? 24 : 32,
                fontWeight: 900,
                flexShrink: 0
              }}>✓</span>
              {highlight}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};