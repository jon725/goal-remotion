import React from 'react';
import {interpolate, Easing, useVideoConfig} from 'remotion';

type Milestone = {
  label: string;
  lossLbs: number;
  reached: boolean;
  deltaNeeded: number;
  etaWeeksFromNow: number;
};

export const YourJourneyTimeline: React.FC<{
  startWeight: number;
  currentWeight: number;
  goalWeight: number;
  milestones: Milestone[];
  etaToGoal: number;
  frame: number;
  brand: string;
}> = ({startWeight, currentWeight, goalWeight, milestones, etaToGoal, frame, brand}) => {
  const {width, height} = useVideoConfig();
  const isMobile = height > width;
  const fadeIn = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});
  
  const monthsToGoal = Math.ceil(etaToGoal / 4);
  
  // Generate dynamic months based on actual timeline
  const numPoints = Math.min(monthsToGoal + 1, 6); // Cap at 6 points for readability
  const months = Array.from({length: numPoints}, (_, i) => i);
  
  // Calculate weight progression using sigmoid curve
  const weights = months.map(m => {
    const progress = m / (numPoints - 1); // 0 to 1
    const x = (progress - 0.5) * 6; // Spread sigmoid curve
    const sigmoidProgress = 1 / (1 + Math.exp(-x));
    return startWeight - (startWeight - goalWeight) * sigmoidProgress;
  });
  
  // Chart dimensions
  const chartWidth = isMobile ? width - 80 : Math.min(width - 200, 900);
  const chartHeight = isMobile ? height * 0.3 : 300;
  
  const padding = { 
    top: 50, 
    right: isMobile ? 35 : 50, 
    bottom: 50, 
    left: isMobile ? 55 : 65 
  };
  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;
  
  const maxWeight = Math.ceil(Math.max(...weights) / 10) * 10 + 8;
  const minWeight = Math.floor(Math.min(...weights) / 10) * 10 - 8;
  const weightRange = maxWeight - minWeight;
  
  const xScale = (index: number) => padding.left + (index / (months.length - 1)) * plotWidth;
  const yScale = (weight: number) => padding.top + ((maxWeight - weight) / weightRange) * plotHeight;
  
  const lineProgress = interpolate(frame, [50, 110], [0, 1], {
    extrapolateRight: 'clamp',
    easing: Easing.bezier(0.33, 1, 0.68, 1)
  });
  
  const linePath = weights.map((w, i) => {
    const x = xScale(i);
    const y = yScale(w);
    return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(' ');
  
  const totalPathLength = plotWidth * 1.5;
  const yTicks = [minWeight, Math.round((minWeight + maxWeight) / 2), maxWeight];
  
  // Generate X-axis labels dynamically
  const xLabels = months.map((m, i) => {
    if (i === 0) return 'Now';
    if (i === months.length - 1) return `Month ${monthsToGoal}`;
    return `Month ${m}`;
  });
  
  return (
    <div style={{
      position:'absolute',
      inset:0,
      display:'flex',
      flexDirection: 'column',
      opacity: fadeIn,
      padding: isMobile ? '20px 20px' : '30px 80px',
      background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)'
    }}>
      {/* Header */}
      <div style={{textAlign: 'center', marginBottom: isMobile ? 12 : 18}}>
        <div style={{
          fontSize: isMobile ? 38 : 52,
          fontWeight: 900,
          color: '#0f172a',
          marginBottom: 6,
          lineHeight: 1
        }}>
          Your Personalized Journey
        </div>
        <div style={{
          fontSize: isMobile ? 16 : 24,
          color: '#64748b',
          lineHeight: 1.3
        }}>
          From <span style={{fontWeight: 700, color: '#1e293b'}}>{startWeight} lbs</span> to{' '}
          <span style={{fontWeight: 700, color: brand}}>{goalWeight} lbs</span> in approximately{' '}
          <span style={{fontWeight: 700, color: brand}}>{monthsToGoal} months</span>
        </div>
      </div>
      
      {/* Chart */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: isMobile ? 15 : 20,
        opacity: interpolate(frame, [20, 35], [0, 1], {extrapolateRight: 'clamp'})
      }}>
        <svg width={chartWidth} height={chartHeight} style={{display: 'block'}}>
          {/* Grid */}
          {yTicks.map((weight, i) => (
            <line
              key={i}
              x1={padding.left}
              y1={yScale(weight)}
              x2={chartWidth - padding.right}
              y2={yScale(weight)}
              stroke="#e2e8f0"
              strokeWidth={1}
              opacity={interpolate(frame, [25, 35], [0, 1], {extrapolateRight: 'clamp'})}
            />
          ))}
          
          {/* Y-axis */}
          {yTicks.map((weight, i) => (
            <text
              key={i}
              x={padding.left - 10}
              y={yScale(weight) + 4}
              textAnchor="end"
              fill="#94a3b8"
              fontSize={isMobile ? 11 : 13}
              fontWeight={600}
              opacity={interpolate(frame, [25, 35], [0, 1], {extrapolateRight: 'clamp'})}
            >
              {weight}
            </text>
          ))}
          
          {/* X-axis - dynamic labels */}
          {xLabels.map((label, i) => (
            <text
              key={i}
              x={xScale(i)}
              y={chartHeight - 20}
              textAnchor="middle"
              fill="#64748b"
              fontSize={isMobile ? 11 : 13}
              fontWeight={600}
              opacity={interpolate(frame, [30 + i * 3, 38 + i * 3], [0, 1], {extrapolateRight: 'clamp'})}
            >
              {label}
            </text>
          ))}
          
          {/* Gradient */}
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={brand} stopOpacity={0.18} />
              <stop offset="100%" stopColor={brand} stopOpacity={0.03} />
            </linearGradient>
          </defs>
          
          {/* Area */}
          <path
            d={`${linePath} L ${xScale(months.length - 1)} ${yScale(minWeight)} L ${padding.left} ${yScale(minWeight)} Z`}
            fill="url(#chartGradient)"
            opacity={interpolate(frame, [90, 105], [0, 1], {extrapolateRight: 'clamp'})}
          />
          
          {/* Line */}
          <path
            d={linePath}
            stroke={brand}
            strokeWidth={isMobile ? 3 : 4}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={totalPathLength}
            strokeDashoffset={totalPathLength * (1 - lineProgress)}
          />
          
          {/* Points */}
          {weights.map((w, i) => {
            const delay = 65 + i * 9;
            const opacity = interpolate(frame, [delay, delay + 9], [0, 1], {extrapolateRight: 'clamp'});
            const scale = interpolate(frame, [delay, delay + 9], [0, 1], {
              extrapolateRight: 'clamp',
              easing: Easing.out(Easing.back(1.5))
            });
            
            return (
              <g key={i} opacity={opacity}>
                <circle
                  cx={xScale(i)}
                  cy={yScale(w)}
                  r={(isMobile ? 7 : 8) * scale}
                  fill={brand}
                  stroke="white"
                  strokeWidth={2}
                />
                <text
                  x={xScale(i)}
                  y={yScale(w) - 16}
                  textAnchor="middle"
                  fill="#1e293b"
                  fontSize={isMobile ? 14 : 16}
                  fontWeight={800}
                >
                  {Math.round(w)}
                </text>
              </g>
            );
          })}
          
          {/* Goal badge */}
          {frame > 105 && (
            <g opacity={interpolate(frame, [105, 115], [0, 1], {extrapolateRight: 'clamp'})}>
              <rect
                x={xScale(months.length - 1) - 38}
                y={yScale(weights[weights.length - 1]) - 42}
                width={76}
                height={28}
                rx={14}
                fill={brand}
              />
              <text
                x={xScale(months.length - 1)}
                y={yScale(weights[weights.length - 1]) - 23}
                textAnchor="middle"
                fill="white"
                fontSize={isMobile ? 12 : 13}
                fontWeight={700}
              >
                GOAL
              </text>
            </g>
          )}
        </svg>
      </div>
      
      {/* Benefits - unchanged */}
      {frame > 120 && (
        <div style={{
          background: 'white',
          borderRadius: isMobile ? 16 : 20,
          padding: isMobile ? '32px 28px' : '40px 50px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          opacity: interpolate(frame, [120, 135], [0, 1], {extrapolateRight: 'clamp'}),
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{
            fontSize: isMobile ? 34 : 42,
            fontWeight: 900,
            color: '#0f172a',
            marginBottom: isMobile ? 28 : 38,
            textAlign: 'center',
            lineHeight: 1.1
          }}>
            What's Included in Your Journey
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? 20 : 28,
            rowGap: isMobile ? 18 : 24
          }}>
            {[
              {title: 'GLP-1 Medication', desc: 'Physician-prescribed, delivered directly to your door.'},
              {title: 'Real Medical Care', desc: 'Not a marketing company — a true medical practice with board-certified physicians.'},
              {title: 'Unlimited Access to Your Team', desc: 'Call, text, email, or video conference anytime — not just email like other companies.'},
              {title: 'Nutrition Coaching', desc: 'Weekly support from Betsy to maximize results and prevent plateaus.'},
              {title: 'Progress Reports', desc: 'Celebrate your wins and see measurable success along the way.'},
              {title: 'Trusted & Accredited', desc: 'BBB Accredited, A+ Rated — patient-proven and nationally recognized.'}
            ].map((item, i) => (
              <div key={i} style={{
                background: 'linear-gradient(to right, #f8fafc 0%, #ffffff 100%)',
                padding: isMobile ? '18px 20px' : '22px 26px',
                borderRadius: 12,
                borderLeft: `4px solid ${brand}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                opacity: interpolate(frame, [130 + i*3, 140 + i*3], [0, 1], {extrapolateRight: 'clamp'}),
                transform: `translateX(${interpolate(frame, [130 + i*3, 140 + i*3], [-20, 0], {extrapolateRight: 'clamp'})}px)`
              }}>
                <div style={{
                  fontSize: isMobile ? 20 : 22,
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: 8,
                  lineHeight: 1.25
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: isMobile ? 16 : 17,
                  color: '#64748b',
                  lineHeight: 1.5
                }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};