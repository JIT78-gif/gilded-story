import { motion } from "framer-motion";

interface OrnamentalDividerProps {
  variant?: "zigzag" | "floral" | "mandala" | "wave";
  className?: string;
}

const OrnamentalDivider = ({ variant = "floral", className = "" }: OrnamentalDividerProps) => {
  const dividers: Record<string, JSX.Element> = {
    zigzag: (
      <svg viewBox="0 0 1200 40" className="w-full h-8 md:h-10" preserveAspectRatio="none">
        <path
          d="M0 20 L30 5 L60 20 L90 5 L120 20 L150 5 L180 20 L210 5 L240 20 L270 5 L300 20 L330 5 L360 20 L390 5 L420 20 L450 5 L480 20 L510 5 L540 20 L570 5 L600 20 L630 5 L660 20 L690 5 L720 20 L750 5 L780 20 L810 5 L840 20 L870 5 L900 20 L930 5 L960 20 L990 5 L1020 20 L1050 5 L1080 20 L1110 5 L1140 20 L1170 5 L1200 20"
          fill="none"
          stroke="hsl(38 65% 50%)"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <path
          d="M0 25 L30 35 L60 25 L90 35 L120 25 L150 35 L180 25 L210 35 L240 25 L270 35 L300 25 L330 35 L360 25 L390 35 L420 25 L450 35 L480 25 L510 35 L540 25 L570 35 L600 25 L630 35 L660 25 L690 35 L720 25 L750 35 L780 25 L810 35 L840 25 L870 35 L900 25 L930 35 L960 25 L990 35 L1020 25 L1050 35 L1080 25 L1110 35 L1140 25 L1170 35 L1200 25"
          fill="none"
          stroke="hsl(38 65% 50%)"
          strokeWidth="1.5"
          opacity="0.4"
        />
      </svg>
    ),
    floral: (
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="ornamental-line flex-1 max-w-[200px]" />
        <svg viewBox="0 0 60 60" className="w-10 h-10 md:w-12 md:h-12" fill="none">
          <circle cx="30" cy="30" r="8" stroke="hsl(38 65% 50%)" strokeWidth="1" opacity="0.6" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="30"
              cy="14"
              rx="4"
              ry="10"
              stroke="hsl(38 65% 50%)"
              strokeWidth="0.8"
              opacity="0.5"
              transform={`rotate(${angle} 30 30)`}
              fill="none"
            />
          ))}
        </svg>
        <div className="ornamental-line flex-1 max-w-[200px]" />
      </div>
    ),
    mandala: (
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="ornamental-line flex-1 max-w-[180px]" />
        <svg viewBox="0 0 80 80" className="w-14 h-14 md:w-16 md:h-16" fill="none">
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <ellipse
              key={angle}
              cx="40"
              cy="40"
              rx="6"
              ry="28"
              stroke="hsl(38 65% 50%)"
              strokeWidth="0.6"
              opacity="0.4"
              transform={`rotate(${angle} 40 40)`}
            />
          ))}
          <circle cx="40" cy="40" r="6" stroke="hsl(38 65% 50%)" strokeWidth="1" opacity="0.6" />
          <circle cx="40" cy="40" r="2" fill="hsl(38 65% 50%)" opacity="0.5" />
        </svg>
        <div className="ornamental-line flex-1 max-w-[180px]" />
      </div>
    ),
    wave: (
      <svg viewBox="0 0 1200 30" className="w-full h-6 md:h-8" preserveAspectRatio="none">
        <path
          d="M0 15 Q150 0 300 15 Q450 30 600 15 Q750 0 900 15 Q1050 30 1200 15"
          fill="none"
          stroke="hsl(38 65% 50%)"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.5 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`px-8 ${className}`}
    >
      {dividers[variant]}
    </motion.div>
  );
};

export default OrnamentalDivider;
