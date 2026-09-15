export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 360"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sinez Digital"
      className={className}
    >
      <defs>
        <linearGradient id="sinezLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#4F46E5" />
        </linearGradient>
      </defs>
      <rect width="360" height="360" rx="80" fill="url(#sinezLogoGrad)" />
      <text
        x="180"
        y="235"
        textAnchor="middle"
        fontFamily="'Courier New', monospace"
        fontWeight="700"
        fontSize="140"
        fill="#ffffff"
      >
        {"</>"}
      </text>
    </svg>
  );
}
