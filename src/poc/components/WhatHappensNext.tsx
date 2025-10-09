import React from 'react';
import {interpolate, Easing, spring, useVideoConfig} from 'remotion';

export const WhatHappensNext: React.FC<{
  frame: number;
  brand: string;
}> = ({frame, brand}) => {
  const {fps} = useVideoConfig();
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
      padding: isMobile ? '100px 40px 40px' : '0 80px'
    }}>
      <div style={{maxWidth: isMobile ? '100%' : 1400, width: '100%'}}>
        <div style={{
          fontSize: isMobile ? 56 : 56,
          fontWeight: 900,
          color: '#0f172a',
          textAlign: 'center',
          marginBottom: isMobile ? 24 : 24,
          lineHeight: 1.1
        }}>
          Your Next Steps Are Simple
        </div>
        
        <div style={{
          fontSize: isMobile ? 24 : 24,
          color: '#64748b',
          textAlign: 'center',
          marginBottom: isMobile ? 60 : 60,
          lineHeight: 1.4
        }}>
          No surprises. Just a clear, guided path to starting your transformation.
        </div>
        
        {/* Simplified Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
          gap: isMobile ? 28 : 24,
          marginBottom: isMobile ? 60 : 60
        }}>
          <SimpleStep
            number={1}
            title="Select Your Plan & Book"
            subtitle="Choose your plan today and reserve your spot."
            icon="✓"
            frame={frame}
            delay={10}
            brand={brand}
            isMobile={isMobile}
          />
          <SimpleStep
            number={2}
            title="Online Appointment With Dr. Fitch"
            subtitle="Meet your physician and review your personalized plan."
            icon="📱"
            frame={frame}
            delay={30}
            brand={brand}
            isMobile={isMobile}
          />
          <SimpleStep
            number={3}
            title="Medication Delivered to Your Door"
            subtitle="Shipped within 5–7 days of approval."
            icon="📦"
            frame={frame}
            delay={50}
            brand={brand}
            isMobile={isMobile}
          />
          <SimpleStep
            number={4}
            title="Start With Betsy, Your Nutrition Coach"
            subtitle="Week 1 support to set you up for success."
            icon="🥗"
            frame={frame}
            delay={70}
            brand={brand}
            isMobile={isMobile}
          />
        </div>
        
        {/* Key Message */}
        {frame > 85 && (
          <div style={{
            padding: isMobile ? 40 : 40,
            background: `linear-gradient(135deg, ${brand}15, #10b98115)`,
            borderRadius: 24,
            border: `3px solid ${brand}`,
            textAlign: 'center',
            opacity: interpolate(frame, [85, 105], [0, 1], {extrapolateRight: 'clamp'}),
            transform: `scale(${spring({frame: frame - 85, fps, config: {damping: 15}})})`,
          }}>
            <div style={{
              fontSize: isMobile ? 36 : 32,
              fontWeight: 900,
              color: '#0f172a',
              marginBottom: 20,
              lineHeight: 1.2
            }}>
              Doctor-reviewed. Risk-free.
            </div>
            <div style={{
              fontSize: isMobile ? 24 : 22,
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: 900,
              margin: '0 auto'
            }}>
              During your online consultation, Dr. Fitch reviews your medical history and may adjust your treatment plan based on his clinical expertise.
              <span style={{color: brand, fontWeight: 700}}> If you're not approved, you'll get a full refund — guaranteed.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SimpleStep: React.FC<{
  number: number;
  title: string;
  subtitle?: string;
  icon: string;
  frame: number;
  delay: number;
  brand: string;
  isMobile: boolean;
}> = ({number, title, subtitle, icon, frame, delay, brand, isMobile}) => {
  const {fps} = useVideoConfig();
  
  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp'
  });
  
  const scale = spring({
    frame: frame - delay,
    fps,
    config: {damping: 15, mass: 0.5}
  });
  
  return (
    <div style={{
      position: 'relative',
      opacity,
      transform: `scale(${scale})`
    }}>
      {/* Number Badge */}
      <div style={{
        position: 'absolute',
        top: -10,
        left: isMobile ? 10 : -10,
        width: isMobile ? 44 : 36,
        height: isMobile ? 44 : 36,
        borderRadius: '50%',
        background: `linear-gradient(135deg, ${brand}, #10b981)`,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: isMobile ? 22 : 18,
        fontWeight: 900,
        border: '3px solid white',
        boxShadow: '0 4px 12px rgba(0,0,0,.2)',
        zIndex: 2
      }}>
        {number}
      </div>
      
      {/* Card */}
      <div style={{
        padding: isMobile ? '48px 28px' : '40px 20px',
        background: 'white',
        borderRadius: 20,
        boxShadow: '0 10px 40px rgba(0,0,0,.08)',
        border: '2px solid #e2e8f0',
        textAlign: 'center',
        minHeight: isMobile ? 220 : 200
      }}>
        {/* Icon */}
        <div style={{
          fontSize: isMobile ? 56 : 48,
          marginBottom: 16
        }}>
          {icon}
        </div>
        
        {/* Title */}
        <div style={{
          fontSize: isMobile ? 26 : 20,
          fontWeight: 900,
          color: '#0f172a',
          marginBottom: subtitle ? 12 : 0,
          lineHeight: 1.3
        }}>
          {title}
        </div>
        
        {/* Subtitle */}
        {subtitle && (
          <div style={{
            fontSize: isMobile ? 20 : 16,
            fontWeight: 700,
            color: brand,
            lineHeight: 1.4
          }}>
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};