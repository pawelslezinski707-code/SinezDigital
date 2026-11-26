export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 360 360"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sinez Digital"
      className={className}
    >
      <rect width="360" height="360" rx="80" fill="#6D51EE" />
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
