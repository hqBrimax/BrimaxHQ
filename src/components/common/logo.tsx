export function Logo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 160 32"
      className={className}
      fill="none"
    >
      <g>
        <rect x="1" y="1" width="30" height="30" rx="6" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="9" y1="8" x2="9" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="16" x2="22" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="9" y1="16" x2="22" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </g>
      <text x="40" y="23" fontFamily="Inter, system-ui, sans-serif" fontSize="22" fontWeight="700" fill="currentColor" letterSpacing="-0.04em">
        BRIMAX
      </text>
    </svg>
  );
}