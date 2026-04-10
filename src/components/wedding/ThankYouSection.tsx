import { motion } from "framer-motion";

const ThankYouSection = () => {
  return (
    <section className="py-28 md:py-36 px-6 relative">
      {/* Floral garland divider at top */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <svg viewBox="0 0 400 40" className="w-80 h-10 opacity-30">
          <path d="M0 35 Q50 5 100 25 Q150 45 200 20 Q250 -5 300 25 Q350 50 400 35" fill="none" stroke="hsl(38 65% 50%)" strokeWidth="1.5" />
          {[50, 100, 150, 200, 250, 300, 350].map((x, i) => (
            <circle key={i} cx={x} cy={20 + Math.sin(i) * 10} r="4" fill="hsl(38 65% 50% / 0.3)" />
          ))}
        </svg>
      </div>

      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="font-script text-fluid-4xl text-gold-gradient mb-8 leading-[1.5] pb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Thank You
        </motion.p>
        <p className="font-body text-fluid-lg text-muted-foreground leading-[1.8] mb-6">
          Your presence at our wedding would be the greatest gift of all.
          We are deeply grateful for the love and blessings you bring to our lives.
        </p>
        <p className="font-body text-fluid-base text-muted-foreground leading-relaxed">
          With love and gratitude,
        </p>
        <p className="font-heading text-fluid-xl text-foreground mt-3 leading-[1.4]">
          Priya & Arjun
        </p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-body text-fluid-sm text-muted-foreground italic leading-relaxed">
            ॐ शुभ विवाह ॐ
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ThankYouSection;
