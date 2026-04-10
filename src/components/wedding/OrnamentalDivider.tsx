import { motion } from "framer-motion";

interface OrnamentalDividerProps {
  variant?: "torn-top" | "torn-bottom" | "floral" | "garland";
  className?: string;
  flip?: boolean;
}

const OrnamentalDivider = ({ variant = "torn-top", className = "", flip = false }: OrnamentalDividerProps) => {
  const dividers: Record<string, JSX.Element> = {
    "torn-top": (
      <div className={`w-full ${flip ? "rotate-180" : ""}`}>
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-12 md:h-16 lg:h-20 block"
          preserveAspectRatio="none"
          fill="hsl(var(--background))"
        >
          <path d="M0,80 L0,30 Q20,28 40,32 Q55,36 70,30 Q85,24 100,28 Q120,34 140,26 Q155,20 170,24 Q190,30 210,22 Q225,16 240,20 Q260,26 280,18 Q300,12 320,16 Q340,22 360,14 Q375,8 390,12 Q410,18 430,10 Q450,4 470,8 Q490,14 510,8 Q525,3 540,6 Q560,12 580,6 Q600,0 620,4 Q640,10 660,4 Q680,0 700,6 Q720,12 740,6 Q755,2 770,8 Q790,14 810,8 Q830,4 850,10 Q870,16 890,10 Q910,4 930,12 Q950,18 970,12 Q990,6 1010,14 Q1030,20 1050,14 Q1070,8 1090,16 Q1110,22 1130,16 Q1150,10 1170,18 Q1190,24 1210,18 Q1230,12 1250,20 Q1270,26 1290,20 Q1310,14 1330,22 Q1350,28 1370,24 Q1390,20 1410,28 Q1425,32 1440,30 L1440,80 Z" />
        </svg>
      </div>
    ),
    "torn-bottom": (
      <div className={`w-full ${flip ? "rotate-180" : ""}`}>
        <svg
          viewBox="0 0 1440 80"
          className="w-full h-12 md:h-16 lg:h-20 block"
          preserveAspectRatio="none"
          fill="hsl(var(--background))"
        >
          <path d="M0,0 L0,50 Q20,52 40,48 Q55,44 70,50 Q85,56 100,52 Q120,46 140,54 Q155,60 170,56 Q190,50 210,58 Q225,64 240,60 Q260,54 280,62 Q300,68 320,64 Q340,58 360,66 Q375,72 390,68 Q410,62 430,70 Q450,76 470,72 Q490,66 510,72 Q525,77 540,74 Q560,68 580,74 Q600,80 620,76 Q640,70 660,76 Q680,80 700,74 Q720,68 740,74 Q755,78 770,72 Q790,66 810,72 Q830,76 850,70 Q870,64 890,70 Q910,76 930,68 Q950,62 970,68 Q990,74 1010,66 Q1030,60 1050,66 Q1070,72 1090,64 Q1110,58 1130,64 Q1150,70 1170,62 Q1190,56 1210,62 Q1230,68 1250,60 Q1270,54 1290,60 Q1310,66 1330,58 Q1350,52 1370,56 Q1390,60 1410,52 Q1425,48 1440,50 L1440,0 Z" />
        </svg>
      </div>
    ),
    floral: (
      <div className="flex items-center justify-center gap-4 py-6">
        <div className="ornamental-line flex-1 max-w-[200px]" />
        <svg viewBox="0 0 80 80" className="w-12 h-12 md:w-14 md:h-14" fill="none">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="40"
              cy="18"
              rx="5"
              ry="14"
              stroke="hsl(38 65% 50%)"
              strokeWidth="0.8"
              opacity="0.45"
              transform={`rotate(${angle} 40 40)`}
              fill="hsl(38 65% 50% / 0.08)"
            />
          ))}
          <circle cx="40" cy="40" r="6" stroke="hsl(38 65% 50%)" strokeWidth="1" opacity="0.5" />
          <circle cx="40" cy="40" r="2.5" fill="hsl(38 65% 50% / 0.4)" />
        </svg>
        <div className="ornamental-line flex-1 max-w-[200px]" />
      </div>
    ),
    garland: (
      <div className="flex items-center justify-center py-6">
        <svg viewBox="0 0 600 60" className="w-full max-w-lg h-10 md:h-14" fill="none">
          {/* Main garland curve */}
          <path
            d="M0 10 Q75 50 150 20 Q225 -10 300 30 Q375 -10 450 20 Q525 50 600 10"
            stroke="hsl(38 65% 50%)"
            strokeWidth="1"
            opacity="0.4"
            fill="none"
          />
          {/* Flowers along garland */}
          {[75, 150, 225, 300, 375, 450, 525].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={20 + Math.sin(i * 1.2) * 15} r="5" fill="hsl(38 65% 50% / 0.2)" stroke="hsl(38 65% 50%)" strokeWidth="0.5" />
              <circle cx={x} cy={20 + Math.sin(i * 1.2) * 15} r="2" fill="hsl(38 65% 50% / 0.35)" />
            </g>
          ))}
          {/* Small leaves */}
          {[110, 190, 260, 340, 410, 490].map((x, i) => (
            <ellipse
              key={`leaf-${i}`}
              cx={x}
              cy={15 + Math.cos(i) * 12}
              rx="3"
              ry="7"
              fill="hsl(38 65% 50% / 0.15)"
              transform={`rotate(${30 + i * 15} ${x} ${15 + Math.cos(i) * 12})`}
            />
          ))}
        </svg>
      </div>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`${variant.startsWith("torn") ? "" : "px-8"} ${className}`}
    >
      {dividers[variant]}
    </motion.div>
  );
};

export default OrnamentalDivider;
