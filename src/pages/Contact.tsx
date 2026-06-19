import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";
import { artist } from "@/data/artist";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [formType, setFormType] = useState<'general' | 'commission'>('general');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <Header />

      <main>
        {/* INTRO */}
        <section className="section-luxury-sm">
          <div className="container-luxury">
            <FadeIn>
              <div className="max-w-4xl">
                <p className="text-caption text-muted-foreground mb-4">Contact</p>
                <h1 className="text-display mb-6">
                  Let's connect
                </h1>
                <p className="text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
                  For inquiries about available works, commissions, or exhibition opportunities, we'd love to hear from you.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CONTACT INFO */}
        <section className="section-luxury-sm border-t border-border">
          <div className="container-luxury">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <FadeIn>
                <div>
                  <h2 className="text-heading mb-8">Studio Information</h2>
                  <div className="space-y-6">
                    <div>
                      <p className="text-caption text-muted-foreground mb-2">Location</p>
                      <p className="text-body">{artist.location}</p>
                    </div>
                    <div>
                      <p className="text-caption text-muted-foreground mb-2">Email</p>
                      <a href={`mailto:${artist.email}`} className="text-body hover:text-muted-foreground transition">
                        {artist.email}
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <h2 className="text-heading mb-8">Connect</h2>
                  <SocialIcons />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FORM */}
        <section className="section-luxury border-t border-border">
          <div className="container-luxury">
            <FadeIn>
              <div className="max-w-2xl">
                <div className="flex gap-12 mb-12">
                  <button
                    onClick={() => setFormType('general')}
                    className={`text-caption pb-3 border-b-2 transition ${
                      formType === 'general' 
                        ? 'border-foreground text-foreground' 
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    General Inquiry
                  </button>
                  <button
                    onClick={() => setFormType('commission')}
                    className={`text-caption pb-3 border-b-2 transition ${
                      formType === 'commission' 
                        ? 'border-foreground text-foreground' 
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Commission Inquiry
                  </button>
                </div>

                {submitted ? (
                  <div className="text-center py-16">
                    <p className="text-heading mb-4">Thank you</p>
                    <p className="text-body text-muted-foreground">
                      We'll be in touch within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div>
                      <label className="block text-caption text-muted-foreground mb-3">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-3 px-0 outline-none focus:border-foreground transition placeholder:text-muted-foreground/50 text-body"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-caption text-muted-foreground mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-3 px-0 outline-none focus:border-foreground transition placeholder:text-muted-foreground/50 text-body"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-caption text-muted-foreground mb-3">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-3 px-0 outline-none focus:border-foreground transition placeholder:text-muted-foreground/50 text-body"
                        placeholder="(optional)"
                      />
                    </div>

                    {formType === 'general' && (
                      <div>
                        <label className="block text-caption text-muted-foreground mb-3">
                          Subject *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-transparent border-b border-border py-3 px-0 outline-none focus:border-foreground transition placeholder:text-muted-foreground/50 text-body"
                          placeholder="How can we help?"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-caption text-muted-foreground mb-3">
                        Message *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="w-full bg-transparent border-b border-border py-3 px-0 outline-none focus:border-foreground transition placeholder:text-muted-foreground/50 text-body resize-none"
                        placeholder={formType === 'commission' ? 'Tell us about your commission project...' : 'Your message...'}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full border border-foreground px-8 py-4 text-caption hover:bg-foreground hover:text-background transition"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
