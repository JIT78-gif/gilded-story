import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const IMAGES = Array.from({ length: 8 }, (_, i) => ({
  id: i,
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
      setRotation((r) => r + dt * 0.008);
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section className="py-28 md:py-36 overflow-visible">
      <motion.div
        className="text-center mb-16 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-body text-fluid-lg tracking-[0.2em] uppercase text-muted-foreground mb-5 leading-relaxed">
          Our Journey Together
        </p>
        <h2 className="font-heading text-fluid-4xl text-foreground leading-[1.3]">
          Moments of Love
        </h2>
      </motion.div>

      <div className="relative w-full lg:w-screen lg:max-w-none lg:ml-[calc(-50vw+50%)]" style={{ height: "clamp(320px, 40vw, 500px)" }}>
        <div
          className="relative w-full h-full mx-auto"
          style={{ perspective: "clamp(1000px, 80vw, 2000px)", maxWidth: "clamp(400px, 80vw, 100%)" }}
        >
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotation}deg)`,
            }}
          >
            {IMAGES.map((img, i) => {
              const angle = i * angleStep;
              return (
                <div
                  key={img.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    width: "clamp(140px, 14vw, 220px)",
                    height: "clamp(190px, 18vw, 280px)",
                    transform: `rotateY(${angle}deg) translateZ(clamp(180px, 22vw, 420px))`,
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="w-full h-full rounded-lg border border-border bg-card shadow-lg flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-cream-dark flex flex-col items-center justify-center p-4">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="hsl(38 65% 50% / 0.4)" strokeWidth="1">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      <p className="font-body text-fluid-sm text-muted-foreground mt-3">{img.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleGallery;
