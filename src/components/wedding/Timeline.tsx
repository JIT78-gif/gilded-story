import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    time: "9:00 AM",
    title: "Haldi Ceremony",
    description: "A joyous ritual of turmeric paste, blessings, and laughter as we prepare for the big day.",
    side: "left" as const,
    icon: "☀️",
  },
  {
    time: "11:00 AM",
    title: "Mehndi Celebration",
    description: "Intricate henna designs adorn the bride's hands, accompanied by music and dance.",
    side: "right" as const,
    icon: "🌸",
  },
  {
    time: "4:00 PM",
    title: "Baraat Procession",
    description: "The groom arrives in a grand procession with music, dancing, and jubilant revelry.",
    side: "left" as const,
    icon: "🐴",
  },
  {
    time: "5:30 PM",
    title: "Wedding Ceremony",
    description: "Sacred vows and the seven pheras around the holy fire, witnessed by family and the divine.",
    side: "right" as const,
    icon: "🔥",
  },
  {
    time: "7:00 PM",
    title: "Vidaai",
    description: "A poignant farewell as the bride departs with her new family, showered in love.",
    side: "left" as const,
    icon: "🌙",
  },
  {
    time: "8:00 PM",
    title: "Reception & Dinner",
    description: "An evening of celebration with fine dining, music, and endless joy.",
    side: "right" as const,
    icon: "🎉",
  },
];

const TimelineEvent = ({ event, index }: { event: typeof events[0]; index: number }) => {
  const isLeft = event.side === "left";

  return (
    <motion.div
      className={`flex items-center w-full mb-12 md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row`}
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Content card */}
      <div className={`w-full md:w-5/12 ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} text-center md:text-inherit`}>
        <motion.div
          className="bg-card border border-border rounded-xl p-6 shadow-sm relative"
          whileHover={{ y: -4, boxShadow: "0 10px 30px hsl(38 65% 50% / 0.1)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Hanging animation - frame effect */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-3">
            <svg viewBox="0 0 32 12" fill="none" className="w-full h-full">
              <path d="M8 0 L16 10 L24 0" stroke="hsl(38 65% 50%)" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-2">
            {event.time}
          </p>
          <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">
            {event.title}
          </h3>
          <p className="font-body text-base text-muted-foreground leading-relaxed">
            {event.description}
          </p>

          {/* Photo placeholder */}
          <div className="mt-4 w-full h-28 rounded-lg bg-cream-dark flex items-center justify-center">
            <div className="text-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(38 65% 50% / 0.3)" strokeWidth="1" className="mx-auto">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <p className="font-body text-[10px] text-muted-foreground mt-1">Event photo</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Center dot (hidden on mobile) */}
      <div className="hidden md:flex w-2/12 justify-center relative">
        <motion.div
          className="w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
        >
          <span className="text-lg">{event.icon}</span>
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
    <section className="py-20 px-6" ref={containerRef}>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-body text-lg tracking-[0.2em] uppercase text-muted-foreground mb-3">
          The Celebrations
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground">
          Schedule of Events
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto relative">
        {/* Central timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
          {/* Background line */}
          <div className="absolute inset-0 bg-border" />
          {/* Animated gold vine line */}
          <motion.div
            className="absolute top-0 left-0 right-0 bg-primary origin-top"
            style={{ height: lineHeight }}
          />
          {/* Floral vine decorations along the line */}
          {[15, 35, 55, 75].map((pos, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${pos}%` }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                {[0, 72, 144, 216, 288].map((angle) => (
                  <ellipse
                    key={angle}
                    cx="10" cy="4" rx="2.5" ry="5"
                    fill="hsl(38 65% 50% / 0.3)"
                    transform={`rotate(${angle} 10 10)`}
                  />
                ))}
                <circle cx="10" cy="10" r="2" fill="hsl(38 65% 50% / 0.5)" />
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
