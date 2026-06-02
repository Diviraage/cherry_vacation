import { motion } from "framer-motion";

const cherries = [
  { src: "/vyshenkы2.png", top:  "8%", left: "4%",  w: 120, r:  12, ay: [0, 12,0], dur: 6.8, delay: 1.3 },
  { src: "/vyshenkы1.png", top: "36%", left: "0%",  w: 160, r: -22, ay: [0,-14,0], dur: 5.2, delay: 0   },
  { src: "/vyshenkы1.png", top: "62%", left: "1%",  w: 95,  r: -38, ay: [0,-10,0], dur: 7.5, delay: 0.7 },
  { src: "/vyshenkы2.png", top:  "5%", right: "0%", w: 150, r:  18, ay: [0, 13,0], dur: 5.1, delay: 0.4 },
  { src: "/vyshenkы1.png", top: "32%", right: "5%", w: 125, r: -10, ay: [0,-14,0], dur: 6.3, delay: 1.9 },
  { src: "/vyshenkы2.png", top: "58%", right: "1%", w: 108, r:  32, ay: [0, 10,0], dur: 7.8, delay: 0.3 },
];

export function Hero() {
  return (
    <section className="relative z-0 pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col items-center text-center px-4">
      {cherries.map((c, i) => (
        <motion.div
          key={i}
          animate={{ y: c.ay }}
          transition={{ repeat: Infinity, duration: c.dur, ease: "easeInOut", delay: c.delay }}
          className="absolute pointer-events-none select-none"
          style={{
            top: c.top,
            left: "left" in c ? c.left : undefined,
            right: "right" in c ? c.right : undefined,
            width: c.w,
            transform: `rotate(${c.r}deg)`,
          }}
        >
          <img src={c.src} alt="" className="w-full h-auto" />
        </motion.div>
      ))}

      {/* Main title image - Рутенія with LIKO badge inside */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 mb-6 w-full max-w-4xl mx-auto"
      >
        <img
          src="/rutenia.png"
          alt="Черешневі Вакації"
          className="w-full h-auto object-contain"
          style={{
            filter: "contrast(1.08) saturate(1.1) drop-shadow(0 2px 8px rgba(80,20,20,0.08))",
            imageRendering: "high-quality" as React.CSSProperties["imageRendering"],
            transform: "translateZ(0)",
          }}
        />
        {/* LIKO badge placed in empty interior of the arch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-secondary/20 rounded-full px-4 py-1.5 shadow-sm"
          style={{ top: "64%" }}
        >
          <img src="/liko.png" alt="LIKO" className="h-7 object-contain" />
          <span className="text-sm font-medium text-primary tracking-wider">2026</span>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-muted-foreground uppercase tracking-[0.2em] text-sm md:text-base font-medium max-w-xl relative z-10"
      >
        Програма третьої традиційної зустрічі педагогів всієї країни
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-16 h-[1px] bg-secondary/30 mt-12 relative z-10"
      />
    </section>
  );
}
