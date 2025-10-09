import React from 'react';
import {interpolate, Easing, useVideoConfig, Img} from 'remotion';

export const SuccessStories: React.FC<{
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
          Join Thousands of Success Stories
        </div>
        
        <div style={{
          fontSize: isMobile ? 24 : 24,
          color: '#64748b',
          textAlign: 'center',
          marginBottom: isMobile ? 60 : 80,
          lineHeight: 1.4
        }}>
          Real people. Real results. <span style={{color: brand, fontWeight: 700}}>No gimmicks.</span>
        </div>
        
        {/* Stats bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: isMobile ? 20 : 24,
          marginBottom: isMobile ? 60 : 80
        }}>
          {[
            {value: '15,000+', label: 'Active Patients'},
            {value: '87%', label: 'Reach Their Goals'},
            {value: '4.9★', label: 'Average Rating'},
            {value: '92%', label: 'Would Recommend'}
          ].map((stat, i) => (
            <div key={i} style={{
              padding: isMobile ? 28 : 32,
              background: 'white',
              borderRadius: 20,
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(0,0,0,.08)',
              border: `2px solid ${brand}20`,
              opacity: interpolate(frame, [20 + i*5, 35 + i*5], [0, 1], {extrapolateRight: 'clamp'}),
              transform: `translateY(${interpolate(frame, [20 + i*5, 35 + i*5], [30, 0], {extrapolateRight: 'clamp'})}px)`
            }}>
              <div style={{
                fontSize: isMobile ? 48 : 52,
                fontWeight: 900,
                color: brand,
                marginBottom: 10,
                lineHeight: 1
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: isMobile ? 18 : 18,
                color: '#64748b',
                fontWeight: 600,
                lineHeight: 1.3
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? 28 : 32
        }}>
          {[
            {
              name: 'Jennifer M.',
              age: 42,
              lost: 47,
              quote: 'For the first time in years, I feel like myself again. Dr. Fitch and the team made this so easy.',
              delay: 60
            },
            {
              name: 'Michael T.',
              age: 38,
              lost: 62,
              quote: 'I tried every diet. Nothing worked until GLP-1. Down 62 lbs and my diabetes is in remission.',
              delay: 75
            },
            {
              name: 'Sarah K.',
              age: 51,
              lost: 38,
              quote: 'The personal support from Betsy was a game-changer. She helped me build habits that actually stick.',
              delay: 90
            }
          ].map((testimonial, i) => (
            <TestimonialCard
              key={i}
              {...testimonial}
              frame={frame}
              brand={brand}
              isMobile={isMobile}
            />
          ))}
        </div>
        
        {/* Trust badges */}
        {frame > 120 && (
          <div style={{
            marginTop: isMobile ? 60 : 70,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: isMobile ? 28 : 40,
            opacity: interpolate(frame, [120, 140], [0, 1], {extrapolateRight: 'clamp'})
          }}>
            {/* BBB Badge Image */}
            <div style={{
              height: isMobile ? 160 : 160,
              display: 'flex',
              alignItems: 'center',
              background: 'white',
              padding: isMobile ? '24px 40px' : '24px 40px',
              borderRadius: 16,
              boxShadow: '0 8px 30px rgba(0,0,0,.12)',
              border: '2px solid #e2e8f0'
            }}>
              <Img 
                src="https://storage.googleapis.com/msgsndr/LchNNcx4oSFzaphyXK3t/media/68dc35d48da17347166bc721.png"
                style={{
                  height: '100%',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
            
            {/* Other badges */}
            <div style={{
              padding: isMobile ? '24px 40px' : '24px 40px',
              background: 'white',
              borderRadius: 16,
              fontSize: isMobile ? 26 : 24,
              fontWeight: 700,
              color: '#1e293b',
              boxShadow: '0 8px 30px rgba(0,0,0,.12)',
              border: '2px solid #e2e8f0',
              textAlign: 'center',
              lineHeight: 1.4
            }}>
              <div style={{marginBottom: 8}}>HIPAA Compliant</div>
              <div style={{fontSize: isMobile ? 20 : 18, color: '#64748b', fontWeight: 600}}>
                Your privacy protected
              </div>
            </div>
            
            <div style={{
              padding: isMobile ? '24px 40px' : '24px 40px',
              background: 'white',
              borderRadius: 16,
              fontSize: isMobile ? 26 : 24,
              fontWeight: 700,
              color: '#1e293b',
              boxShadow: '0 8px 30px rgba(0,0,0,.12)',
              border: '2px solid #e2e8f0',
              textAlign: 'center',
              lineHeight: 1.4
            }}>
              <div style={{marginBottom: 8}}>Secure & Private</div>
              <div style={{fontSize: isMobile ? 20 : 18, color: '#64748b', fontWeight: 600}}>
                Bank-level encryption
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TestimonialCard: React.FC<{
  name: string;
  age: number;
  lost: number;
  quote: string;
  frame: number;
  delay: number;
  brand: string;
  isMobile: boolean;
}> = ({name, age, lost, quote, frame, delay, brand, isMobile}) => {
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
      padding: isMobile ? 36 : 32,
      background: 'white',
      borderRadius: 20,
      boxShadow: '0 10px 40px rgba(0,0,0,.08)',
      border: '2px solid #e2e8f0',
      opacity,
      transform: `translateY(${slideY}px)`
    }}>
      {/* Weight loss badge */}
      <div style={{
        display: 'inline-block',
        padding: isMobile ? '10px 20px' : '8px 20px',
        background: `linear-gradient(135deg, ${brand}20, ${brand}40)`,
        borderRadius: 12,
        marginBottom: 20
      }}>
        <div style={{
          fontSize: isMobile ? 32 : 28,
          fontWeight: 900,
          color: brand
        }}>
          -{lost} lbs
        </div>
      </div>
      
      {/* Quote */}
      <div style={{
        fontSize: isMobile ? 22 : 18,
        color: '#1e293b',
        lineHeight: 1.6,
        marginBottom: 24,
        fontStyle: 'italic'
      }}>
        "{quote}"
      </div>
      
      {/* Author */}
      <div style={{
        fontSize: isMobile ? 22 : 18,
        fontWeight: 700,
        color: '#0f172a'
      }}>
        {name}, {age}
      </div>
      
      {/* Stars */}
      <div style={{
        color: '#fbbf24',
        fontSize: isMobile ? 24 : 20,
        marginTop: 16
      }}>
        ★★★★★
      </div>
    </div>
  );
};