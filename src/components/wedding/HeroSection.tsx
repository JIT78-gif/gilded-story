import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(38 65% 50%) 1px, transparent 1px),
            radial-gradient(circle at 80% 50%, hsl(38 65% 50%) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner ornaments */}
      {["-top-2 -left-2", "-top-2 -right-2 rotate-90", "-bottom-2 -left-2 -rotate-90", "-bottom-2 -right-2 rotate-180"].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} w-32 h-32 md:w-48 md:h-48 opacity-20`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ delay: 1 + i * 0.2, duration: 1 }}
        >
          <svg viewBox="0 0 100 100" fill="none" stroke="hsl(38 65% 50%)" strokeWidth="0.5">
            <path d="M0 0 Q50 10 50 50 Q10 50 0 0Z" />
            <path d="M5 5 Q45 15 45 45 Q15 45 5 5Z" />
            <circle cx="20" cy="20" r="3" />
          </svg>
        </motion.div>
      ))}

      <motion.div
        className="text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.p
          className="font-body text-lg md:text-xl tracking-[0.3em] uppercase text-muted-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Together with their families
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-gold-gradient leading-relaxed pb-2">
            Priya
          </h1>
          <motion.p
            className="font-body text-2xl md:text-3xl text-muted-foreground my-3"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            &amp;
          </motion.p>
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-gold-gradient leading-relaxed pb-2">
            Arjun
          </h1>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="ornamental-line w-40 mx-auto mb-6" />
          <p className="font-body text-lg md:text-xl tracking-[0.15em] text-muted-foreground">
            Request the honour of your presence
          </p>
          <p className="font-body text-lg md:text-xl tracking-[0.15em] text-muted-foreground mt-1">
            at the celebration of their marriage
          </p>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-primary opacity-60"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
