import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src="/logo.png" alt="Логотип" className="h-10 w-10 object-contain" />
          <span className={`font-serif font-bold tracking-wide transition-colors ${isScrolled ? 'text-primary' : 'text-primary'}`}>
            Черешневі Вакації
          </span>
        </div>

        <nav className="hidden md:flex flex-1 justify-end items-center gap-8 text-sm font-medium text-foreground/80">
          <button onClick={() => scrollTo("timeline")} className="hover:text-secondary transition-colors">
            Розклад
          </button>
          <button onClick={() => scrollTo("workshops")} className="hover:text-secondary transition-colors">
            Майстерки
          </button>
          <button onClick={() => scrollTo("map")} className="hover:text-secondary transition-colors">
            Карта
          </button>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4 text-center font-medium">
              <button
                onClick={() => scrollTo("timeline")}
                className="p-2 hover:bg-muted rounded-md text-foreground"
              >
                Розклад
              </button>
              <button
                onClick={() => scrollTo("workshops")}
                className="p-2 hover:bg-muted rounded-md text-foreground"
              >
                Майстерки
              </button>
              <button
                onClick={() => scrollTo("map")}
                className="p-2 hover:bg-muted rounded-md text-foreground"
              >
                Карта
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
