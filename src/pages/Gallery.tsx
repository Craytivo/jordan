import { useRef } from "react";
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

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background pt-32">
      <Header />

      <main>
        {/* INTRO */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:pb-32">
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-5 mb-12">
                  <span className="w-16 h-px bg-border"></span>
                  <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground">
                    Gallery Archive · Selected Works
                  </p>
                </div>
                <h1 className="font-serif text-6xl md:text-8xl lg:text-[130px] leading-[0.82] tracking-tight">
                  A collection<br />
                  of <span className="italic">remembered</span><br />
                  moments.
                </h1>
              </div>
              <div className="lg:col-span-3 lg:col-start-10">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Original works exploring memory, identity, landscape, and the emotions attached to place.
                </p>
                <div className="mt-10 pt-8 border-t border-border">
                  <p className="uppercase tracking-[0.3em] text-xs text-muted-foreground mb-3">Collection</p>
                  <p className="font-serif text-3xl">2022—2026</p>
                </div>
              </div>
            </div>
            {/* TRANSITION */}
            <div className="mt-24 border-t border-border pt-12">
              <p className="font-serif text-3xl lg:text-5xl leading-tight max-w-4xl">
                Each piece begins with observation — a face, a landscape, a memory, or a story worth preserving.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* FEATURED WORK */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-32 border-t border-border">
          <FadeIn>
            <div className="mb-20 max-w-2xl">
              <p className="uppercase tracking-[0.4em] text-xs text-muted-foreground mb-8">Featured Work</p>
              <h2 className="font-serif text-5xl lg:text-8xl leading-[0.9]">
                A moment suspended in paint.
              </h2>
            </div>
            <div className="relative group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1800"
                alt="Featured Artwork"
                className="w-full h-[60vh] lg:h-[85vh] object-cover transition duration-1000 group-hover:scale-[1.02]"
              />
              <div className="absolute left-4 sm:left-8 bottom-4 sm:bottom-8 bg-background px-6 sm:px-8 py-5 sm:py-7 max-w-[280px] sm:max-w-sm">
                <p className="uppercase tracking-[0.3em] text-[10px] sm:text-xs text-muted-foreground">Portrait Study</p>
                <p className="font-serif text-2xl sm:text-3xl mt-2 sm:mt-3">Acrylic on Canvas</p>
                <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                  Exploring identity, memory, and the traces people leave behind.
                </p>
              </div>
            </div>
            {/* CURATOR NOTE */}
            <div className="grid lg:grid-cols-12 mt-14 gap-8">
              <div className="lg:col-span-5">
                <p className="font-serif text-3xl sm:text-4xl leading-tight">
                  “The strongest stories are often the quietest.”
                </p>
              </div>
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-muted-foreground leading-relaxed">
                  This collection explores the relationship between observation and memory, capturing familiar moments before they disappear.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* COLLECTIONS */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-32">
          {/* 01 PORTRAITS */}
          <article className="mb-32 lg:mb-48">
            <FadeIn>
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
                <div className="lg:col-span-3">
                  <p className="font-serif text-8xl lg:text-[140px] leading-none text-border">01</p>
                  <p className="uppercase tracking-[0.35em] text-xs text-muted-foreground mt-6">Collection</p>
                  <h2 className="font-serif text-4xl lg:text-5xl mt-4">Portraits</h2>
                </div>
                <div className="lg:col-span-8 lg:col-start-5 overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1600"
                    alt="Portraits Collection"
                    className="w-full aspect-[16/10] object-cover transition duration-1000 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="mt-8 lg:mt-10 max-w-xl lg:ml-auto">
                <p className="text-muted-foreground leading-relaxed">
                  Portrait work exploring expression, memory, identity, and personal narrative. Available as original pieces.
                </p>
              </div>
            </FadeIn>
          </article>

          {/* 02 LANDSCAPES */}
          <article className="mb-32 lg:mb-48">
            <FadeIn delay={0.1}>
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center flex-col-reverse lg:flex-row">
                <div className="lg:col-span-7 overflow-hidden group order-2 lg:order-1">
                  <img
                    src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1600"
                    alt="Landscapes Collection"
                    className="w-full aspect-[4/3] object-cover transition duration-1000 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
                  <p className="font-serif text-8xl lg:text-[140px] leading-none text-border">02</p>
                  <p className="uppercase tracking-[0.35em] text-xs text-muted-foreground mt-6 lg:hidden">Collection</p>
                  <h2 className="font-serif text-4xl lg:text-5xl mt-4 lg:mt-6">Landscapes</h2>
                  <p className="text-muted-foreground mt-6 lg:mt-8 leading-relaxed">
                    Places remembered through atmosphere, colour, texture, and experience. Original paintings currently available.
                  </p>
                </div>
              </div>
            </FadeIn>
          </article>

          {/* 03 STUDIES */}
          <article className="mb-20">
            <FadeIn delay={0.1}>
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <p className="font-serif text-8xl lg:text-[140px] leading-none text-border">03</p>
                  <p className="uppercase tracking-[0.35em] text-xs text-muted-foreground mt-6 lg:hidden">Collection</p>
                  <h2 className="font-serif text-4xl lg:text-5xl mt-4 lg:mt-6">Studies</h2>
                  <p className="text-muted-foreground mt-6 lg:mt-8 leading-relaxed">
                    Experiments, sketches, observations, and unfinished ideas. A glimpse into the studio process. Coming soon.
                  </p>
                </div>
                <div className="lg:col-span-7 lg:col-start-6 overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=1600"
                    alt="Studies Collection"
                    className="w-full aspect-[3/2] object-cover transition duration-1000 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </FadeIn>
          </article>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-10 py-32 lg:py-48 text-center border-t border-border">
          <FadeIn>
            <h2 className="font-serif text-5xl lg:text-8xl">Own a story.</h2>
            <a
              href="/#contact"
              className="inline-flex mt-10 lg:mt-12 bg-foreground text-background px-8 lg:px-10 py-4 lg:py-5 hover:-translate-y-1 transition duration-300"
              data-testid="link-commission-cta"
            >
              Commission Artwork
            </a>
          </FadeIn>
        </section>
      </main>

      <Footer />
    </div>
  );
}
