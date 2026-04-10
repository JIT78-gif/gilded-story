import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  attendance: "accept" | "decline" | "";
}

const RSVPSection = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    attendance: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Valid email is required";
    if (!form.phone.trim() || !/^\+?[\d\s-]{7,15}$/.test(form.phone))
      errs.phone = "Valid phone is required";
    if (!form.attendance) errs.attendance = "Please select attendance";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Placeholder function - replace with actual API call
    console.log("RSVP Submitted:", form);
    setSubmitted(true);
    toast.success("Thank you for your response!", {
      description: form.attendance === "accept"
        ? "We can't wait to celebrate with you!"
        : "You will be missed. Sending love your way.",
    });
  };

  const inputClasses =
    "w-full bg-transparent border-b border-border focus:border-primary outline-none py-3 px-1 font-body text-lg text-foreground placeholder:text-muted-foreground transition-colors";

  if (submitted) {
    return (
      <section className="py-20 px-6">
        <motion.div
          className="max-w-md mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring" }}
        >
          <motion.div
            className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="hsl(38 65% 50%)" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </motion.div>
          <h3 className="font-heading text-2xl text-foreground mb-2">Response Received</h3>
          <p className="font-body text-lg text-muted-foreground">
            {form.attendance === "accept"
              ? "We're thrilled you'll be joining us for this beautiful celebration."
              : "Thank you for letting us know. You'll be in our hearts."}
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6">
      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <p className="font-body text-lg tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Will you join us?
          </p>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Kindly Respond
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <input
              type="text"
              placeholder="Your Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClasses}
              maxLength={100}
            />
            {errors.name && <p className="text-destructive text-sm mt-1 font-body">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClasses}
              maxLength={255}
            />
            {errors.email && <p className="text-destructive text-sm mt-1 font-body">{errors.email}</p>}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClasses}
              maxLength={15}
            />
            {errors.phone && <p className="text-destructive text-sm mt-1 font-body">{errors.phone}</p>}
          </div>

          <div>
            <p className="font-body text-muted-foreground mb-4">Will you be attending?</p>
            <div className="flex gap-4">
              {(["accept", "decline"] as const).map((opt) => (
                <motion.button
                  key={opt}
                  type="button"
                  onClick={() => setForm({ ...form, attendance: opt })}
                  className={`flex-1 py-3 rounded-lg border font-body text-lg transition-all ${
                    form.attendance === opt
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {opt === "accept" ? "Joyfully Accept" : "Regretfully Decline"}
                </motion.button>
              ))}
            </div>
            {errors.attendance && <p className="text-destructive text-sm mt-1 font-body">{errors.attendance}</p>}
          </div>

          <motion.button
            type="submit"
            className="w-full py-4 bg-gold-gradient rounded-lg font-heading text-lg text-primary-foreground tracking-wider"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 25px hsl(38 65% 50% / 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            Send Response
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
