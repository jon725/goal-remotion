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
  name?: string;
  startWeight?: number;
  goalWeight?: number;
}> = ({plan, frame, brand, pricing, name = 'Your', startWeight = 200, goalWeight = 150}) => {
  const {fps, width, height} = useVideoConfig();
  const isMobile = height > width;
  
  const fadeIn = interpolate(frame, [0, 25], [0, 1], {
    easing: Easing.out(Easing.cubic),
    extrapolateRight: 'clamp'
  });
  
  const scaleIn = spring({frame: frame - 10, fps, config: {damping: 12}});
  
  // Arrow bounce animation
  const arrowBounce = Math.sin(frame * 0.15) * 10;
  const arrowOpacity = interpolate(frame, [90, 110], [0, 1], {extrapolateRight: 'clamp'});
  
  // Price emphasis pulse
  const pricePulse = interpolate(
    Math.sin(frame * 0.1),
    [-1, 1],
    [1, 1.05]
  );
  
  const weightLoss = startWeight - goalWeight;
  const displayName = name || 'Your';
  
  return (
    <div style={{
      position:'absolute',
      inset:0,
      display:'flex',
      flexDirection: 'column',
      alignItems:'center',
      justifyContent:'center',
      opacity: fadeIn,
      padding: isMobile ? '60px 30px' : '0 80px'
    }}>
      <div style={{
        maxWidth: isMobile ? '100%' : 1100,
        width: '100%',
        textAlign: 'center',
        transform: `scale(${scaleIn})`
      }}>
        {/* Main headline */}
        <div style={{
          fontSize: isMobile ? 42 : 56,
          fontWeight: 900,
          color: '#0f172a',
          marginBottom: isMobile ? 16 : 20,
          lineHeight: 1.2
        }}>
          {displayName}, your transformation starts now.
        </div>
        
        {/* Subheadline */}
        <div style={{
          fontSize: isMobile ? 22 : 28,
          color: '#64748b',
          marginBottom: isMobile ? 32 : 40,
          fontWeight: 500,
          lineHeight: 1.5
        }}>
          You're just <span style={{fontWeight: 700, color: brand}}>{weightLoss} pounds</span> away from your goal — and we'll help you get there.
        </div>
        
        {/* Large Pricing Card */}
        {frame > 30 && (
          <div style={{
            marginBottom: isMobile ? 40 : 48,
            opacity: interpolate(frame, [30, 50], [0, 1], {extrapolateRight: 'clamp'}),
            transform: `scale(${scaleIn})`
          }}>
            <div style={{
              display: 'inline-block',
              padding: isMobile ? '32px 40px' : '40px 60px',
              background: 'white',
              borderRadius: 24,
              boxShadow: `0 20px 80px ${brand}30`,
              border: `4px solid ${brand}`,
              position: 'relative'
            }}>
              {/* Badge */}
              {pricing.badge && (
                <div style={{
                  position: 'absolute',
                  top: -16,
                  right: isMobile ? 10 : -16,
                  background: `linear-gradient(135deg, ${brand}, #10b981)`,
                  color: 'white',
                  padding: isMobile ? '10px 24px' : '12px 28px',
                  borderRadius: 16,
                  fontSize: isMobile ? 16 : 18,
                  fontWeight: 900,
                  boxShadow: `0 8px 24px ${brand}50`,
                  transform: 'rotate(-3deg)'
                }}>
                  {pricing.badge}
                </div>
              )}
              
              <div style={{
                fontSize: isMobile ? 20 : 24,
                color: '#1e293b',
                marginBottom: 16,
                fontWeight: 700
              }}>
                Lock in your {plan} plan today — and enjoy free shipping for life.
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'center',
                gap: isMobile ? 12 : 20,
                marginBottom: 16
              }}>
                {/* Original price strikethrough */}
                {pricing.originalPrice && (
                  <div style={{
                    fontSize: isMobile ? 32 : 42,
                    fontWeight: 700,
                    color: '#94a3b8',
                    textDecoration: 'line-through',
                    opacity: 0.6
                  }}>
                    {pricing.currency || '$'}{pricing.originalPrice}
                  </div>
                )}
                
                {/* Current price - EMPHASIZED */}
                <div style={{
                  fontSize: isMobile ? 64 : 80,
                  fontWeight: 900,
                  color: brand,
                  transform: frame > 60 ? `scale(${pricePulse})` : 'scale(1)',
                  transition: 'transform 0.3s ease'
                }}>
                  {pricing.currency || '$'}{pricing.monthlyPrice}
                  <span style={{
                    fontSize: isMobile ? 28 : 32,
                    fontWeight: 600,
                    color: '#64748b'
                  }}>/mo</span>
                </div>
              </div>
              
              <div style={{
                fontSize: isMobile ? 16 : 18,
                color: '#1e293b',
                marginBottom: 12,
                fontWeight: 600
              }}>
                {pricing.description}
              </div>
              
              <div style={{
                fontSize: isMobile ? 14 : 16,
                color: '#64748b',
                fontWeight: 500
              }}>
                Includes: Medication • Doctor Visits • Nutrition Coaching • Free Shipping
              </div>
            </div>
          </div>
        )}
        
        {/* Animated Arrow pointing down */}
        {frame > 90 && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            opacity: arrowOpacity,
            transform: `translateY(${arrowBounce}px)`
          }}>
            <div style={{
              fontSize: isMobile ? 24 : 28,
              fontWeight: 900,
              color: brand,
              marginBottom: 16
            }}>
              Click Below to Start
            </div>
            
            {/* Animated down arrow */}
            <div style={{
              fontSize: isMobile ? 48 : 64,
              color: brand,
              lineHeight: 1
            }}>
              ↓
            </div>
          </div>
        )}
        
        {/* Trust badges */}
        {frame > 100 && (
          <div style={{
            marginTop: isMobile ? 32 : 40,
            fontSize: isMobile ? 14 : 16,
            color: '#94a3b8',
            opacity: interpolate(frame, [100, 120], [0, 1], {extrapolateRight: 'clamp'}),
            fontWeight: 600
          }}>
            🔒 HIPAA Compliant • 💳 Secure • 🏆 BBB A+ • ⭐ 4.9/5 Rating
          </div>
        )}
      </div>
    </div>
  );
};