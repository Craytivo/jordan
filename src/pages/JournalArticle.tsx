import { useRef } from "react";
import { useParams, Link } from "wouter";
import { motion, useInView } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getArticleBySlug, journalArticles } from "@/data/journal";

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

export default function JournalArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || '');
  
  const relatedArticles = journalArticles
    .filter(a => a.id !== article?.id && a.category === article?.category)
    .slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-24">
        <Header />
        <div className="container-luxury section-luxury">
          <h1 className="text-display">Article not found</h1>
          <Link href="/journal" className="inline-block mt-8 text-caption hover:text-foreground transition">
            Return to Journal
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-24">
      <Header />

      <main>
        {/* FEATURED IMAGE */}
        <section className="section-luxury-sm">
          <div className="container-luxury">
            <FadeIn>
              <div className="overflow-hidden mb-12">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ARTICLE CONTENT */}
        <section className="section-luxury-sm">
          <div className="container-luxury">
            <FadeIn>
              <div className="max-w-3xl">
                <Link href="/journal" className="inline-block text-caption text-muted-foreground hover:text-foreground transition mb-8">
                  ← Back to Journal
                </Link>
                
                <p className="text-caption text-muted-foreground mb-6">
                  {article.category} · {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                
                <h1 className="text-display mb-12">
                  {article.title}
                </h1>
                
                <div className="prose prose-lg max-w-none">
                  {article.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-body-lg leading-relaxed mb-6 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* RELATED ARTICLES */}
        {relatedArticles.length > 0 && (
          <section className="section-luxury border-t border-border">
            <div className="container-luxury">
              <FadeIn>
                <div className="mb-16">
                  <p className="text-caption text-muted-foreground mb-6">Related</p>
                  <h2 className="text-heading-lg">More from {article.category}</h2>
                </div>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {relatedArticles.map((related, index) => (
                  <FadeIn key={related.id} delay={index * 0.1}>
                    <Link href={`/journal/${related.slug}`} className="block group">
                      <div className="overflow-hidden mb-6">
                        <img
                          src={related.imageUrl}
                          alt={related.title}
                          className="w-full aspect-[4/3] object-cover hover-luxury"
                        />
                      </div>
                      <p className="text-caption text-muted-foreground mb-4">
                        {new Date(related.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                      </p>
                      <h3 className="text-heading mb-4 group-hover:italic transition">
                        {related.title}
                      </h3>
                      <p className="text-body text-muted-foreground leading-relaxed">
                        {related.excerpt}
                      </p>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
