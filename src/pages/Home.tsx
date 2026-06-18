import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="min-h-[calc(100vh-110px)] flex items-center max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-16 overflow-visible">
          <div className="grid lg:grid-cols-12 gap-20 items-center w-full">
            {/* LEFT */}
            <div className="lg:col-span-5 relative z-10">
              <FadeIn>
                <p className="uppercase tracking-[0.45em] text-[11px] text-muted-foreground mb-10">
                  Studio Collection · 2026
                </p>
                <h1 className="font-serif text-6xl md:text-8xl xl:text-[112px] leading-[0.82] tracking-tight">
                  Art for the <span className="italic">moments</span> that stay with us.
                </h1>
                <p className="mt-12 text-lg leading-relaxed text-muted-foreground max-w-lg">
                  Original paintings and visual studies exploring memory, identity, place, and the quiet emotions hidden inside ordinary life.
                </p>
                <div className="mt-14 flex flex-wrap gap-10 items-center">
                  <Link
                    href="/gallery"
                    className="bg-foreground text-background px-10 py-5 hover:-translate-y-1 transition duration-300"
                    data-testid="link-hero-gallery"
                  >
                    View Collection
                  </Link>
                  <a
                    href="#commissions"
                    className="uppercase tracking-[0.25em] text-xs text-muted-foreground hover:text-foreground transition relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[1px] after:bg-foreground hover:after:w-full after:transition-all"
                  >
                    Private Commissions →
                  </a>
                </div>
              </FadeIn>
              {/* METRICS */}
              <FadeIn delay={0.2}>
                <div className="mt-12 pt-10 border-t border-border grid grid-cols-3 gap-8">
                  <div>
                    <p className="font-serif text-5xl">12+</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-[0.25em] mt-3">Works</p>
                  </div>
                  <div>
                    <p className="font-serif text-5xl">03</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-[0.25em] mt-3">Collections</p>
                  </div>
                  <div>
                    <p className="font-serif text-5xl">∞</p>
                    <p className="text-muted-foreground text-xs uppercase tracking-[0.25em] mt-3">Stories</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            {/* RIGHT */}
            <div className="lg:col-span-7 relative h-full min-h-[500px]">
              <FadeIn delay={0.3}>
                <div className="hidden lg:block absolute -left-24 top-16 z-20">
                  <p className="rotate-[-90deg] origin-left uppercase tracking-[0.45em] text-[11px] text-muted-foreground whitespace-nowrap">
                    Jordan
                  </p>
                </div>
                <div className="w-full h-full min-h-[600px] overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1800"
                    alt="Featured artwork"
                    className="w-full h-full object-cover transition duration-1000 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-10 left-10 bg-background/95 backdrop-blur-md px-8 py-7 max-w-xs">
                    <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground">Featured Collection</p>
                    <h3 className="font-serif text-3xl mt-3">Available Works</h3>
                  </div>
                </div>
                <div className="hidden xl:block absolute -right-8 bottom-24 bg-background px-8 py-8 max-w-[280px] shadow-sm">
                  <p className="font-serif text-2xl leading-tight">
                    Every piece begins with something worth remembering.
                  </p>
                  <div className="w-12 h-px bg-border mt-6 mb-4"></div>
                  <p className="uppercase tracking-[0.3em] text-[10px] text-muted-foreground">The Jordan Creative</p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* HERO TRANSITION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <FadeIn>
            <div className="border-t border-border pt-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              <div className="max-w-4xl">
                <p className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight">
                  A visual archive of people, places, and the memories attached to them.
                </p>
                <p className="mt-8 text-muted-foreground text-base lg:text-lg leading-relaxed max-w-xl">
                  Original works capturing quiet moments, personal stories, and the emotions behind everyday experiences.
                </p>
              </div>
              <div className="flex items-center gap-5 text-muted-foreground lg:pb-3">
                <span className="uppercase tracking-[0.35em] text-[10px]">Explore</span>
                <span className="text-2xl animate-bounce">↓</span>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* APPROACH */}
        <section id="approach" className="max-w-7xl mx-auto px-6 lg:px-10 pt-32 lg:pt-40 pb-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="uppercase tracking-[0.35em] text-xs text-muted-foreground mb-8">Current Focus</p>
                <h2 className="font-serif text-5xl lg:text-7xl leading-[0.95]">
                  Exploring the stories hidden inside ordinary moments.
                </h2>
                <p className="mt-10 text-muted-foreground text-lg leading-relaxed max-w-md">
                  Each collection begins with observation — a person, a place, or a memory — transformed into something lasting.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.2}>
                <div className="border-t border-border">
                  {[
                    { num: "01", title: "Source", desc: "Work begins with subjects that can be returned to slowly: a face, a room, a landscape, a trace of remembered light." },
                    { num: "02", title: "Surface", desc: "Paint, paper, and mark-making are treated as part of the subject, not simply the way an image is delivered." },
                    { num: "03", title: "Restraint", desc: "The final piece is edited toward clarity, leaving room for quiet, texture, and the viewer's own association." }
                  ].map((item, i, arr) => (
                    <div key={item.num} className={`group py-8 ${i !== arr.length - 1 ? "border-b border-border" : ""}`}>
                      <div className="flex justify-between items-start gap-6">
                        <div>
                          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Feature {item.num}</p>
                          <h3 className="font-serif text-4xl group-hover:italic transition-all duration-300">{item.title}</h3>
                          <p className="text-muted-foreground mt-3 leading-relaxed">{item.desc}</p>
                        </div>
                        <span className="font-serif text-3xl text-muted-foreground/30">{item.num}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
          <div className="mt-20 border-t border-border pt-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <FadeIn>
              <p className="font-serif text-3xl lg:text-5xl max-w-3xl leading-tight">
                From observation comes the collection.
              </p>
            </FadeIn>
            <div className="h-px flex-1 bg-border hidden md:block"></div>
          </div>
        </section>

        {/* FEATURED WORK */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-32">
          <FadeIn>
            <div className="max-w-5xl">
              <p className="uppercase tracking-[0.35em] text-xs text-muted-foreground mb-8">Current Exhibition</p>
              <h2 className="font-serif text-6xl lg:text-8xl leading-[0.95]">
                Works exploring connection, identity, and belonging.
              </h2>
              <p className="mt-8 max-w-2xl text-muted-foreground text-lg leading-relaxed">
                A collection of original acrylic paintings and sketches inspired by people, places, and the stories attached to them.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="mt-16">
              <div className="relative overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1600"
                  alt="Featured collection"
                  className="w-full aspect-[16/8] object-cover transition duration-1000 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-md px-6 py-5">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Featured Work</p>
                  <h3 className="font-serif text-3xl mt-2">Selected Original Pieces</h3>
                </div>
              </div>
              <div className="mt-8 flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
                <p className="text-muted-foreground max-w-xl leading-relaxed">
                  Available artwork, exhibitions, and commission inquiries from the current studio collection.
                </p>
                <Link
                  href="/gallery"
                  className="border border-foreground px-8 py-4 self-start hover:bg-foreground hover:text-background transition duration-300"
                  data-testid="link-home-to-gallery"
                >
                  View Collection
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* EVENTS & ABOUT */}
        <section id="about" className="bg-foreground text-background py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-20">
              <FadeIn>
                <div>
                  <p className="uppercase tracking-[0.35em] text-xs text-background/60 mb-8">Artist Story</p>
                  <h2 className="font-serif text-5xl leading-tight mb-8">
                    The Jordan Creative is a studio dedicated to the art of slowing down.
                  </h2>
                  <div className="space-y-6 text-background/80 leading-relaxed">
                    <p>
                      Every piece begins as an observation. Whether it’s the quality of light falling across a room, the specific expression of a subject in thought, or the atmosphere of a remembered landscape.
                    </p>
                    <p>
                      Based in San Francisco, the studio focuses on original acrylic works on canvas and paper, prioritizing texture, restraint, and emotional resonance over mere representation.
                    </p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div id="events">
                  <p className="uppercase tracking-[0.35em] text-xs text-background/60 mb-8">Upcoming</p>
                  <div className="space-y-0 border-t border-background/20">
                    {[
                      { title: "Open Studio Evening", date: "First Friday, 6–9pm", desc: "Monthly open studio visits" },
                      { title: "Commissions Workshop", date: "By appointment", desc: "Private sessions exploring custom portrait work" },
                      { title: "Group Exhibition", date: "Summer 2026", desc: "Selected works shown at a local gallery" }
                    ].map((event, i) => (
                      <div key={i} className="py-6 border-b border-background/20 group cursor-default">
                        <div className="flex justify-between items-baseline mb-2">
                          <h4 className="font-serif text-2xl group-hover:italic transition-all">{event.title}</h4>
                          <span className="text-xs uppercase tracking-widest text-background/60">{event.date}</span>
                        </div>
                        <p className="text-sm text-background/70">{event.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* NEWSLETTER & INQUIRY */}
        <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-10 py-40">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-6xl lg:text-7xl mb-6">Stay connected.</h2>
              <p className="text-muted-foreground text-lg mb-12">
                Join the studio newsletter for updates on new collections, exhibition dates, and available works.
              </p>
              <form id="newsletter-form" onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-b border-border py-3 px-4 outline-none focus:border-foreground transition placeholder:text-muted-foreground/50"
                  data-testid="input-newsletter-email"
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="bg-foreground text-background px-8 py-3 disabled:opacity-70 disabled:cursor-not-allowed hover:bg-foreground/90 transition"
                  data-testid="button-newsletter-submit"
                >
                  {subscribed ? "Subscribed" : "Subscribe"}
                </button>
              </form>
            </div>
          </FadeIn>
          
          <div id="commissions" className="mt-40 border-t border-border pt-24 text-center">
            <FadeIn>
              <p className="uppercase tracking-[0.35em] text-xs text-muted-foreground mb-6">Private Work</p>
              <h3 className="font-serif text-4xl mb-8">Interested in a custom commission?</h3>
              <a 
                href="mailto:hello@thejordancreative.com"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition"
              >
                Inquire via Email <span className="text-lg">↗</span>
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
