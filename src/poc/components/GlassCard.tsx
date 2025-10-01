import React from 'react';

export const GlassCard: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({children, style}) => (
  <div style={{
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 24,
    padding: '28px 32px',
    boxShadow: '0 20px 60px rgba(0,0,0,.3), 0 0 1px rgba(255,255,255,.5) inset',
    ...style,
  }}>
    {children}
  </div>
);