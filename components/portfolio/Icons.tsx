type IconProps = {
  size?: number;
  className?: string;
};

const shared = (size: number, className?: string) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": true,
  className
});

export function ArrowUpRight({ size = 18, className }: IconProps) {
  return (
    <svg {...shared(size, className)}>
      <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeft({ size = 18, className }: IconProps) {
  return (
    <svg {...shared(size, className)}>
      <path d="m14.5 6-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...shared(size, className)}>
      <path d="M4 6.5h16v11H4v-11Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="m5 7.5 7 5 7-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkIcon({ size = 18, className }: IconProps) {
  return (
    <svg {...shared(size, className)}>
      <path d="M12 2.8c.6 4.8 2.4 6.6 7.2 7.2-4.8.6-6.6 2.4-7.2 7.2-.6-4.8-2.4-6.6-7.2-7.2C9.6 9.4 11.4 7.6 12 2.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M19 16.5c.2 1.8.9 2.5 2.7 2.7-1.8.2-2.5.9-2.7 2.7-.2-1.8-.9-2.5-2.7-2.7 1.8-.2 2.5-.9 2.7-2.7Z" fill="currentColor" />
    </svg>
  );
}

export function InsuveoMark({ size = 48, className }: IconProps) {
  return (
    <svg {...shared(size, className)} viewBox="0 0 48 48">
      <rect x="1" y="1" width="46" height="46" rx="7" fill="#242424" stroke="rgba(255,255,255,0.14)" />
      <path d="M24 10.5 35 15v8.2c0 7.2-4.5 11.8-11 14.3-6.5-2.5-11-7.1-11-14.3V15l11-4.5Z" fill="#6B16ED" fillOpacity=".25" stroke="#A78BFA" strokeWidth="1.5" />
      <path d="m19.4 24.2 3 3 6.7-7" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GranveoMark({ size = 48, className }: IconProps) {
  return (
    <svg {...shared(size, className)} viewBox="0 0 48 48">
      <rect x="1" y="1" width="46" height="46" rx="7" fill="#242424" stroke="rgba(255,255,255,0.14)" />
      <path d="M16 17.5 24 24m0 0 8-7m-8 7 7.5 8M24 24l-8 8" stroke="#A78BFA" strokeWidth="1.5" />
      <circle cx="16" cy="17" r="4" fill="#6B16ED" />
      <circle cx="32" cy="17" r="3" fill="#FCD34D" />
      <circle cx="31.5" cy="32" r="4" fill="#6B16ED" />
      <circle cx="16" cy="32" r="3" fill="#FCD34D" />
      <circle cx="24" cy="24" r="4.5" fill="#101010" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}

export function FlutFastMark({ size = 48, className }: IconProps) {
  return (
    <svg {...shared(size, className)} viewBox="0 0 48 48">
      <rect x="1" y="1" width="46" height="46" rx="7" fill="#242424" stroke="rgba(255,255,255,0.14)" />
      <path d="M28.5 8.5 15 25h8l-3.5 14.5L33 21h-8l3.5-12.5Z" fill="#A78BFA" stroke="#FCD34D" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

export function KanbanCastMark({ size = 48, className }: IconProps) {
  return (
    <svg {...shared(size, className)} viewBox="0 0 48 48">
      <rect x="1" y="1" width="46" height="46" rx="7" fill="#242424" stroke="rgba(255,255,255,0.14)" />
      <rect x="11" y="13" width="8" height="22" rx="2" fill="#6B16ED" fillOpacity=".34" stroke="#A78BFA" strokeWidth="1.3" />
      <rect x="22" y="13" width="8" height="15" rx="2" fill="#6B16ED" fillOpacity=".34" stroke="#A78BFA" strokeWidth="1.3" />
      <path d="M34 19.5c2 1.1 3 2.6 3 4.5s-1 3.4-3 4.5M36.5 15.5c3.8 2.1 5.7 4.9 5.7 8.5s-1.9 6.4-5.7 8.5" stroke="#FCD34D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
