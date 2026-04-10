import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const IMAGES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  // Placeholder - replace with actual couple photos
  label: `Photo ${i + 1}`,
}));

const CoupleGallery = () => {
  const [rotation, setRotation] = useState(0);
  const animRef = useRef<number>(0);
  const count = IMAGES.length;
  const angleStep = 360 / count;

  useEffect(() => {
    let prev = performance.now();
    const animate = (now: number) => {
      const dt = now - prev;
      prev = now;
      setRotation((r) => r + dt * 0.008); // slow rotation
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section className="py-20 px-6 overflow-hidden">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-body text-lg tracking-[0.2em] uppercase text-muted-foreground mb-3">
          Our Journey Together
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground">
          Moments of Love
        </h2>
      </motion.div>

      <div className="relative mx-auto" style={{ perspective: "1000px", height: "320px", maxWidth: "600px" }}>
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
          }}
        >
          {IMAGES.map((img, i) => {
            const angle = i * angleStep;
            const radius = 220;
            return (
              <div
                key={img.id}
                className="absolute left-1/2 top-1/2 w-36 h-48 md:w-44 md:h-56 -ml-[72px] -mt-[96px] md:-ml-[88px] md:-mt-[112px]"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="w-full h-full rounded-lg border border-border bg-card shadow-lg flex items-center justify-center overflow-hidden">
                  {/* Placeholder for couple photo */}
                  <div className="w-full h-full bg-cream-dark flex flex-col items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(38 65% 50% / 0.4)" strokeWidth="1">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <p className="font-body text-xs text-muted-foreground mt-2">{img.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoupleGallery;
