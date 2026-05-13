import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import logoSvg from "@/assets/logo.svg";

const links = [
  { href: "#advantages", label: "Переваги" },
  { href: "#process", label: "Процес" },
  { href: "#gallery", label: "Галерея" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60 py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center">
          <img src={logoSvg} alt="VITOCENTER" className="h-9 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/85 hover:text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all hover:scale-105 ${
            scrolled
              ? "bg-foreground text-background"
              : "bg-white text-ink shadow-md"
          }`}
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">Зв’язатись</span>
        </a>
      </div>
    </header>
  );
}
