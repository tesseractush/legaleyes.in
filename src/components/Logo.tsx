interface LogoProps {
  size?: number;
  withWordmark?: boolean;
  className?: string;
  animated?: boolean;
}

export function Logo({ size = 40, withWordmark = false, className = "", animated = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Legal Eyes logo"
        className={animated ? "animate-sway" : ""}
      >
        {/* Top hanger */}
        <circle cx="40" cy="10" r="2" fill="currentColor" />
        {/* Vertical beam */}
        <line x1="40" y1="12" x2="40" y2="62" stroke="currentColor" strokeWidth="1.2" />
        {/* Horizontal beam */}
        <line x1="14" y1="22" x2="66" y2="22" stroke="currentColor" strokeWidth="1.2" />
        {/* Hanging chains */}
        <line x1="18" y1="22" x2="18" y2="34" stroke="currentColor" strokeWidth="0.8" />
        <line x1="22" y1="22" x2="18" y2="34" stroke="currentColor" strokeWidth="0.8" />
        <line x1="62" y1="22" x2="62" y2="34" stroke="currentColor" strokeWidth="0.8" />
        <line x1="58" y1="22" x2="62" y2="34" stroke="currentColor" strokeWidth="0.8" />

        {/* Base */}
        <line x1="30" y1="62" x2="50" y2="62" stroke="currentColor" strokeWidth="1.4" />

        {/* Left eye plate */}
        <g>
          <ellipse cx="18" cy="40" rx="10" ry="5" stroke="var(--gold)" strokeWidth="1.2" fill="none" />
          <circle cx="18" cy="40" r="2.4" fill="var(--gold)" className={animated ? "animate-blink" : ""} />
        </g>
        {/* Right eye plate */}
        <g>
          <ellipse cx="62" cy="40" rx="10" ry="5" stroke="var(--gold)" strokeWidth="1.2" fill="none" />
          <circle cx="62" cy="40" r="2.4" fill="var(--gold)" className={animated ? "animate-blink" : ""} />
        </g>
      </svg>
      {withWordmark && (
        <span className="font-serif text-xl tracking-tight">
          Legal <span className="text-gold">Eyes</span>
        </span>
      )}
    </div>
  );
}
