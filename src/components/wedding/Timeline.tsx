import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    time: "9:00 AM",
    title: "Haldi Ceremony",
    description: "A joyous ritual of turmeric paste, blessings, and laughter as we prepare for the big day.",
    side: "left" as const,
  },
  {
    time: "11:00 AM",
    title: "Mehndi Celebration",
    description: "Intricate henna designs adorn the bride's hands, accompanied by music and dance.",
    side: "right" as const,
  },
  {
    time: "4:00 PM",
    title: "Baraat Procession",
    description: "The groom arrives in a grand procession with music, dancing, and jubilant revelry.",
    side: "left" as const,
  },
  {
    time: "5:30 PM",
    title: "Wedding Ceremony",
    description: "Sacred vows and the seven pheras around the holy fire, witnessed by family and the divine.",
    side: "right" as const,
  },
  {
    time: "7:00 PM",
    title: "Vidaai",
    description: "A poignant farewell as the bride departs with her new family, showered in love.",
    side: "left" as const,
  },
  {
    time: "8:00 PM",
    title: "Reception & Dinner",
    description: "An evening of celebration with fine dining, music, and endless joy.",
    side: "right" as const,
  },
];

const TimelineEvent = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const isLeft = event.side === "left";

  return (
    <motion.div
      className={`flex items-start w-full mb-20 md:mb-24 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row`}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Content card with hanging animation */}
      <div className={`w-full md:w-5/12 ${isLeft ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} text-center md:text-inherit`}>
        <motion.div
          className="relative pt-8"
          style={{ transformOrigin: "top center" }}
          initial={{ rotate: -2, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.2, type: "spring", stiffness: 80, damping: 12 }}
        >
          {/* Hanging string */}
          <div className="absolute -top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-primary/40" />
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full border border-primary/50 bg-card" />

          <motion.div
            className="bg-card border border-border rounded-xl p-7 md:p-9 shadow-sm"
            whileHover={{ y: -4, boxShadow: "0 10px 30px hsl(38 65% 50% / 0.1)" }}
            animate={{
              rotate: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              },
            }}
          >
            <p className="font-body text-fluid-sm tracking-[0.2em] uppercase text-primary mb-3">
              {event.time}
            </p>
            <h3 className="font-heading text-fluid-xl text-foreground mb-4 leading-[1.3]">
              {event.title}
            </h3>
            <p className="font-body text-fluid-base text-muted-foreground leading-[1.8]">
              {event.description}
            </p>

            {/* Photo placeholder */}
            <div className="mt-6 w-full rounded-lg bg-cream-dark flex items-center justify-center py-8">
              <div className="text-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(38 65% 50% / 0.3)" strokeWidth="1" className="mx-auto">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="font-body text-xs text-muted-foreground mt-2">Event photo</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Center marker — elegant gold diamond */}
      <div className="hidden md:flex w-2/12 justify-center relative">
        <motion.div
          className="w-10 h-10 flex items-center justify-center z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
        >
          <div className="w-3.5 h-3.5 rotate-45 border-2 border-primary bg-card shadow-sm" />
        </motion.div>
      </div>

      {/* Empty space for opposite side */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-28 md:py-36 px-6" ref={containerRef}>
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-body text-fluid-lg tracking-[0.2em] uppercase text-muted-foreground mb-5 leading-relaxed">
          The Celebrations
        </p>
        <h2 className="font-heading text-fluid-4xl text-foreground leading-[1.3]">
          Schedule of Events
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        {/* Central timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
          <div className="absolute inset-0 bg-border" />
          <motion.div
            className="absolute top-0 left-0 right-0 bg-primary origin-top"
            style={{ height: lineHeight }}
          />
          {/* Small floral accents along the vine */}
          {[10, 30, 50, 70, 90].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${pos}%` }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                {[0, 72, 144, 216, 288].map((angle) => (
                  <ellipse
                    key={angle}
                    cx="8" cy="3" rx="2" ry="4"
                    fill="hsl(38 65% 50% / 0.25)"
                    transform={`rotate(${angle} 8 8)`}
                  />
                ))}
                <circle cx="8" cy="8" r="1.5" fill="hsl(38 65% 50% / 0.4)" />
              </svg>
            </motion.div>
          ))}
        </div>

        {events.map((event, i) => (
          <TimelineEvent key={i} event={event} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
