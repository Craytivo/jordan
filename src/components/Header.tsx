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
      <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-10 pt-4 sm:pt-6">
        <nav
          className={`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 transition-all duration-500 rounded-lg ${
            scrolled ? "bg-background/95 shadow-md" : "bg-background/75"
          } backdrop-blur-xl`}
        >
          <Link href="/" className="group flex items-center gap-3 flex-shrink-0" onClick={closeMenu}>
            <span className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-foreground transition duration-500 group-hover:scale-150"></span>
            </span>
            <div>
              <p className="font-serif text-lg sm:text-xl lg:text-2xl tracking-tight leading-none whitespace-nowrap">
                The Jordan Creative
              </p>
              <p className="hidden lg:block text-[10px] uppercase tracking-[0.35em] text-muted-foreground mt-2">
                Gallery Archive
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[1px] after:bg-foreground hover:after:w-full after:transition-all"
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[1px] after:bg-foreground hover:after:w-full after:transition-all"
            >
              Gallery
            </Link>
            <a
              href="/#commissions"
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[1px] after:bg-foreground hover:after:w-full after:transition-all"
            >
              Commissions
            </a>
            <a
              href="/#about"
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[1px] after:bg-foreground hover:after:w-full after:transition-all"
            >
              Story
            </a>
            <a
              href="/#contact"
              className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-0 after:h-[1px] after:bg-foreground hover:after:w-full after:transition-all"
            >
              Contact
            </a>
          </div>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center flex-shrink-0"
            aria-label="Open Menu"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="button-open-menu"
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
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-background md:hidden"
          >
            <div className="min-h-screen flex flex-col px-8 pt-28 pb-10">
              <button
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center"
                aria-label="Close Menu"
                onClick={closeMenu}
                data-testid="button-close-menu"
              >
                <span className="absolute w-7 h-px bg-foreground rotate-45"></span>
                <span className="absolute w-7 h-px bg-foreground -rotate-45"></span>
              </button>

              <nav className="flex flex-col gap-7">
                <Link
                  href="/"
                  className="font-serif text-5xl tracking-tight hover:text-muted-foreground transition"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  href="/gallery"
                  className="font-serif text-5xl tracking-tight hover:text-muted-foreground transition"
                  onClick={closeMenu}
                >
                  Gallery
                </Link>
                <a
                  href="/#commissions"
                  className="font-serif text-5xl tracking-tight hover:text-muted-foreground transition"
                  onClick={closeMenu}
                >
                  Commissions
                </a>
                <a
                  href="/#about"
                  className="font-serif text-5xl tracking-tight hover:text-muted-foreground transition"
                  onClick={closeMenu}
                >
                  Story
                </a>
                <a
                  href="/#contact"
                  className="font-serif text-5xl tracking-tight hover:text-muted-foreground transition"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </nav>

              <div className="mt-auto border-t border-border pt-8">
                <p className="uppercase tracking-[0.35em] text-[10px] text-muted-foreground">
                  The Jordan Creative
                </p>
                <p className="mt-3 font-serif text-2xl">Gallery Archive</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
