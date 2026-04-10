import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WEDDING_DATE = new Date("2026-12-15T10:00:00");

interface TimeUnit {
  value: number;
  label: string;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);

  useEffect(() => {
    const calc = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) return setTimeLeft([]);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft([
        { value: days, label: "Days" },
        { value: hours, label: "Hours" },
        { value: minutes, label: "Minutes" },
        { value: seconds, label: "Seconds" },
      ]);
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-20 px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-body text-lg tracking-[0.2em] uppercase text-muted-foreground mb-10">
          Counting down to forever
        </p>
        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {timeLeft.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Circular design */}
              <div className="relative w-20 h-20 md:w-28 md:h-28">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none"
                    stroke="hsl(38 65% 50% / 0.15)"
                    strokeWidth="1.5"
                  />
                  <motion.circle
                    cx="50" cy="50" r="45"
                    fill="none"
                    stroke="hsl(38 65% 50%)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={
                      2 * Math.PI * 45 * (1 - unit.value / (unit.label === "Days" ? 365 : unit.label === "Hours" ? 24 : 60))
                    }
                    transition={{ duration: 0.5 }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span
                    key={unit.value}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-heading text-xl md:text-3xl text-foreground"
                  >
                    {String(unit.value).padStart(2, "0")}
                  </motion.span>
                </div>
              </div>
              <p className="font-body text-xs md:text-sm text-muted-foreground mt-2 tracking-wider uppercase">
                {unit.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownTimer;
