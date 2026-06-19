import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { journalArticles, getFeaturedArticles } from "@/data/journal";

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

export default function Journal() {
  const [category, setCategory] = useState<'all' | 'exhibitions' | 'studio' | 'process' | 'collectors'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const featuredArticle = getFeaturedArticles()[0];
  
  const filteredArticles = journalArticles.filter(article => {
    const matchesCategory = category === 'all' || article.category === category;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayArticles = featuredArticle 
    ? [featuredArticle, ...filteredArticles.filter(a => a.id !== featuredArticle.id)]
    : filteredArticles;

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <Header />

      <main>
        {/* INTRO */}
        <section className="section-luxury-sm">
          <div className="container-luxury">
            <FadeIn>
              <div className="max-w-4xl">
                <p className="text-caption text-muted-foreground mb-8">Journal</p>
                <h1 className="text-display">
                  Studio notes & exhibition updates
                </h1>
                <p className="text-body-lg text-muted-foreground mt-8 max-w-2xl">
                  Insights into the creative process, exhibition announcements, and stories from the studio.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FILTERS AND SEARCH */}
        <section className="border-b border-border">
          <div className="container-luxury">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-8">
              <div className="flex gap-8 overflow-x-auto">
                {[
                  { key: 'all', label: 'All' },
                  { key: 'exhibitions', label: 'Exhibitions' },
                  { key: 'studio', label: 'Studio' },
                  { key: 'process', label: 'Process' },
                  { key: 'collectors', label: 'Collectors' }
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => setCategory(item.key as any)}
                    className={`text-caption whitespace-nowrap pb-2 border-b-2 transition ${
                      category === item.key 
                        ? 'border-foreground text-foreground' 
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-b border-border py-2 px-4 outline-none focus:border-foreground transition placeholder:text-muted-foreground/50 text-body w-full md:w-64"
              />
            </div>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        {featuredArticle && category === 'all' && (
          <section className="section-luxury">
            <div className="container-luxury">
              <FadeIn>
                <Link href={`/journal/${featuredArticle.slug}`} className="block group">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="overflow-hidden">
                      <img
                        src={featuredArticle.imageUrl}
                        alt={featuredArticle.title}
                        className="w-full aspect-[4/3] object-cover hover-luxury"
                      />
                    </div>
                    <div>
                      <p className="text-caption text-muted-foreground mb-6">
                        Featured · {new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </p>
                      <h2 className="text-heading-lg mb-6 group-hover:italic transition">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>
                      <span className="text-caption inline-block border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition">
                        Read Article
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </section>
        )}

        {/* ARTICLE GRID */}
        <section className="section-luxury">
          <div className="container-luxury">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {displayArticles.map((article, index) => (
                <FadeIn key={article.id} delay={index * 0.1}>
                  <Link href={`/journal/${article.slug}`} className="block group">
                    <div className="overflow-hidden mb-6">
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full aspect-[4/3] object-cover hover-luxury"
                      />
                    </div>
                    <p className="text-caption text-muted-foreground mb-4">
                      {article.category} · {new Date(article.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                    <h3 className="text-heading mb-4 group-hover:italic transition">
                      {article.title}
                    </h3>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
