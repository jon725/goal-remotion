import React from 'react';
import {interpolate, Easing, Img, useVideoConfig} from 'remotion';

export const MeetYourTeam: React.FC<{
  frame: number;
  brand: string;
}> = ({frame, brand}) => {
  const {width, height} = useVideoConfig();
  const isMobile = height > width;
  const fadeIn = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});
  
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
      alignItems: 'center',
      justifyContent:'center',
      opacity: fadeIn,
      padding: isMobile ? '60px 30px' : '40px 80px', // Reduced from 60px to 40px
      background: '#f8f9fa' // Added subtle background
    }}>
      <div style={{
        maxWidth: 1400, // Reduced from 1600
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isMobile ? 40 : 30 // Add gap between elements
      }}>
        {/* Title */}
        <div style={{
          fontSize: isMobile ? 56 : 60, // Reduced from 72 to 60
          fontWeight: 900,
          color: '#0f172a',
          textAlign: 'center',
          lineHeight: 1.1
        }}>
          Meet Your Personal Care Team
        </div>
        
        {/* Cards container */}
        <div style={{
          position: 'relative',
          width: '100%',
          minHeight: isMobile ? '700px' : '400px' // Set minimum height for desktop too
        }}>
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
              description="Board-certified in weight management. Dr. Fitch personally oversees your treatment."
              brand={brand}
              imageUrl="https://assets.cdn.filesafe.space/LchNNcx4oSFzaphyXK3t/media/689d01e1d232a3b5c315a965.png"
              highlights={[
                'Monthly check-ins',
                'Personalized dosing',
                'Real medical oversight'
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
              description="Registered dietitian helping you achieve lasting success."
              brand={brand}
              imageUrl="https://storage.googleapis.com/msgsndr/LchNNcx4oSFzaphyXK3t/media/68b87a79ca12c66425fd793c.png"
              highlights={[
                'Custom meal planning',
                'Weekly accountability',
                'Prevent plateaus'
              ]}
              isMobile={isMobile}
            />
          </div>
        </div>
        
        {/* Trust badge */}
        {frame > 300 && (
          <div style={{
            textAlign: 'center',
            opacity: interpolate(frame, [300, 320], [0, 1], {extrapolateRight: 'clamp'})
          }}>
            <div style={{
              display: 'inline-block',
              padding: isMobile ? '24px 40px' : '16px 32px', // Reduced
              background: 'white',
              borderRadius: 12, // Reduced from 16
              boxShadow: '0 10px 40px rgba(0,0,0,.08)',
              border: `3px solid ${brand}30`
            }}>
              <div style={{
                fontSize: isMobile ? 28 : 28,
                fontWeight: 900,
                color: brand
              }}>
                Available 24/7
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
      maxWidth: isMobile ? '100%' : 1000, // Reduced from 1200
      margin: '0 auto',
      padding: isMobile ? 36 : 36, // Reduced from 48 to 36
      background: 'white',
      borderRadius: 20, // Reduced from 24
      boxShadow: '0 20px 60px rgba(0,0,0,.15)',
      border: `4px solid ${brand}20`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: isMobile ? 28 : 32 // Reduced from 48 to 32
    }}>
      {/* Photo */}
      <div style={{
        width: isMobile ? 180 : 180, // Reduced from 220 to 180
        height: isMobile ? 180 : 180,
        borderRadius: '50%',
        border: `5px solid ${brand}`,
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
      <div style={{textAlign: 'center'}}>
        {/* Name */}
        <div style={{
          fontSize: isMobile ? 44 : 42, // Reduced from 48 to 42
          fontWeight: 900,
          color: '#0f172a',
          marginBottom: 8, // Reduced from 10
          lineHeight: 1.2
        }}>
          {name}
        </div>
        
        {/* Role */}
        <div style={{
          fontSize: isMobile ? 26 : 24, // Reduced from 28 to 24
          fontWeight: 700,
          color: brand,
          marginBottom: 16, // Reduced from 20
          lineHeight: 1.3
        }}>
          {role}
        </div>
        
        {/* Description */}
        <div style={{
          fontSize: isMobile ? 22 : 18, // Reduced from 20 to 18
          color: '#64748b',
          lineHeight: 1.5,
          marginBottom: 24, // Reduced from 28
          maxWidth: isMobile ? '100%' : 550 // Reduced from 600
        }}>
          {description}
        </div>
        
        {/* Highlights */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14, // Reduced from 18
          alignItems: 'center'
        }}>
          {highlights.map((highlight, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12, // Reduced from 14
              fontSize: isMobile ? 24 : 18, // Reduced from 20 to 18
              fontWeight: 600,
              color: '#1e293b',
              lineHeight: 1.4
            }}>
              <span style={{
                color: brand, 
                fontSize: isMobile ? 30 : 24, // Reduced from 28 to 24
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