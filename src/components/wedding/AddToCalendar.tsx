import { motion } from "framer-motion";

const AddToCalendar = () => {
  const handleAdd = () => {
    const event = {
      text: "Priya & Arjun's Wedding",
      dates: "20261215T100000/20261215T230000",
      location: "Summer Palace, Surat, Gujarat, India",
      details: "Join us for a beautiful celebration of love.",
    };
    const url = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(event.text)}&dates=${event.dates}&location=${encodeURIComponent(event.location)}&details=${encodeURIComponent(event.details)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-12 px-6">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-body text-muted-foreground mb-4 text-lg">
          Don't forget to save the date
        </p>
        <motion.button
          onClick={handleAdd}
          className="inline-flex items-center gap-3 px-8 py-4 border border-primary rounded-lg font-body text-lg text-foreground hover:bg-primary/5 transition-colors"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
          </svg>
          Add to Google Calendar
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AddToCalendar;
