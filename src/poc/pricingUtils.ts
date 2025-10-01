// pricingUtils.ts
export type PricingTier = {
    monthlyPrice: number;
    originalPrice?: number; // For showing strikethrough
    description: string;
    badge?: string; // e.g., "50% OFF", "NEW PATIENT SPECIAL"
    currency?: string; // Add currency support
  };
  
  export function getPricing(couponCode?: string, plan?: string): PricingTier {
    const normalizedCode = couponCode?.toUpperCase().trim();
    
    // Define your coupon codes here
    const coupons: Record<string, PricingTier> = {
      'WELCOME50': {
        monthlyPrice: 136,
        originalPrice: 272,
        description: 'First month 50% off, then $272/month',
        badge: '50% OFF',
        currency: '$'
      },
      'SAVE30': {
        monthlyPrice: 190,
        originalPrice: 272,
        description: 'Save $82/month with code SAVE30',
        badge: '30% OFF',
        currency: '$'
      },
      'VIP': {
        monthlyPrice: 220,
        originalPrice: 272,
        description: 'VIP member pricing',
        badge: 'VIP PRICING',
        currency: '$'
      },
      'FOUNDERS': {
        monthlyPrice: 199,
        originalPrice: 272,
        description: 'Founding member rate locked in',
        badge: 'FOUNDERS RATE',
        currency: '$'
      }
    };
  
    // Check if coupon code exists
    if (normalizedCode && coupons[normalizedCode]) {
      return coupons[normalizedCode];
    }
  
    // Default: New patient pricing (no code) - $100 off
    return {
      monthlyPrice: 172,
      originalPrice: 272,
      description: 'New patient special - save $100 on your first month',
      badge: 'NEW PATIENT SPECIAL',
      currency: '$'
    };
  }