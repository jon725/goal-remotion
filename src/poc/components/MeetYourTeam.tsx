import React from 'react';
import {interpolate, Easing, Img, useVideoConfig} from 'remotion';

export const MeetYourTeam: React.FC<{
  frame: number;
  brand: string;
}> = ({frame, brand}) => {
  const {width, height} = useVideoConfig();
  const isMobile = height > width;
  const fadeIn = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});
  
  return (
    <div style={{
      position:'absolute',
      inset:0,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      opacity: fadeIn,
      padding: isMobile ? '60px 40px' : '0 80px'
    }}>
      <div style={{maxWidth: isMobile ? '100%' : 1400, width: '100%'}}>
        <div style={{
          fontSize: isMobile ? 42 : 56,
          fontWeight: 900,
          color: '#0f172a',
          textAlign: 'center',
          marginBottom: isMobile ? 16 : 24,
          lineHeight: 1.1
        }}>
          Meet Your Personal Care Team
        </div>
        
        <div style={{
          fontSize: isMobile ? 18 : 24,
          color: '#64748b',
          textAlign: 'center',
          marginBottom: isMobile ? 40 : 80,
          fontWeight: 500,
          padding: isMobile ? '0 20px' : '0',
          lineHeight: 1.4
        }}>
          Your dedicated team knows you, your goals, and your journey — every step of the way. Unlike other companies, you’ll always speak with the same trusted experts who stay with you from start to finish. <span style={{color: brand, fontWeight: 700}}>No outsourced companies.</span>
        </div>
        
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? 40 : 60,
          maxWidth: isMobile ? '100%' : 1200,
          margin: '0 auto'
        }}>
          {/* Dr. Fitch */}
          <TeamMember
            name="Dr. Michael Fitch"
            role="Your GOAL.MD Physician"
            description="Your GOAL.MD Physician Board-certified in weight management and metabolic health, Dr. Fitch personally oversees your progress and treatment."
            frame={frame}
            delay={20}
            brand={brand}
            imageUrl="https://assets.cdn.filesafe.space/LchNNcx4oSFzaphyXK3t/media/689d01e1d232a3b5c315a965.png"
            highlights={[
              'Safe prescriptions with real oversight',
              'Direct monthly check-ins with your physician',
              'Personalized dosing for maximum results'
            ]}
            isMobile={isMobile}
          />
          
          {/* Betsy */}
          <TeamMember
            name="Betsy Moeller"
            role="Your Nutritional Coach"
            description="Nutrition coach helping you turn results into lasting success through practical, sustainable strategies."
            frame={frame}
            delay={35}
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
        
        {/* Trust badge */}
        {frame > 80 && (
          <div style={{
            marginTop: isMobile ? 40 : 60,
            textAlign: 'center',
            opacity: interpolate(frame, [80, 100], [0, 1], {extrapolateRight: 'clamp'})
          }}>
            <div style={{
              display: 'inline-block',
              padding: isMobile ? '16px 28px' : '20px 40px',
              background: 'white',
              borderRadius: 16,
              boxShadow: '0 10px 40px rgba(0,0,0,.08)',
              border: `2px solid ${brand}30`
            }}>
              <div style={{
                fontSize: isMobile ? 14 : 18,
                color: '#64748b',
                marginBottom: 8
              }}>
                Available to you
              </div>
              <div style={{
                fontSize: isMobile ? 24 : 32,
                fontWeight: 900,
                color: brand
              }}>
                24/7 via secure messaging
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TeamMember: React.FC<{
  name: string;
  role: string;
  description: string;
  frame: number;
  delay: number;
  brand: string;
  imageUrl: string;
  highlights: string[];
  isMobile: boolean;
}> = ({name, role, description, frame, delay, brand, imageUrl, highlights, isMobile}) => {
  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp'
  });
  
  const slideY = interpolate(frame, [delay, delay + 25], [40, 0], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp'
  });
  
  return (
    <div style={{
      flex: 1,
      padding: isMobile ? 32 : 40,
      background: 'white',
      borderRadius: 24,
      boxShadow: '0 20px 60px rgba(0,0,0,.1)',
      border: `3px solid ${brand}20`,
      opacity,
      transform: `translateY(${slideY}px)`
    }}>
      {/* Real Photo */}
      <div style={{
        width: isMobile ? 140 : 160,
        height: isMobile ? 140 : 160,
        borderRadius: '50%',
        margin: '0 auto 24px',
        border: `4px solid ${brand}`,
        boxShadow: `0 10px 30px ${brand}30`,
        overflow: 'hidden',
        background: '#f1f5f9'
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
      
      {/* Name & Role */}
      <div style={{
        fontSize: isMobile ? 28 : 36,
        fontWeight: 900,
        color: '#0f172a',
        textAlign: 'center',
        marginBottom: 8,
        lineHeight: 1.2
      }}>
        {name}
      </div>
      
      <div style={{
        fontSize: isMobile ? 16 : 20,
        fontWeight: 700,
        color: brand,
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 1.3
      }}>
        {role}
      </div>
      
      {/* Description */}
      <div style={{
        fontSize: isMobile ? 16 : 18,
        color: '#64748b',
        textAlign: 'center',
        lineHeight: 1.6,
        marginBottom: 28
      }}>
        {description}
      </div>
      
      {/* Highlights */}
      <div style={{
        background: `${brand}08`,
        borderRadius: 12,
        padding: isMobile ? 16 : 20
      }}>
        {highlights.map((highlight, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: i < highlights.length - 1 ? 12 : 0,
            fontSize: isMobile ? 15 : 16,
            fontWeight: 600,
            color: '#1e293b'
          }}>
            <span style={{color: brand, fontSize: isMobile ? 18 : 20}}>✓</span>
            {highlight}
          </div>
        ))}
      </div>
    </div>
  );
};