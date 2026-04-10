import { motion } from "framer-motion";

type DividerVariant =
  | "torn-paper"
  | "torn-paper-reverse"
  | "flourish"
  | "mandala"
  | "vine-garland"
  | "floral-border"
  | "footer-garland"
  | "wave-organic";

interface OrnamentalDividerProps {
  variant?: DividerVariant;
  className?: string;
  fromColor?: string;
  toColor?: string;
}

const gold = "hsl(38 65% 50%)";
const goldLight = "hsl(40 60% 70%)";
const goldFaint = "hsl(38 65% 50% / 0.15)";
const goldMid = "hsl(38 65% 50% / 0.3)";
const goldSubtle = "hsl(38 65% 50% / 0.08)";

const OrnamentalDivider = ({
  variant = "flourish",
  className = "",
  fromColor = "hsl(var(--background))",
  toColor = "hsl(var(--card))",
}: OrnamentalDividerProps) => {

  const dividers: Record<DividerVariant, JSX.Element> = {
    /* ── Torn paper edge (top section bleeds into bottom) ── */
    "torn-paper": (
      <div className="relative w-full" style={{ marginTop: "-1px", marginBottom: "-1px" }}>
        <svg
          viewBox="0 0 1440 120"
          className="w-full block"
          style={{ height: "clamp(50px, 8vw, 100px)" }}
          preserveAspectRatio="none"
        >
          {/* Top section fill */}
          <path
            d="M0,0 L1440,0 L1440,50 Q1420,48 1400,52 Q1380,58 1360,50 Q1340,42 1320,48 Q1300,56 1280,46 Q1260,38 1240,44 Q1220,52 1200,42 Q1180,34 1160,40 Q1140,48 1120,38 Q1100,30 1080,36 Q1060,44 1040,34 Q1020,26 1000,32 Q980,40 960,30 Q940,22 920,28 Q900,36 880,28 Q860,20 840,26 Q820,34 800,24 Q780,16 760,22 Q740,30 720,22 Q700,14 680,20 Q660,28 640,20 Q620,12 600,18 Q580,26 560,18 Q540,10 520,16 Q500,24 480,16 Q460,8 440,14 Q420,22 400,14 Q380,6 360,12 Q340,20 320,14 Q300,6 280,12 Q260,20 240,14 Q220,6 200,14 Q180,22 160,16 Q140,8 120,16 Q100,24 80,18 Q60,10 40,18 Q20,26 0,20 L0,0 Z"
            fill={fromColor}
          />
          {/* Gold accent line along the torn edge */}
          <path
            d="M0,20 Q20,26 40,18 Q60,10 80,18 Q100,24 120,16 Q140,8 160,16 Q180,22 200,14 Q220,6 240,14 Q260,20 280,12 Q300,6 320,14 Q340,20 360,12 Q380,6 400,14 Q420,22 440,14 Q460,8 480,16 Q500,24 520,16 Q540,10 560,18 Q580,26 600,18 Q620,12 640,20 Q660,28 680,20 Q700,14 720,22 Q740,30 760,22 Q780,16 800,24 Q820,34 840,26 Q860,20 880,28 Q900,36 920,28 Q940,22 960,30 Q980,40 1000,32 Q1020,26 1040,34 Q1060,44 1080,36 Q1100,30 1120,38 Q1140,48 1160,40 Q1180,34 1200,42 Q1220,52 1240,44 Q1260,38 1280,46 Q1300,56 1320,48 Q1340,42 1360,50 Q1380,58 1400,52 Q1420,48 1440,50"
            fill="none"
            stroke={gold}
            strokeWidth="0.8"
            opacity="0.35"
          />
          {/* Bottom section fill */}
          <path
            d="M0,20 Q20,26 40,18 Q60,10 80,18 Q100,24 120,16 Q140,8 160,16 Q180,22 200,14 Q220,6 240,14 Q260,20 280,12 Q300,6 320,14 Q340,20 360,12 Q380,6 400,14 Q420,22 440,14 Q460,8 480,16 Q500,24 520,16 Q540,10 560,18 Q580,26 600,18 Q620,12 640,20 Q660,28 680,20 Q700,14 720,22 Q740,30 760,22 Q780,16 800,24 Q820,34 840,26 Q860,20 880,28 Q900,36 920,28 Q940,22 960,30 Q980,40 1000,32 Q1020,26 1040,34 Q1060,44 1080,36 Q1100,30 1120,38 Q1140,48 1160,40 Q1180,34 1200,42 Q1220,52 1240,44 Q1260,38 1280,46 Q1300,56 1320,48 Q1340,42 1360,50 Q1380,58 1400,52 Q1420,48 1440,50 L1440,120 L0,120 Z"
            fill={toColor}
          />
        </svg>
      </div>
    ),

    /* ── Torn paper reverse (bottom section bleeds upward) ── */
    "torn-paper-reverse": (
      <div className="relative w-full" style={{ marginTop: "-1px", marginBottom: "-1px" }}>
        <svg
          viewBox="0 0 1440 120"
          className="w-full block"
          style={{ height: "clamp(50px, 8vw, 100px)" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,70 Q1420,66 1400,72 Q1375,80 1350,68 Q1330,60 1310,66 Q1290,74 1270,64 Q1250,56 1230,62 Q1210,70 1190,60 Q1170,52 1150,58 Q1130,66 1110,56 Q1090,48 1070,54 Q1050,62 1030,52 Q1010,44 990,50 Q970,58 950,48 Q930,40 910,46 Q890,54 870,44 Q850,36 830,42 Q810,50 790,40 Q770,32 750,38 Q730,46 710,38 Q690,30 670,36 Q650,44 630,36 Q610,28 590,34 Q570,42 550,34 Q530,26 510,32 Q490,40 470,32 Q450,24 430,30 Q410,38 390,30 Q370,22 350,28 Q330,36 310,28 Q290,20 270,26 Q250,34 230,26 Q210,18 190,24 Q170,32 150,24 Q130,16 110,22 Q90,30 70,22 Q50,14 30,20 Q15,24 0,22 L0,0 Z"
            fill={fromColor}
          />
          <path
            d="M0,22 Q15,24 30,20 Q50,14 70,22 Q90,30 110,22 Q130,16 150,24 Q170,32 190,24 Q210,18 230,26 Q250,34 270,26 Q290,20 310,28 Q330,36 350,28 Q370,22 390,30 Q410,38 430,30 Q450,24 470,32 Q490,40 510,32 Q530,26 550,34 Q570,42 590,34 Q610,28 630,36 Q650,44 670,36 Q690,30 710,38 Q730,46 750,38 Q770,32 790,40 Q810,50 830,42 Q850,36 870,44 Q890,54 910,46 Q930,40 950,48 Q970,58 990,50 Q1010,44 1030,52 Q1050,62 1070,54 Q1090,48 1110,56 Q1130,66 1150,58 Q1170,52 1190,60 Q1210,70 1230,62 Q1250,56 1270,64 Q1290,74 1310,66 Q1330,60 1350,68 Q1375,80 1400,72 Q1420,66 1440,70"
            fill="none"
            stroke={gold}
            strokeWidth="0.8"
            opacity="0.35"
          />
          <path
            d="M0,22 Q15,24 30,20 Q50,14 70,22 Q90,30 110,22 Q130,16 150,24 Q170,32 190,24 Q210,18 230,26 Q250,34 270,26 Q290,20 310,28 Q330,36 350,28 Q370,22 390,30 Q410,38 430,30 Q450,24 470,32 Q490,40 510,32 Q530,26 550,34 Q570,42 590,34 Q610,28 630,36 Q650,44 670,36 Q690,30 710,38 Q730,46 750,38 Q770,32 790,40 Q810,50 830,42 Q850,36 870,44 Q890,54 910,46 Q930,40 950,48 Q970,58 990,50 Q1010,44 1030,52 Q1050,62 1070,54 Q1090,48 1110,56 Q1130,66 1150,58 Q1170,52 1190,60 Q1210,70 1230,62 Q1250,56 1270,64 Q1290,74 1310,66 Q1330,60 1350,68 Q1375,80 1400,72 Q1420,66 1440,70 L1440,120 L0,120 Z"
            fill={toColor}
          />
        </svg>
      </div>
    ),

    /* ── Elegant scrollwork flourish ── */
    flourish: (
      <div className="flex flex-col items-center justify-center py-10 md:py-14 px-8">
        <svg viewBox="0 0 600 80" className="w-full max-w-2xl" style={{ height: "clamp(40px, 6vw, 70px)" }} fill="none">
          {/* Left scroll */}
          <path
            d="M40,40 Q60,10 120,25 Q150,32 170,20 Q190,8 220,18 Q240,24 260,20 Q275,17 290,20"
            stroke={gold} strokeWidth="1.2" opacity="0.5" fill="none"
          />
          <path
            d="M40,40 Q55,55 80,45 Q100,38 120,42"
            stroke={gold} strokeWidth="0.8" opacity="0.3" fill="none"
          />
          {/* Right scroll (mirrored) */}
          <path
            d="M560,40 Q540,10 480,25 Q450,32 430,20 Q410,8 380,18 Q360,24 340,20 Q325,17 310,20"
            stroke={gold} strokeWidth="1.2" opacity="0.5" fill="none"
          />
          <path
            d="M560,40 Q545,55 520,45 Q500,38 480,42"
            stroke={gold} strokeWidth="0.8" opacity="0.3" fill="none"
          />
          {/* Center ornament */}
          <circle cx="300" cy="40" r="8" stroke={gold} strokeWidth="1" opacity="0.5" />
          <circle cx="300" cy="40" r="3" fill={goldMid} />
          {/* Decorative dots */}
          {[260, 270, 280, 320, 330, 340].map((x) => (
            <circle key={x} cx={x} cy="40" r="1.2" fill={goldMid} />
          ))}
          {/* Leaf accents */}
          {[180, 200, 400, 420].map((x, i) => (
            <ellipse
              key={`leaf-${i}`}
              cx={x}
              cy={30 + (i % 2) * 20}
              rx="4"
              ry="9"
              fill={goldSubtle}
              stroke={gold}
              strokeWidth="0.4"
              opacity="0.3"
              transform={`rotate(${i % 2 === 0 ? 25 : -25} ${x} ${30 + (i % 2) * 20})`}
            />
          ))}
        </svg>
      </div>
    ),

    /* ── Mandala-inspired radial ornament ── */
    mandala: (
      <div className="flex items-center justify-center py-10 md:py-14 px-8">
        <div className="ornamental-line flex-1 max-w-[180px] md:max-w-[260px]" />
        <svg viewBox="0 0 120 120" className="w-16 h-16 md:w-20 md:h-20 mx-4 md:mx-6 flex-shrink-0" fill="none">
          {/* Outer ring of petals */}
          {Array.from({ length: 12 }, (_, i) => i * 30).map((angle) => (
            <ellipse
              key={`outer-${angle}`}
              cx="60"
              cy="22"
              rx="4"
              ry="16"
              stroke={gold}
              strokeWidth="0.6"
              opacity="0.35"
              transform={`rotate(${angle} 60 60)`}
              fill={goldSubtle}
            />
          ))}
          {/* Inner ring of petals */}
          {Array.from({ length: 8 }, (_, i) => i * 45 + 22.5).map((angle) => (
            <ellipse
              key={`inner-${angle}`}
              cx="60"
              cy="32"
              rx="3"
              ry="10"
              stroke={gold}
              strokeWidth="0.5"
              opacity="0.3"
              transform={`rotate(${angle} 60 60)`}
              fill={goldSubtle}
            />
          ))}
          {/* Center circles */}
          <circle cx="60" cy="60" r="10" stroke={gold} strokeWidth="0.8" opacity="0.4" />
          <circle cx="60" cy="60" r="5" stroke={gold} strokeWidth="0.6" opacity="0.35" fill={goldSubtle} />
          <circle cx="60" cy="60" r="2" fill={goldMid} />
          {/* Corner dots */}
          {[0, 90, 180, 270].map((angle) => (
            <circle
              key={`dot-${angle}`}
              cx={60 + 42 * Math.cos((angle * Math.PI) / 180)}
              cy={60 + 42 * Math.sin((angle * Math.PI) / 180)}
              r="1.5"
              fill={goldMid}
            />
          ))}
        </svg>
        <div className="ornamental-line flex-1 max-w-[180px] md:max-w-[260px]" />
      </div>
    ),

    /* ── Flowing vine garland with flowers ── */
    "vine-garland": (
      <div className="flex items-center justify-center py-8 md:py-12 px-4 overflow-hidden">
        <svg viewBox="0 0 800 80" className="w-full max-w-3xl" style={{ height: "clamp(40px, 5vw, 65px)" }} fill="none">
          {/* Main vine curve */}
          <path
            d="M0 40 Q50 15 100 35 Q150 55 200 30 Q250 5 300 35 Q350 60 400 25 Q450 -5 500 35 Q550 60 600 30 Q650 5 700 35 Q750 55 800 40"
            stroke={gold}
            strokeWidth="1"
            opacity="0.4"
          />
          {/* Secondary vine */}
          <path
            d="M0 42 Q50 20 100 38 Q150 52 200 32 Q250 10 300 37 Q350 57 400 28 Q450 0 500 37 Q550 57 600 32 Q650 10 700 37 Q750 52 800 42"
            stroke={goldLight}
            strokeWidth="0.5"
            opacity="0.2"
          />
          {/* Flowers at peaks and troughs */}
          {[
            { x: 50, y: 26 }, { x: 150, y: 48 }, { x: 250, y: 16 },
            { x: 350, y: 52 }, { x: 450, y: 8 }, { x: 550, y: 52 },
            { x: 650, y: 16 }, { x: 750, y: 48 },
          ].map((pos, i) => (
            <g key={`flower-${i}`}>
              {/* Flower petals */}
              {[0, 72, 144, 216, 288].map((angle) => (
                <ellipse
                  key={angle}
                  cx={pos.x}
                  cy={pos.y - 5}
                  rx="2.5"
                  ry="5"
                  fill={i % 3 === 0 ? goldMid : goldFaint}
                  transform={`rotate(${angle} ${pos.x} ${pos.y})`}
                />
              ))}
              <circle cx={pos.x} cy={pos.y} r="2" fill={goldMid} />
            </g>
          ))}
          {/* Leaves along vine */}
          {[80, 180, 280, 380, 480, 580, 680].map((x, i) => {
            const y = 35 + Math.sin(i * 1.8) * 12;
            return (
              <ellipse
                key={`vine-leaf-${i}`}
                cx={x}
                cy={y}
                rx="3"
                ry="8"
                fill={goldFaint}
                stroke={gold}
                strokeWidth="0.3"
                opacity="0.25"
                transform={`rotate(${20 + i * 25} ${x} ${y})`}
              />
            );
          })}
        </svg>
      </div>
    ),

    /* ── Floral border band ── */
    "floral-border": (
      <div className="flex flex-col items-center justify-center py-8 md:py-10 px-8">
        <svg viewBox="0 0 400 30" className="w-full max-w-xl" style={{ height: "clamp(18px, 2.5vw, 28px)" }} fill="none">
          {/* Horizontal line with diamond nodes */}
          <line x1="0" y1="15" x2="400" y2="15" stroke={gold} strokeWidth="0.5" opacity="0.25" />
          {[50, 100, 150, 200, 250, 300, 350].map((x, i) => (
            <g key={i}>
              <rect
                x={x - 3}
                y={12}
                width="6"
                height="6"
                fill={i === 3 ? goldMid : goldSubtle}
                stroke={gold}
                strokeWidth="0.5"
                opacity="0.4"
                transform={`rotate(45 ${x} 15)`}
              />
            </g>
          ))}
          {/* Small flower at center */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={`fb-${angle}`}
              cx="200"
              cy={10}
              rx="2"
              ry="5"
              fill={goldSubtle}
              stroke={gold}
              strokeWidth="0.3"
              opacity="0.3"
              transform={`rotate(${angle} 200 15)`}
            />
          ))}
          <circle cx="200" cy="15" r="2.5" fill={goldMid} />
        </svg>
      </div>
    ),

    /* ── Footer flower garland ── */
    "footer-garland": (
      <div className="flex items-center justify-center py-8 md:py-12 px-4 overflow-hidden">
        <svg viewBox="0 0 800 100" className="w-full max-w-4xl" style={{ height: "clamp(50px, 7vw, 85px)" }} fill="none">
          {/* Main draped garland */}
          <path
            d="M0 20 Q100 70 200 30 Q300 -10 400 50 Q500 -10 600 30 Q700 70 800 20"
            stroke={gold}
            strokeWidth="1.5"
            opacity="0.4"
          />
          {/* Inner drape */}
          <path
            d="M50 25 Q150 60 250 30 Q350 0 400 45 Q450 0 550 30 Q650 60 750 25"
            stroke={goldLight}
            strokeWidth="0.8"
            opacity="0.25"
          />
          {/* Large flowers at drape points */}
          {[
            { x: 100, y: 48 }, { x: 300, y: 8 }, { x: 400, y: 50 },
            { x: 500, y: 8 }, { x: 700, y: 48 },
          ].map((pos, i) => (
            <g key={`gar-flower-${i}`}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <ellipse
                  key={angle}
                  cx={pos.x}
                  cy={pos.y - 6}
                  rx="3"
                  ry="7"
                  fill={i % 2 === 0 ? goldFaint : goldSubtle}
                  stroke={gold}
                  strokeWidth="0.4"
                  opacity="0.35"
                  transform={`rotate(${angle} ${pos.x} ${pos.y})`}
                />
              ))}
              <circle cx={pos.x} cy={pos.y} r="3.5" fill={goldMid} />
              <circle cx={pos.x} cy={pos.y} r="1.5" fill={gold} opacity="0.4" />
            </g>
          ))}
          {/* Hanging leaves */}
          {[150, 250, 350, 450, 550, 650].map((x, i) => {
            const y = 30 + Math.sin(i * 2) * 15;
            return (
              <g key={`gar-leaf-${i}`}>
                <ellipse
                  cx={x}
                  cy={y}
                  rx="4"
                  ry="10"
                  fill={goldFaint}
                  stroke={gold}
                  strokeWidth="0.3"
                  opacity="0.2"
                  transform={`rotate(${15 + i * 20} ${x} ${y})`}
                />
                <ellipse
                  cx={x + 8}
                  cy={y + 5}
                  rx="3"
                  ry="7"
                  fill={goldSubtle}
                  stroke={gold}
                  strokeWidth="0.2"
                  opacity="0.15"
                  transform={`rotate(${-20 + i * 15} ${x + 8} ${y + 5})`}
                />
              </g>
            );
          })}
          {/* Small buds */}
          {[180, 350, 450, 620].map((x, i) => (
            <circle key={`bud-${i}`} cx={x} cy={20 + i * 8} r="2" fill={goldMid} opacity="0.3" />
          ))}
        </svg>
      </div>
    ),

    /* ── Organic wave ── */
    "wave-organic": (
      <div className="relative w-full" style={{ marginTop: "-1px", marginBottom: "-1px" }}>
        <svg
          viewBox="0 0 1440 80"
          className="w-full block"
          style={{ height: "clamp(35px, 5vw, 65px)" }}
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 L1440,30 Q1320,60 1200,35 Q1080,10 960,40 Q840,65 720,30 Q600,0 480,35 Q360,65 240,30 Q120,0 0,30 Z"
            fill={fromColor}
          />
          <path
            d="M0,30 Q120,0 240,30 Q360,65 480,35 Q600,0 720,30 Q840,65 960,40 Q1080,10 1200,35 Q1320,60 1440,30"
            fill="none"
            stroke={gold}
            strokeWidth="1"
            opacity="0.3"
          />
          <path
            d="M0,30 Q120,0 240,30 Q360,65 480,35 Q600,0 720,30 Q840,65 960,40 Q1080,10 1200,35 Q1320,60 1440,30 L1440,80 L0,80 Z"
            fill={toColor}
          />
        </svg>
      </div>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      className={`relative z-10 ${className}`}
    >
      {dividers[variant]}
    </motion.div>
  );
};

export default OrnamentalDivider;
