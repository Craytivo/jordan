import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { artworks } from "@/data/artworks";
import { Link } from "wouter";
import { useFavorites } from "@/hooks/useFavorites";

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

export default function Gallery() {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <Header />

      <main>
        {/* INTRO */}
        <section className="section-luxury-sm">
          <div className="container-luxury">
            <FadeIn>
              <div className="max-w-4xl">
                <p className="text-caption text-muted-foreground mb-4 tracking-widest uppercase">Collection</p>
                <h1 className="text-display mb-6 leading-tight">
                  Available works
                </h1>
                <p className="text-body-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Original paintings and limited editions exploring memory, movement, and emotional texture.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* MASONRY GALLERY */}
        <section className="section-luxury">
          <div className="container-luxury">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {artworks.map((artwork: any, index: number) => (
                <FadeIn key={artwork.id} delay={index * 0.05}>
                  <div className="group">
                    <div className="relative overflow-hidden mb-5">
                      <Link href={`/artwork/${artwork.id}`}>
                        <img
                          src={artwork.imageUrl}
                          alt={artwork.title}
                          className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(artwork.id);
                        }}
                        className="absolute top-4 right-4 w-10 h-10 bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition opacity-0 group-hover:opacity-100 duration-300"
                        aria-label="Toggle favorite"
                      >
                        <svg
                          className={`w-5 h-5 transition ${isFavorite(artwork.id) ? 'fill-foreground' : 'fill-none'}`}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </button>
                    </div>
                    <Link href={`/artwork/${artwork.id}`} className="block group">
                      <h3 className="text-heading mb-2 group-hover:text-muted-foreground transition">{artwork.title}</h3>
                      {artwork.availability === 'available' && (
                        <p className="text-body">${artwork.price.toLocaleString()}</p>
                      )}
                      {artwork.availability === 'sold' && (
                        <p className="text-caption text-muted-foreground">Sold</p>
                      )}
                      {artwork.availability === 'reserved' && (
                        <p className="text-caption text-muted-foreground">Reserved</p>
                      )}
                    </Link>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-luxury-sm border-t border-border">
          <div className="container-luxury">
            <FadeIn>
              <div className="max-w-3xl text-center">
                <h2 className="text-heading-lg mb-6">Interested in a custom commission?</h2>
                <p className="text-body text-muted-foreground mb-8 max-w-xl mx-auto">
                  We accept select commission projects for collectors seeking original works tailored to their space.
                </p>
                <Link
                  href="/contact"
                  className="inline-block border border-foreground px-12 py-4 text-caption hover:bg-foreground hover:text-background transition"
                >
                  Inquire About Commissions
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
