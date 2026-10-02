/* Lightweight inline SVG icons — stroke/fill follow `currentColor`. */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const GithubIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.373 6.839 9.73.5.094.682-.222.682-.49 0-.242-.009-.883-.014-1.733-2.782.618-3.369-1.37-3.369-1.37-.455-1.177-1.11-1.49-1.11-1.49-.908-.635.069-.622.069-.622 1.004.072 1.532 1.057 1.532 1.057.892 1.565 2.341 1.112 2.91.85.092-.66.35-1.112.636-1.367-2.22-.259-4.555-1.14-4.555-5.066 0-1.12.39-2.035 1.03-2.752-.104-.259-.447-1.302.097-2.713 0 0 .84-.275 2.75 1.052A9.35 9.35 0 0 1 12 6.882a9.35 9.35 0 0 1 2.504.345c1.909-1.327 2.748-1.052 2.748-1.052.545 1.411.202 2.454.1 2.713.64.717 1.028 1.632 1.028 2.752 0 3.936-2.339 4.804-4.566 5.058.359.317.679.943.679 1.901 0 1.372-.012 2.477-.012 2.814 0 .27.18.588.688.488C19.138 20.623 22 16.783 22 12.253 22 6.586 17.523 2 12 2Z" />
  </svg>
);

export const LinkedinIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5.001A2.5 2.5 0 0 1 4.98 3.5ZM3 9.75h4v11.25H3V9.75Zm7 0h3.83v1.54h.055c.534-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V21h-4v-5.44c0-1.3-.024-2.97-1.81-2.97-1.815 0-2.094 1.415-2.094 2.876V21h-4V9.75Z" />
  </svg>
);

export const XIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-5.9l-4.62-6.04L5.94 21H2.92l7.06-8.07L2.4 3h6.05l4.18 5.52L17.53 3Zm-1.06 16.2h1.67L7.6 4.71H5.81l10.66 14.49Z" />
  </svg>
);

export const MailIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 7.5 8.5 6 8.5-6" />
  </svg>
);

export const MapPinIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const ArrowUpRightIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M7 17 17 7M8.5 7H17v8.5" />
  </svg>
);

export const ArrowRightIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M4 12h15m-6-6 6 6-6 6" />
  </svg>
);

export const DownloadIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 19.5h16" />
  </svg>
);

export const SendIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M21 3 10.5 13.5M21 3l-6.8 18-3.7-7.5L3 9.8 21 3Z" />
  </svg>
);

export const SparkIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <path d="M12 3.5 13.9 9l5.6 2-5.6 2-1.9 5.5L10.1 13l-5.6-2 5.6-2L12 3.5Z" />
  </svg>
);

export const MenuIcon = ({ className = "h-6 w-6", open = false }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    {open ? (
      <path d="M6 6l12 12M18 6 6 18" />
    ) : (
      <path d="M4 7h16M4 12h16M4 17h10" />
    )}
  </svg>
);

export const WhatsappIcon = ({ className = "h-5 w-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.35-1.4a9.84 9.84 0 0 0 4.69 1.2h.01c5.43 0 9.84-4.4 9.84-9.84 0-2.63-1.02-5.1-2.88-6.96A9.77 9.77 0 0 0 12.04 2Zm0 17.96h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.14 8.14 0 0 1-1.25-4.34c0-4.51 3.67-8.18 8.19-8.18 2.19 0 4.24.85 5.79 2.4a8.13 8.13 0 0 1 2.4 5.79c0 4.51-3.68 8.18-8.19 8.18Zm4.49-6.13c-.25-.13-1.46-.72-1.68-.8-.23-.08-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.04-.39-1.98-1.22-.73-.65-1.22-1.46-1.37-1.71-.14-.25-.01-.38.11-.5.11-.12.25-.29.37-.44.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.11-.23-.17-.48-.29Z" />
  </svg>
);

export const ClockIcon = ({ className = "h-4 w-4" }) => (
  <svg viewBox="0 0 24 24" className={className} {...base} aria-hidden="true">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 1.8" />
  </svg>
);
