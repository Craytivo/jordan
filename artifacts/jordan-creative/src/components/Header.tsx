import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-background/90 backdrop-blur-md">
        <nav
          className="container-luxury flex items-center justify-between py-6 transition-all duration-700"
        >
          <Link href="/" className="group flex-shrink-0" onClick={closeMenu}>
            <p className="font-serif text-2xl tracking-tight">
              THE JORDAN COLLECTIVE
            </p>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/collection"
              className="text-caption hover:text-foreground transition"
            >
              Collection
            </Link>
            <Link
              href="/about"
              className="text-caption hover:text-foreground transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-caption hover:text-foreground transition"
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center flex-shrink-0"
            aria-label="Open Menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-px bg-foreground"></span>
              <span className="block w-6 h-px bg-foreground"></span>
            </div>
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-background md:hidden"
          >
            <div className="min-h-screen flex flex-col px-8 pt-32 pb-10">
              <button
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center"
                aria-label="Close Menu"
                onClick={closeMenu}
              >
                <span className="absolute w-7 h-px bg-foreground rotate-45"></span>
                <span className="absolute w-7 h-px bg-foreground -rotate-45"></span>
              </button>

              <nav className="flex flex-col gap-8">
                <Link
                  href="/collection"
                  className="font-serif text-5xl tracking-tight hover:text-muted-foreground transition"
                  onClick={closeMenu}
                >
                  Collection
                </Link>
                <Link
                  href="/about"
                  className="font-serif text-5xl tracking-tight hover:text-muted-foreground transition"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="font-serif text-5xl tracking-tight hover:text-muted-foreground transition"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </nav>

              <div className="mt-auto border-t border-border pt-8">
                <p className="text-caption text-muted-foreground">
                  THE JORDAN COLLECTIVE
                </p>
                <p className="mt-3 font-serif text-2xl">Contemporary Abstract Works</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
