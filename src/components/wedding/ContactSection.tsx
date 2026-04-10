import { motion } from "framer-motion";

const contacts = [
  {
    family: "Bride's Family",
    name: "Mr. & Mrs. Sharma",
    phone: "+91 98765 43210",
    relation: "Parents of the Bride",
  },
  {
    family: "Groom's Family",
    name: "Mr. & Mrs. Patel",
    phone: "+91 98765 43211",
    relation: "Parents of the Groom",
  },
];

const ContactSection = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <motion.div
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-10">
          <p className="font-body text-lg tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Get in Touch
          </p>
          <h2 className="font-heading text-2xl text-foreground">
            Contact Information
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((c, i) => (
            <motion.div
              key={i}
              className="text-center p-6 rounded-xl border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-2">
                {c.family}
              </p>
              <h3 className="font-heading text-lg text-foreground mb-1">{c.name}</h3>
              <p className="font-body text-muted-foreground text-sm mb-2">{c.relation}</p>
              <a
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="font-body text-foreground hover:text-primary transition-colors"
              >
                {c.phone}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="ornamental-line w-24 mx-auto mb-4" />
          <p className="font-body text-sm text-muted-foreground">
            Made with love for Priya & Arjun's Wedding
          </p>
          <p className="font-body text-xs text-muted-foreground mt-1">
            December 15, 2026 • Summer Palace, Surat
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default ContactSection;
