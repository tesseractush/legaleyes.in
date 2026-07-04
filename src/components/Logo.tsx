interface LogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
  withWordmark?: boolean;
}

export function Logo({
  size = 48,
  className = "",
  animated = true,
  withWordmark = false,
}: LogoProps) {
  const gold = "#C8A45A";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Legal Eyes Logo"
        className={animated ? "animate-sway" : ""}
      >
        {/* Top Ornament */}
        <circle cx="50" cy="8" r="3" fill="white" />
        <path
          d="M50 1 L53 6 L50 8 L47 6 Z"
          fill="white"
        />

        {/* Vertical Stem */}
        <line
          x1="50"
          y1="11"
          x2="50"
          y2="77"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Decorative Collar */}
        <circle
          cx="50"
          cy="22"
          r="3"
          stroke="white"
          strokeWidth="2"
        />

        {/* Curved Beam */}
        <path
          d="M18 24
             C30 18 42 18 50 24
             C58 18 70 18 82 24"
          stroke="white"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Left Chains */}
        <line
          x1="26"
          y1="24"
          x2="18"
          y2="46"
          stroke="white"
          strokeWidth="1.6"
        />

        <line
          x1="26"
          y1="24"
          x2="34"
          y2="46"
          stroke="white"
          strokeWidth="1.6"
        />

        {/* Right Chains */}
        <line
          x1="74"
          y1="24"
          x2="66"
          y2="46"
          stroke="white"
          strokeWidth="1.6"
        />

        <line
          x1="74"
          y1="24"
          x2="82"
          y2="46"
          stroke="white"
          strokeWidth="1.6"
        />

        {/* LEFT EYE */}

        <path
          d="
            M10 58
            Q22 45 34 58
            Q22 71 10 58
            Z"
          stroke={gold}
          strokeWidth="2.5"
          fill="none"
        />

        <circle
          cx="22"
          cy="58"
          r="5"
          fill={gold}
          className={animated ? "animate-blink" : ""}
        />

        <circle
          cx="24"
          cy="56"
          r="1.3"
          fill="white"
        />

        {/* RIGHT EYE */}

        <path
          d="
            M66 58
            Q78 45 90 58
            Q78 71 66 58
            Z"
          stroke={gold}
          strokeWidth="2.5"
          fill="none"
        />

        <circle
          cx="78"
          cy="58"
          r="5"
          fill={gold}
          className={animated ? "animate-blink" : ""}
        />

        <circle
          cx="80"
          cy="56"
          r="1.3"
          fill="white"
        />

        {/* Base */}

        <path
          d="M44 77 H56"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M40 83 H60"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M35 89 H65"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>

      {withWordmark && (
        <span className="font-serif text-xl tracking-tight text-white">
          Legal <span style={{ color: gold }}>Eyes</span>
        </span>
      )}
    </div>
  );
}
