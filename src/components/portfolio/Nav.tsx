import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "./data";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className={`flex items-center justify-between rounded-xl border border-border px-4 py-2 transition-all ${scrolled ? "glass shadow-elegant" : "bg-transparent"}`}>
          <a href="#home" className="flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-brand text-brand-foreground text-xs font-bold">FE</span>
            <span className="hidden sm:inline">Filmon Endris</span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-surface hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-md bg-brand px-4 py-1.5 text-sm font-medium text-brand-foreground transition hover:opacity-90 sm:inline-flex"
            >
              Get in touch
            </a>
            <ThemeToggle />
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="mt-2 rounded-2xl glass p-3 lg:hidden">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-surface hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
