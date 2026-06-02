import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { WorkshopList } from "@/components/WorkshopList";
import { SchoolMap } from "@/components/SchoolMap";
import { motion } from "framer-motion";

const footerCherries = [
  { src: "/vyshenkы2.png", h: 72,  r:  12, ay: [0,-10,0], dur: 5.8, delay: 0   },
  { src: "/vyshenkы1.png", h: 82,  r:  -8, ay: [0, 12,0], dur: 6.5, delay: 0.8 },
  { src: "/vyshenkы2.png", h: 64,  r:  20, ay: [0, -8,0], dur: 7.2, delay: 1.5 },
  { src: "/vyshenkы1.png", h: 78,  r: -18, ay: [0, 10,0], dur: 5.5, delay: 0.4 },
  { src: "/vyshenkы2.png", h: 70,  r:   5, ay: [0,-12,0], dur: 6.8, delay: 2.0 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary/20 selection:text-primary">
      <Header />
      <main>
        <Hero />
        <Timeline />
        <WorkshopList />
        <div className="border-t border-[#f0d4d4] mx-4 md:mx-8" />
        <SchoolMap />
      </main>
      <footer className="py-12 text-center border-t border-border mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5 -z-10" />
        <div className="flex justify-center gap-3 flex-wrap mb-6 pointer-events-none select-none">
          {footerCherries.map((c, i) => (
            <motion.div
              key={i}
              animate={{ y: c.ay }}
              transition={{ repeat: Infinity, duration: c.dur, ease: "easeInOut", delay: c.delay }}
              style={{ height: c.h, transform: `rotate(${c.r}deg)` }}
            >
              <img src={c.src} alt="" className="h-full w-auto opacity-75" />
            </motion.div>
          ))}
        </div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          ЛІКО-ШКОЛА · ЧЕРЕШНЕВІ ВАКАЦІЇ 2026
        </p>
      </footer>
    </div>
  );
}
