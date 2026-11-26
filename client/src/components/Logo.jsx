const Logo = ({ theme = "dark", height = 48, className = "" }) => {
  const isLight = theme === "light";
  
  return (
    <div className={`brand-logo-container ${className}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <svg
        viewBox="0 0 320 80"
        height={height}
        style={{ width: 'auto', maxHeight: '100%', display: 'block' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={isLight ? "logoGradLight" : "logoGradDark"} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isLight ? "#4ade80" : "#15803d"} />
            <stop offset="100%" stopColor={isLight ? "#22c55e" : "#16a34a"} />
          </linearGradient>
          <linearGradient id={isLight ? "accentLight" : "accentDark"} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="#dc2626" />
          </linearGradient>
        </defs>

        {/* Emblem */}
        <g transform="translate(10, 10)">
          {/* Hexagon shield outline */}
          <path
            d="M30 2 L56 16 L56 44 L30 58 L4 44 L4 16 Z"
            fill={isLight ? "rgba(255,255,255,0.08)" : "#f0fdf4"}
            stroke={`url(#${isLight ? "logoGradLight" : "logoGradDark"})`}
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          
          {/* Stylized A */}
          <path
            d="M16 46 L27 15 C28 12 32 12 33 15 L44 46"
            stroke={isLight ? "#ffffff" : "#0f172a"}
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Leaf Sprout Crossbar */}
          <path
            d="M20 33 C26 31 35 30 42 22 C42 28 39 36 26 37 Z"
            fill={`url(#${isLight ? "logoGradLight" : "logoGradDark"})`}
          />
          
          {/* Seed dot */}
          <circle cx="30" cy="20" r="2.8" fill={`url(#${isLight ? "accentLight" : "accentDark"})`} />
        </g>

        {/* Brand Typography */}
        <g transform="translate(80, 16)">
          <text
            x="0"
            y="32"
            fontFamily="'Inter', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontSize="30"
            fontWeight="800"
            letterSpacing="2.5"
            fill={isLight ? "#ffffff" : "#0f172a"}
          >
            ALLEN
          </text>
          
          {/* Leaf Accent */}
          <path
            d="M125 15 C132 12 138 16 137 23 C130 24 126 21 125 15 Z"
            fill={`url(#${isLight ? "logoGradLight" : "logoGradDark"})`}
          />
          
          <text
            x="1"
            y="47"
            fontFamily="'Inter', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontSize="9"
            fontWeight="700"
            letterSpacing="4.5"
            fill={isLight ? "#86efac" : "#15803d"}
          >
            FOOD INGREDIENTS
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
