import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LazyImage from "@/components/LazyImage";
import { getFeaturedArtworks } from "@/data/artworks";
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

function StaggeredText({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');
  
  return (
    <div ref={ref} className="overflow-hidden">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const featuredArtworks = getFeaturedArtworks();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

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
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        {/* CINEMATIC HERO */}
        <section className="h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div style={{ y }}>
              <LazyImage
                src="/hero-bg.jpg"
                alt="Featured artwork"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="container-luxury relative z-10">
            <FadeIn>
              <div className="max-w-4xl">
                <p className="text-caption text-white/70 mb-4 tracking-widest uppercase">
                  Contemporary Abstract Works
                </p>
                <StaggeredText>
                  <h1 className="text-display-xl text-white mb-6 leading-tight">
                    THE JORDAN COLLECTIVE
                  </h1>
                </StaggeredText>
                <p className="text-body-lg text-white/80 max-w-2xl mb-10 leading-relaxed">
                  Original paintings exploring memory, movement, and emotional texture through layered compositions.
                </p>
                <div className="flex flex-wrap gap-6">
                  <Link
                    href="/collection"
                    className="border border-white text-white px-10 py-4 text-caption hover:bg-white hover:text-foreground transition"
                  >
                    View Collection
                  </Link>
                  <Link
                    href="/about"
                    className="text-white/80 text-caption hover:text-white transition flex items-center"
                  >
                    About the Artists
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FEATURED WORKS */}
        <section className="section-luxury">
          <div className="container-luxury">
            <FadeIn>
              <div className="mb-16">
                <p className="text-caption text-muted-foreground mb-6">Featured Works</p>
                <h2 className="text-heading-lg max-w-3xl">
                  Available original paintings and limited editions
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArtworks.slice(0, 6).map((artwork, index) => (
                <FadeIn key={artwork.id} delay={index * 0.1}>
                  <Link href={`/artwork/${artwork.id}`} className="block group">
                    <div className="overflow-hidden mb-6">
                      <LazyImage
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        className="w-full aspect-[4/5] object-cover hover-luxury"
                      />
                    </div>
                    <h3 className="text-heading mb-2">{artwork.title}</h3>
                    <p className="text-body text-muted-foreground mb-2">{artwork.medium}</p>
                    <p className="text-caption text-muted-foreground">{artwork.dimensions}</p>
                    {artwork.availability === 'available' && (
                      <p className="text-body mt-3">${artwork.price.toLocaleString()}</p>
                    )}
                    {artwork.availability === 'sold' && (
                      <p className="text-caption mt-3 text-muted-foreground">Sold</p>
                    )}
                  </Link>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.4}>
              <div className="mt-20 text-center">
                <Link
                  href="/collection"
                  className="inline-block border border-foreground px-10 py-5 text-caption hover:bg-foreground hover:text-background transition"
                >
                  View All Works
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ARTIST STATEMENT */}
        <section className="section-luxury">
          <div className="container-luxury">
            <FadeIn>
              <div className="max-w-4xl">
                <p className="text-caption text-muted-foreground mb-8">Artist Statement</p>
                <blockquote className="text-heading-lg leading-tight mb-12">
                  "Contemporary abstract work exploring movement, memory, and emotional texture through layered compositions."
                </blockquote>
                <Link
                  href="/about"
                  className="inline-block text-caption border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition"
                >
                  Learn More
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
