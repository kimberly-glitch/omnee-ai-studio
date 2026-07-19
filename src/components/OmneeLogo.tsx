import React from 'react';

interface OmneeLogoProps {
  theme?: 'light' | 'dark';
  className?: string;
}

export default function OmneeLogo({ theme = 'light', className = '' }: OmneeLogoProps) {
  // Theme-specific colors
  const primaryTextColor = theme === 'light' ? 'text-slate-900' : 'text-white';
  const secondaryTextColor = theme === 'light' ? 'text-slate-500' : 'text-slate-300';
  const ekgStrokeColor = theme === 'light' ? '#64748b' : '#94a3b8'; // Slate colors
  const pulseBlue = '#58b0e5'; // Energetic medical-blue from logo

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <svg
        viewBox="0 0 500 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 sm:h-14 w-auto drop-shadow-sm"
      >
        {/* Background container just to ensure high contrast inside the SVG path if needed */}
        {/* EKG / Pulse Line & Arrow */}
        {/* Grey heartbeat pulse line starting on the left */}
        <path
          d="M 15,65 L 75,65 L 85,20 L 98,110 L 110,45 L 118,65 L 140,65 L 146,40 L 155,80 L 161,65 L 210,65"
          stroke={ekgStrokeColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Transition into Energetic medical-blue pulse line running through/behind the van */}
        <path
          d="M 210,65 L 435,65"
          stroke={pulseBlue}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Blue Arrow on the right end */}
        <path
          d="M 430,55 L 450,65 L 430,75 Z"
          fill={pulseBlue}
        />

        {/* Speed lines behind the van */}
        <line x1="185" y1="42" x2="230" y2="42" stroke={theme === 'light' ? '#334155' : '#f8fafc'} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1 5 15 5" />
        <line x1="180" y1="50" x2="225" y2="50" stroke={theme === 'light' ? '#334155' : '#f8fafc'} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="10 5" />
        <line x1="195" y1="58" x2="230" y2="58" stroke={theme === 'light' ? '#334155' : '#f8fafc'} strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 3" />

        {/* White / Dark delivery van silhouette */}
        <g transform="translate(210, 24)">
          {/* Van Body */}
          <path
            d="M 15,41 L 15,16 C 15,11 19,7 24,7 L 90,7 C 98,7 106,12 110,19 L 126,34 C 131,39 131,41 133,45 C 134,48 132,51 128,51 L 115,51 C 115,44 109,38 102,38 C 95,38 89,44 89,51 L 43,51 C 43,44 37,38 30,38 C 23,38 17,44 17,51 L 5,51 C 2,51 0,49 0,46 L 0,41 Z"
            fill={theme === 'light' ? '#1e293b' : '#ffffff'}
          />
          {/* Windshield / Cab Window */}
          <path
            d="M 88,12 L 104,12 L 116,24 C 118,26 117,29 114,29 L 88,29 Z"
            fill={theme === 'light' ? '#64748b' : '#cbd5e1'}
          />
          {/* Wheels */}
          <circle cx="30" cy="51" r="9" fill={theme === 'light' ? '#475569' : '#1e293b'} stroke={theme === 'light' ? '#ffffff' : '#94a3b8'} strokeWidth="2.5" />
          <circle cx="102" cy="51" r="9" fill={theme === 'light' ? '#475569' : '#1e293b'} stroke={theme === 'light' ? '#ffffff' : '#94a3b8'} strokeWidth="2.5" />
        </g>

        {/* Text Area */}
        {/* OMNEE */}
        <text
          x="105"
          y="112"
          className="font-sans"
          fontWeight="800"
          fontSize="48"
          letterSpacing="1.5"
        >
          <tspan fill={theme === 'light' ? '#1e293b' : '#ffffff'}>OM</tspan>
          <tspan fill={pulseBlue}>NEE</tspan>
        </text>

        {/* COURIER SOLUTIONS LLC */}
        <text
          x="100"
          y="132"
          className="font-sans"
          fontWeight="700"
          fontSize="14"
          letterSpacing="4.2"
          fill={theme === 'light' ? '#475569' : '#cbd5e1'}
        >
          COURIER SOLUTIONS LLC
        </text>
      </svg>
    </div>
  );
}
