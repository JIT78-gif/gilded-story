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
    <footer className="py-24 md:py-28 px-6 border-t border-border">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <p className="font-body text-fluid-lg tracking-[0.2em] uppercase text-muted-foreground mb-3 leading-relaxed">
            Get in Touch
          </p>
          <h2 className="font-heading text-fluid-2xl text-foreground leading-[1.3]">
            Contact Information
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {contacts.map((c, i) => (
            <motion.div
              key={i}
              className="text-center p-8 rounded-xl border border-border bg-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <p className="font-body text-fluid-sm tracking-[0.2em] uppercase text-primary mb-3">
                {c.family}
              </p>
              <h3 className="font-heading text-fluid-lg text-foreground mb-2 leading-[1.4]">{c.name}</h3>
              <p className="font-body text-fluid-sm text-muted-foreground mb-3 leading-relaxed">{c.relation}</p>
              <a
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="font-body text-fluid-base text-foreground hover:text-primary transition-colors leading-relaxed"
              >
                {c.phone}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-14">
          <div className="ornamental-line w-24 mx-auto mb-5" />
          <p className="font-body text-fluid-sm text-muted-foreground leading-relaxed">
            Made with love for Priya & Arjun's Wedding
          </p>
          <p className="font-body text-xs text-muted-foreground mt-2 leading-relaxed">
            December 15, 2026 • Summer Palace, Surat
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default ContactSection;
