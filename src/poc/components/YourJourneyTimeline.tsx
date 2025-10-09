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
  
  const generateChartMonths = (totalMonths: number) => {
    const maxPoints = 6;
    if (totalMonths <= 5) {
      return Array.from({length: totalMonths + 1}, (_, i) => i);
    } else {
      const interval = Math.round(totalMonths / (maxPoints - 1));
      const points = [];
      for (let i = 0; i < maxPoints - 1; i++) {
        points.push(i * interval);
      }
      points.push(totalMonths);
      return points;
    }
  };
  
  const chartMonths = generateChartMonths(monthsToGoal);
  const numPoints = chartMonths.length;
  
  const weights = chartMonths.map(m => {
    const progress = m / monthsToGoal;
    const x = (progress - 0.5) * 6;
    const sigmoidProgress = 1 / (1 + Math.exp(-x));
    return startWeight - (startWeight - goalWeight) * sigmoidProgress;
  });
  
  const chartWidth = isMobile ? width - 60 : Math.min(width - 200, 900);
  const chartHeight = isMobile ? 450 : 240;
  
  const padding = { 
    top: 50, 
    right: isMobile ? 40 : 50, 
    bottom: 60, 
    left: isMobile ? 60 : 65 
  };
  const plotWidth = chartWidth - padding.left - padding.right;
  const plotHeight = chartHeight - padding.top - padding.bottom;
  
  const maxWeight = Math.ceil(Math.max(...weights) / 10) * 10 + 8;
  const minWeight = Math.floor(Math.min(...weights) / 10) * 10 - 8;
  const weightRange = maxWeight - minWeight;
  
  const xScale = (index: number) => padding.left + (index / (numPoints - 1)) * plotWidth;
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
  
  const today = new Date();
  const getMonthLabel = (monthsFromNow: number) => {
    if (monthsFromNow === 0) return 'Now';
    const futureDate = new Date(today);
    futureDate.setMonth(futureDate.getMonth() + monthsFromNow);
    const monthName = futureDate.toLocaleDateString('en-US', { month: 'short' });
    const year = futureDate.getFullYear().toString().slice(-2);
    return `${monthName} '${year}`;
  };
  
  const xLabels = chartMonths.map((m) => getMonthLabel(m));
  
  return (
    <div style={{
      position:'absolute',
      inset:0,
      display:'flex',
      flexDirection: 'column',
      opacity: fadeIn,
      padding: isMobile ? '80px 30px 30px' : '20px 80px',
      background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)'
    }}>
      {/* Header */}
      <div style={{textAlign: 'center', marginBottom: isMobile ? 40 : 10}}>
        <div style={{
          fontSize: isMobile ? 56 : 46,
          fontWeight: 900,
          color: '#0f172a',
          marginBottom: isMobile ? 20 : 4,
          lineHeight: 1
        }}>
          Your Personalized Journey
        </div>
        <div style={{
          fontSize: isMobile ? 24 : 20,
          color: '#64748b',
          lineHeight: 1.4
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
        marginBottom: isMobile ? 40 : 10,
        opacity: interpolate(frame, [20, 35], [0, 1], {extrapolateRight: 'clamp'})
      }}>
        <svg width={chartWidth} height={chartHeight} style={{display: 'block'}}>
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
          
          {/* Y-axis labels - BIGGER & BOLDER */}
          {yTicks.map((weight, i) => (
            <text
              key={i}
              x={padding.left - 10}
              y={yScale(weight) + 4}
              textAnchor="end"
              fill="#1e293b"
              fontSize={isMobile ? 20 : 16}
              fontWeight={800}
              opacity={interpolate(frame, [25, 35], [0, 1], {extrapolateRight: 'clamp'})}
            >
              {weight}
            </text>
          ))}
          
          {/* X-axis labels - BIGGER & BOLDER */}
          {xLabels.map((label, i) => (
            <text
              key={i}
              x={xScale(i)}
              y={chartHeight - 20}
              textAnchor="middle"
              fill="#1e293b"
              fontSize={isMobile ? 20 : 16}
              fontWeight={800}
              opacity={interpolate(frame, [30 + i * 3, 38 + i * 3], [0, 1], {extrapolateRight: 'clamp'})}
            >
              {label}
            </text>
          ))}
          
          <defs>
            <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={brand} stopOpacity={0.18} />
              <stop offset="100%" stopColor={brand} stopOpacity={0.03} />
            </linearGradient>
          </defs>
          
          <path
            d={`${linePath} L ${xScale(numPoints - 1)} ${yScale(minWeight)} L ${padding.left} ${yScale(minWeight)} Z`}
            fill="url(#chartGradient)"
            opacity={interpolate(frame, [90, 105], [0, 1], {extrapolateRight: 'clamp'})}
          />
          
          <path
            d={linePath}
            stroke={brand}
            strokeWidth={isMobile ? 5 : 4}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={totalPathLength}
            strokeDashoffset={totalPathLength * (1 - lineProgress)}
          />
          
          {/* Data point circles and labels - BIGGER & BOLDER */}
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
                  r={(isMobile ? 12 : 8) * scale}
                  fill={brand}
                  stroke="white"
                  strokeWidth={isMobile ? 4 : 3}
                />
                <text
                  x={xScale(i)}
                  y={yScale(w) - (isMobile ? 24 : 16)}
                  textAnchor="middle"
                  fill="#1e293b"
                  fontSize={isMobile ? 24 : 16}
                  fontWeight={900}
                >
                  {Math.round(w)}
                </text>
              </g>
            );
          })}
          
          {frame > 105 && (
            <g opacity={interpolate(frame, [105, 115], [0, 1], {extrapolateRight: 'clamp'})}>
              <rect
                x={xScale(numPoints - 1) - (isMobile ? 50 : 38)}
                y={yScale(weights[weights.length - 1]) - (isMobile ? 55 : 42)}
                width={isMobile ? 100 : 76}
                height={isMobile ? 40 : 28}
                rx={14}
                fill={brand}
              />
              <text
                x={xScale(numPoints - 1)}
                y={yScale(weights[weights.length - 1]) - (isMobile ? 30 : 23)}
                textAnchor="middle"
                fill="white"
                fontSize={isMobile ? 20 : 13}
                fontWeight={700}
              >
                GOAL
              </text>
            </g>
          )}
        </svg>
      </div>
      
      {/* Benefits */}
      {frame > 120 && (
        <div style={{
          background: 'white',
          borderRadius: isMobile ? 20 : 16,
          padding: isMobile ? '40px 30px' : '20px 40px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
          opacity: interpolate(frame, [120, 135], [0, 1], {extrapolateRight: 'clamp'}),
          flex: '1 1 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div style={{
            fontSize: isMobile ? 48 : 32,
            fontWeight: 900,
            color: '#0f172a',
            marginBottom: isMobile ? 40 : 16,
            textAlign: 'center',
            lineHeight: 1.1
          }}>
            What's Included
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: isMobile ? 24 : 16
          }}>
            {[
              {title: 'GLP-1 Medication', desc: 'Physician-prescribed, delivered to your door.'},
              {title: 'Real Medical Care', desc: 'Board-certified physicians, not a marketing company.'},
              {title: 'Unlimited Team Access', desc: 'Call, text, email, or video anytime.'},
              {title: 'Nutrition Coaching', desc: 'Weekly support to maximize results.'}
            ].map((item, i) => (
              <div key={i} style={{
                background: 'linear-gradient(to right, #f8fafc 0%, #ffffff 100%)',
                padding: isMobile ? '28px 24px' : '16px 20px',
                borderRadius: 12,
                borderLeft: `4px solid ${brand}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                opacity: interpolate(frame, [130 + i*3, 140 + i*3], [0, 1], {extrapolateRight: 'clamp'}),
                transform: `translateX(${interpolate(frame, [130 + i*3, 140 + i*3], [-20, 0], {extrapolateRight: 'clamp'})}px)`
              }}>
                <div style={{
                  fontSize: isMobile ? 28 : 18,
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: isMobile ? 10 : 6,
                  lineHeight: 1.25
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: isMobile ? 22 : 15,
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