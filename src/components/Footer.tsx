import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border pt-24 pb-16 bg-foreground text-background">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <Link href="/" className="group inline-block">
              <p className="font-serif text-3xl tracking-tight">
                THE JORDAN COLLECTIVE
              </p>
            </Link>
            <p className="mt-8 text-background/70 max-w-sm leading-relaxed text-body">
              Contemporary abstract works exploring memory, movement, and emotional texture through layered compositions.
            </p>
          </div>
          <div className="flex flex-col justify-end">
            <a href="mailto:hello@thejordancreative.com" className="text-body hover:text-background/70 transition">
              hello@thejordancreative.com
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-background/20 text-caption text-background/60">
          <p>© 2026 THE JORDAN COLLECTIVE</p>
        </div>
      </div>
    </footer>
  );
}
