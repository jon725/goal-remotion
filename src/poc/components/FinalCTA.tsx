import React from 'react';
import {interpolate, Easing, spring, useVideoConfig} from 'remotion';

type PricingTier = {
  monthlyPrice: number;
  originalPrice?: number;
  description: string;
  badge?: string;
  currency?: string;
};

export const FinalCTA: React.FC<{
  plan: string;
  frame: number;
  brand: string;
  pricing: PricingTier;
}> = ({plan, frame, brand, pricing}) => {
  const {fps} = useVideoConfig();
  
  const fadeIn = interpolate(frame, [0, 25], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp'
  });
  
  const scaleIn = spring({frame: frame - 10, fps, config: {damping: 12}});
  const buttonPulse = Math.sin(frame * 0.1) * 0.03 + 1;
  
  // Voiceover: "Your transformation starts right now. Take the first step today."
  
  return (
    <div style={{
      position:'absolute',
      inset:0,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      opacity: fadeIn
    }}>
      <div style={{
        maxWidth: 1000,
        width: '100%',
        textAlign: 'center',
        padding: '0 80px',
        transform: `scale(${scaleIn})`
      }}>
        {/* Main headline */}
        <div style={{
          fontSize: 72,
          fontWeight: 900,
          color: '#0f172a',
          marginBottom: 32,
          lineHeight: 1.1
        }}>
          Your Journey<br/>
          Starts <span style={{
            background: `linear-gradient(135deg, ${brand}, #10b981)`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>Right Now</span>
        </div>
        
        {/* Subheadline */}
        <div style={{
          fontSize: 28,
          color: '#64748b',
          marginBottom: 48,
          fontWeight: 500,
          lineHeight: 1.5
        }}>
          Join 15,000+ people who've transformed their lives with GOAL.MD.<br/>
          No waiting rooms. No judgment. Just results.
        </div>
        
        {/* CTA Button */}
        <div style={{
          marginBottom: 48,
          opacity: frame > 30 ? 1 : 0
        }}>
          <div style={{
            display: 'inline-block',
            padding: '28px 72px',
            background: `linear-gradient(135deg, ${brand}, #10b981)`,
            borderRadius: 20,
            color: 'white',
            fontSize: 36,
            fontWeight: 900,
            boxShadow: `0 20px 60px ${brand}50`,
            cursor: 'pointer',
            transform: `scale(${buttonPulse})`,
            border: '4px solid white',
            transition: 'transform 0.3s ease'
          }}>
            Start Your {plan} Plan Today →
          </div>
        </div>
        
        {/* Pricing */}
        {frame > 50 && (
          <div style={{
            marginBottom: 40,
            opacity: interpolate(frame, [50, 70], [0, 1], {extrapolateRight: 'clamp'})
          }}>
            <div style={{
              display: 'inline-block',
              padding: '24px 48px',
              background: 'white',
              borderRadius: 16,
              boxShadow: '0 10px 40px rgba(0,0,0,.08)',
              border: `2px solid ${brand}20`,
              position: 'relative'
            }}>
              {/* Badge */}
              {pricing.badge && (
                <div style={{
                  position: 'absolute',
                  top: -12,
                  right: -12,
                  background: `linear-gradient(135deg, ${brand}, #10b981)`,
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 900,
                  boxShadow: `0 4px 12px ${brand}40`,
                  transform: 'rotate(5deg)'
                }}>
                  {pricing.badge}
                </div>
              )}
              
              <div style={{
                fontSize: 20,
                color: '#64748b',
                marginBottom: 8
              }}>
                All-inclusive monthly plan
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16
              }}>
                {/* Original price strikethrough */}
                {pricing.originalPrice && (
                  <div style={{
                    fontSize: 32,
                    fontWeight: 600,
                    color: '#94a3b8',
                    textDecoration: 'line-through',
                    opacity: 0.6
                  }}>
                    {pricing.currency || '$'}{pricing.originalPrice}
                  </div>
                )}
                
                {/* Current price */}
                <div style={{
                  fontSize: 52,
                  fontWeight: 900,
                  color: brand
                }}>
                  {pricing.currency || '$'}{pricing.monthlyPrice}<span style={{fontSize: 28, fontWeight: 600}}>/month</span>
                </div>
              </div>
              
              <div style={{
                fontSize: 16,
                color: '#64748b',
                marginTop: 8
              }}>
                {pricing.description}
              </div>
              
              <div style={{
                fontSize: 14,
                color: '#94a3b8',
                marginTop: 12
              }}>
                Medication • Doctor visits • Coaching • Shipping
              </div>
            </div>
          </div>
        )}
        
       
        
        {/* Final trust line */}
        {frame > 100 && (
          <div style={{
            marginTop: 48,
            fontSize: 18,
            color: '#94a3b8',
            opacity: interpolate(frame, [100, 120], [0, 1], {extrapolateRight: 'clamp'})
          }}>
            🔒 HIPAA-compliant • 💳 Secure payments • 🏆 BBB A+ Accredited • ⭐ 4.9/5 rating
          </div>
        )}
      </div>
    </div>
  );
};