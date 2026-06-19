import { useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Header />

      <main>
        {/* HERO */}
        <section className="min-h-screen pt-4 pb-2 md:h-screen">
          <div className="container-luxury">
            <FadeIn>
              <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-start h-full">
                <div className="aspect-[3/5] overflow-hidden max-h-[60vh] md:max-h-[70vh]">
                  <img
                    src={artist.portraitUrl}
                    alt="The Jordan Collective"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-caption text-muted-foreground mb-1">About</p>
                  <h1 className="text-display mb-2 md:mb-3">
                    THE JORDAN COLLECTIVE
                  </h1>
                  <div className="text-body text-muted-foreground leading-relaxed space-y-1">
                    {artist.bio.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-border">
                    <div className="flex gap-3">
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center border border-border hover:border-foreground hover:bg-foreground hover:text-background transition group">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center border border-border hover:border-foreground hover:bg-foreground hover:text-background transition group">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      </a>
                      <a href="https://x.com" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center border border-border hover:border-foreground hover:bg-foreground hover:text-background transition group">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                        </svg>
                      </a>
                      <a href={`mailto:${artist.email}`} className="w-8 h-8 flex items-center justify-center border border-border hover:border-foreground hover:bg-foreground hover:text-background transition group">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* EXHIBITIONS */}
        <section className="section-luxury border-t border-border">
          <div className="container-luxury">
            <FadeIn>
              <div className="mb-20">
                <p className="text-caption text-muted-foreground mb-8">Exhibitions</p>
                <h2 className="text-heading-lg">Selected exhibitions</h2>
              </div>
            </FadeIn>

            <div className="space-y-12">
              {artist.exhibitions.map((exhibition, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6">
                    <div>
                      <h3 className="text-heading mb-3">{exhibition.title}</h3>
                      <p className="text-body text-muted-foreground">{exhibition.venue}</p>
                      <p className="text-body text-muted-foreground">{exhibition.location}</p>
                    </div>
                    <p className="text-caption text-muted-foreground">{exhibition.year}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PRESS */}
        <section className="section-luxury border-t border-border">
          <div className="container-luxury">
            <FadeIn>
              <div className="mb-20">
                <p className="text-caption text-muted-foreground mb-8">Press</p>
                <h2 className="text-heading-lg">Featured publications</h2>
              </div>
            </FadeIn>

            <div className="space-y-12">
              {artist.press.map((press, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-6">
                    <div>
                      <h3 className="text-heading mb-3">{press.title}</h3>
                      <p className="text-body text-muted-foreground">{press.publication}</p>
                    </div>
                    <p className="text-caption text-muted-foreground">{press.year}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="section-luxury border-t border-border">
          <div className="container-luxury">
            <FadeIn>
              <div className="max-w-3xl text-center">
                <h2 className="text-heading mb-8">Interested in a commission?</h2>
                <Link
                  href="/contact"
                  className="inline-block border border-foreground px-10 py-5 text-caption hover:bg-foreground hover:text-background transition"
                >
                  Commission Inquiries
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
