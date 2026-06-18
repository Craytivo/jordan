import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border pt-20 pb-12 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="group flex items-center gap-3 flex-shrink-0 inline-flex">
              <span className="relative w-6 h-6 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-background transition duration-500 group-hover:scale-150"></span>
              </span>
              <span className="font-serif text-xl tracking-tight">The Jordan Creative</span>
            </Link>
            <p className="mt-6 text-muted-foreground max-w-xs leading-relaxed text-sm">
              Original artwork created to hold stories, memory, and place. Based in San Francisco.
            </p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Navigation</p>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-sm hover:text-muted-foreground transition inline-block hover:translate-x-1">Home</Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm hover:text-muted-foreground transition inline-block hover:translate-x-1">Gallery</Link>
              </li>
              <li>
                <a href="/#commissions" className="text-sm hover:text-muted-foreground transition inline-block hover:translate-x-1">Commissions</a>
              </li>
              <li>
                <a href="/#about" className="text-sm hover:text-muted-foreground transition inline-block hover:translate-x-1">Story</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Social</p>
            <ul className="space-y-4">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm hover:text-muted-foreground transition inline-block hover:translate-x-1">Instagram</a>
              </li>
              <li>
                <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="text-sm hover:text-muted-foreground transition inline-block hover:translate-x-1">Pinterest</a>
              </li>
              <li>
                <a href="mailto:hello@thejordancreative.com" className="text-sm hover:text-muted-foreground transition inline-block hover:translate-x-1">Email</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 The Jordan Creative</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
