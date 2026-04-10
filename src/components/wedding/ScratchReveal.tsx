import { useRef, useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const ScratchReveal = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [scratching, setScratching] = useState(false);
  const isDrawing = useRef(false);
  const scratchedPercent = useRef(0);

  const checkReveal = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    scratchedPercent.current = (transparent / (imageData.data.length / 4)) * 100;
    if (scratchedPercent.current > 50 && !revealed) {
      setRevealed(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#c9922a", "#e8c07a", "#8b6914"],
      });
    }
  }, [revealed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Gold scratch layer
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#c9922a");
    gradient.addColorStop(0.5, "#e8c07a");
    gradient.addColorStop(1, "#8b6914");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Pattern overlay
    ctx.globalAlpha = 0.15;
    for (let x = 0; x < rect.width; x += 20) {
      for (let y = 0; y < rect.height; y += 20) {
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;

    // "Scratch here" text
    ctx.font = `${Math.min(rect.width * 0.06, 18)}px "Cormorant Garamond", serif`;
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.textAlign = "center";
    ctx.fillText("✦ Scratch to reveal the date ✦", rect.width / 2, rect.height / 2);
  }, [revealed]);

  const scratch = useCallback(
    (x: number, y: number) => {
      const canvas = canvasRef.current;
      if (!canvas || revealed) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const rect = canvas.getBoundingClientRect();
      const cx = x - rect.left;
      const cy = y - rect.top;
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(cx, cy, 25, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
    },
    [revealed]
  );

  const handleStart = (x: number, y: number) => {
    isDrawing.current = true;
    setScratching(true);
    scratch(x, y);
  };
  const handleMove = (x: number, y: number) => {
    if (!isDrawing.current) return;
    scratch(x, y);
  };
  const handleEnd = () => {
    isDrawing.current = false;
    setScratching(false);
    checkReveal();
  };

  useEffect(() => {
    if (!revealed) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [revealed]);

  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div key="scratch" className="flex flex-col items-center">
              <p className="font-body text-lg text-muted-foreground mb-6 tracking-wider">
                Discover when the magic happens
              </p>
              <div className="relative w-[300px] h-[150px] md:w-[400px] md:h-[180px] rounded-xl overflow-hidden gold-glow">
                {/* Revealed content underneath */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-card">
                  <p className="font-heading text-2xl md:text-3xl text-foreground">
                    December 15, 2026
                  </p>
                  <p className="font-body text-muted-foreground mt-1">Sunday • Winter</p>
                </div>
                <canvas
                  ref={canvasRef}
                  className="absolute inset-0 w-full h-full scratch-canvas"
                  onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
                  onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
                  onMouseUp={handleEnd}
                  onMouseLeave={handleEnd}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    const t = e.touches[0];
                    handleStart(t.clientX, t.clientY);
                  }}
                  onTouchMove={(e) => {
                    e.preventDefault();
                    const t = e.touches[0];
                    handleMove(t.clientX, t.clientY);
                  }}
                  onTouchEnd={handleEnd}
                />
              </div>
              {scratching && (
                <motion.p
                  className="text-sm text-muted-foreground mt-3 opacity-60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                >
                  Keep scratching...
                </motion.p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex flex-col items-center"
            >
              <motion.p
                className="font-script text-4xl md:text-5xl text-gold-gradient mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                We're Getting Married
              </motion.p>
              <p className="font-heading text-3xl md:text-4xl text-foreground">
                December 15, 2026
              </p>
              <p className="font-body text-lg text-muted-foreground mt-2">
                Sunday • A Winter Celebration
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ScratchReveal;
