import { useState, useRef } from "react";
import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ViewOnWall from "@/components/ViewOnWall";
import { getArtworkById, artworks } from "@/data/artworks";

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

export default function ArtworkDetail() {
  const { id } = useParams<{ id: string }>();
  const artwork = getArtworkById(id || '');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [viewOnWallOpen, setViewOnWallOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!artwork) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-24">
        <Header />
        <div className="container-luxury section-luxury">
          <h1 className="text-display">Artwork not found</h1>
          <Link href="/collection" className="inline-block mt-8 text-caption hover:text-foreground transition">
            Return to Collection
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedWorks = artworks.filter(a => a.id !== artwork.id).slice(0, 4);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setInquiryOpen(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <Header />

      <main>
        {/* ARTWORK DETAIL */}
        <section className="section-luxury-sm">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              {/* ARTWORK IMAGE - 70% */}
              <div className="lg:col-span-8 lg:col-start-1">
                <FadeIn>
                  <div className="overflow-hidden">
                    <img
                      src={artwork.imageUrl}
                      alt={artwork.title}
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                </FadeIn>
              </div>

              {/* ARTWORK INFO - 30% */}
              <div className="lg:col-span-4 lg:col-start-9">
                <FadeIn delay={0.2}>
                  <div className="lg:sticky lg:top-32">
                    <p className="text-caption text-muted-foreground mb-4">
                      {artwork.category === 'original' ? 'Original Work' : artwork.category === 'limited-edition' ? 'Limited Edition' : 'Study'}
                    </p>
                    <h1 className="text-heading-lg mb-6">{artwork.title}</h1>
                    
                    {artwork.availability === 'available' && (
                      <p className="text-display mb-8">${artwork.price.toLocaleString()}</p>
                    )}
                    {artwork.availability === 'sold' && (
                      <p className="text-heading mb-8 text-muted-foreground">Sold</p>
                    )}
                    {artwork.availability === 'reserved' && (
                      <p className="text-heading mb-8 text-muted-foreground">Reserved</p>
                    )}

                    <div className="space-y-4 mb-8">
                      <div className="flex justify-between border-b border-border pb-4">
                        <span className="text-caption text-muted-foreground">Medium</span>
                        <span className="text-body">{artwork.medium}</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-4">
                        <span className="text-caption text-muted-foreground">Dimensions</span>
                        <span className="text-body">{artwork.dimensions}</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-4">
                        <span className="text-caption text-muted-foreground">Year</span>
                        <span className="text-body">{artwork.year}</span>
                      </div>
                      <div className="flex justify-between border-b border-border pb-4">
                        <span className="text-caption text-muted-foreground">Availability</span>
                        <span className="text-body capitalize">{artwork.availability}</span>
                      </div>
                    </div>

                    <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                      {artwork.description}
                    </p>

                    {artwork.availability === 'available' && (
                      <button
                        onClick={() => setInquiryOpen(true)}
                        className="w-full bg-foreground text-background px-8 py-5 text-caption hover:bg-foreground/90 transition"
                      >
                        Acquire Artwork
                      </button>
                    )}

                    {artwork.availability === 'sold' && (
                      <button
                        onClick={() => setInquiryOpen(true)}
                        className="w-full border border-foreground px-8 py-5 text-caption hover:bg-foreground hover:text-background transition"
                      >
                        Inquire About Similar Works
                      </button>
                    )}

                    <button
                      onClick={() => setViewOnWallOpen(true)}
                      className="w-full border border-border px-8 py-5 text-caption hover:border-foreground transition mt-4"
                    >
                      View On Wall
                    </button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* ADDITIONAL INFORMATION */}
        <section className="section-luxury-sm border-t border-border">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-16">
              <FadeIn>
                <div>
                  <h3 className="text-heading mb-6">Shipping Information</h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    Original works are shipped professionally crated with insurance. Limited editions are shipped flat in archival packaging. Worldwide shipping available. Shipping costs are calculated based on destination and artwork size.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div>
                  <h3 className="text-heading mb-6">Collector Care</h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    Each original work includes a certificate of authenticity. Recommendations for optimal display and care are provided with every acquisition. The artist is available for consultation on placement and installation.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* RELATED WORKS */}
        {relatedWorks.length > 0 && (
          <section className="section-luxury border-t border-border">
            <div className="container-luxury">
              <FadeIn>
                <div className="mb-16">
                  <p className="text-caption text-muted-foreground mb-6">Related Works</p>
                  <h2 className="text-heading-lg">You may also like</h2>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedWorks.map((related, index) => (
                  <FadeIn key={related.id} delay={index * 0.1}>
                    <Link href={`/artwork/${related.id}`} className="block group">
                      <div className="overflow-hidden mb-6">
                        <img
                          src={related.imageUrl}
                          alt={related.title}
                          className="w-full aspect-[4/5] object-cover hover-luxury"
                        />
                      </div>
                      <h3 className="text-heading mb-2">{related.title}</h3>
                      <p className="text-body text-muted-foreground mb-2">{related.medium}</p>
                      <p className="text-caption text-muted-foreground">{related.dimensions}</p>
                      {related.availability === 'available' && (
                        <p className="text-body mt-3">${related.price.toLocaleString()}</p>
                      )}
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* VIEW ON WALL */}
      {viewOnWallOpen && (
        <ViewOnWall
          artworkUrl={artwork.imageUrl}
          onClose={() => setViewOnWallOpen(false)}
        />
      )}

      {/* INQUIRY MODAL */}
      {inquiryOpen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md">
          <div className="min-h-screen flex items-center justify-center p-8">
            <FadeIn>
              <div className="max-w-2xl w-full">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <p className="text-caption text-muted-foreground mb-4">Inquiry</p>
                    <h2 className="text-heading-lg">
                      {artwork.availability === 'available' ? 'Acquire Artwork' : 'Inquire About Similar Works'}
                    </h2>
                  </div>
                  <button
                    onClick={() => setInquiryOpen(false)}
                    className="text-foreground hover:text-muted-foreground transition"
                  >
                    <span className="text-3xl">×</span>
                  </button>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <p className="text-heading mb-4">Thank you for your inquiry</p>
                    <p className="text-body text-muted-foreground">
                      We will be in touch within 24-48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-8">
                    <div>
                      <label className="block text-caption text-muted-foreground mb-4">
                        Artwork
                      </label>
                      <p className="text-body">{artwork.title}</p>
                      <p className="text-body text-muted-foreground">${artwork.price.toLocaleString()}</p>
                    </div>

                    <div>
                      <label className="block text-caption text-muted-foreground mb-4">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-4 px-4 outline-none focus:border-foreground transition placeholder:text-muted-foreground/50 text-body"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-caption text-muted-foreground mb-4">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-4 px-4 outline-none focus:border-foreground transition placeholder:text-muted-foreground/50 text-body"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-caption text-muted-foreground mb-4">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-border py-4 px-4 outline-none focus:border-foreground transition placeholder:text-muted-foreground/50 text-body"
                        placeholder="(optional)"
                      />
                    </div>

                    <div>
                      <label className="block text-caption text-muted-foreground mb-4">
                        Message *
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full bg-transparent border-b border-border py-4 px-4 outline-none focus:border-foreground transition placeholder:text-muted-foreground/50 text-body resize-none"
                        placeholder="Tell us about your interest in this work..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-foreground text-background px-8 py-5 text-caption hover:bg-foreground/90 transition"
                    >
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
