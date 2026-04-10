import { motion } from "framer-motion";

const VenueSection = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-body text-lg tracking-[0.2em] uppercase text-muted-foreground mb-3">
          The Celebration Awaits
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
          Summer Palace
        </h2>
        <p className="font-body text-lg text-muted-foreground max-w-lg mx-auto mb-4">
          Nestled amidst manicured gardens and regal architecture, Summer Palace
          sets the perfect stage for our union — where timeless elegance meets
          heartfelt celebration.
        </p>
        <p className="font-body text-base text-muted-foreground mb-8">
          Surat, Gujarat • India
        </p>

        {/* Venue illustration placeholder */}
        <motion.div
          className="w-full max-w-md mx-auto h-48 rounded-xl border border-border bg-card flex items-center justify-center mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="hsl(38 65% 50% / 0.4)" strokeWidth="1" className="mx-auto mb-2">
              <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
            </svg>
            <p className="font-body text-sm text-muted-foreground">Venue Illustration</p>
            <p className="font-body text-xs text-muted-foreground opacity-60">/assets/illustrations/venue.png</p>
          </div>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          className="w-full rounded-xl overflow-hidden border border-border shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1251.040952407684!2d72.71778471191968!3d21.08572202753931!2m3!1f0!2f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0532e4a01a64f%3A0x19e8cd4aaa84508f!2sSummer%20Palace!5e1!3m2!1sen!2sin!4v1775637860057!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Summer Palace Location"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VenueSection;
