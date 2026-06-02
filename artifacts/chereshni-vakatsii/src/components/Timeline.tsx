import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { timeline } from "../data";
import { Clock, MapPin } from "lucide-react";

const timelineCherries = [
  { src: "/vyshenkы1.png", top: "6%",   right: "-2%", left: undefined, w: 95,  r:  15, ay: [0,-12,0], dur: 5.5, delay: 0   },
  { src: "/vyshenkы2.png", top: "17%",  right:  "0%", left: undefined, w: 78,  r: -20, ay: [0, 10,0], dur: 6.8, delay: 1.2 },
  { src: "/vyshenkы1.png", top: "29%",  right: "-1%", left: undefined, w: 88,  r:  30, ay: [0,-14,0], dur: 7.2, delay: 0.6 },
  { src: "/vyshenkы2.png", top: "42%",  right:  "1%", left: undefined, w: 72,  r:  -8, ay: [0,  8,0], dur: 5.8, delay: 2.0 },
  { src: "/vyshenkы1.png", top: "55%",  right: "-2%", left: undefined, w: 82,  r:  22, ay: [0,-10,0], dur: 6.5, delay: 0.4 },
  { src: "/vyshenkы2.png", top: "67%",  right:  "0%", left: undefined, w: 66,  r: -15, ay: [0, 12,0], dur: 7.8, delay: 1.8 },
  { src: "/vyshenkы1.png", top: "79%",  right: "-1%", left: undefined, w: 74,  r:   8, ay: [0, -8,0], dur: 5.2, delay: 1.0 },
  { src: "/vyshenkы2.png", top: "10%",  right: undefined, left: "-2%", w: 68,  r: -12, ay: [0, 10,0], dur: 6.2, delay: 0.8 },
  { src: "/vyshenkы1.png", top: "23%",  right: undefined, left:  "0%", w: 82,  r:  22, ay: [0,-12,0], dur: 5.8, delay: 1.5 },
  { src: "/vyshenkы2.png", top: "37%",  right: undefined, left: "-1%", w: 66,  r: -28, ay: [0,  8,0], dur: 7.0, delay: 0.3 },
  { src: "/vyshenkы1.png", top: "50%",  right: undefined, left:  "0%", w: 76,  r:  18, ay: [0,-10,0], dur: 6.5, delay: 2.2 },
  { src: "/vyshenkы2.png", top: "63%",  right: undefined, left: "-2%", w: 62,  r:  -5, ay: [0, 14,0], dur: 5.5, delay: 1.0 },
  { src: "/vyshenkы1.png", top: "75%",  right: undefined, left:  "1%", w: 70,  r:  28, ay: [0,-12,0], dur: 7.3, delay: 0.5 },
];

export function Timeline() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [currentTimeProgress, setCurrentTimeProgress] = useState<number | null>(null);

  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date();
      const startTime = new Date(now);
      startTime.setHours(9, 30, 0, 0);
      const endTime = new Date(now);
      endTime.setHours(17, 30, 0, 0);
      if (now >= startTime && now <= endTime) {
        const totalDuration = endTime.getTime() - startTime.getTime();
        const currentDuration = now.getTime() - startTime.getTime();
        setCurrentTimeProgress((currentDuration / totalDuration) * 100);
      } else if (now > endTime) {
        setCurrentTimeProgress(100);
      } else {
        setCurrentTimeProgress(0);
      }
    };
    calculateProgress();
    const interval = setInterval(calculateProgress, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="timeline" className="py-20 px-4 max-w-3xl mx-auto relative">
      {timelineCherries.map((c, i) => (
        <motion.div
          key={i}
          animate={{ y: c.ay }}
          transition={{ repeat: Infinity, duration: c.dur, ease: "easeInOut", delay: c.delay }}
          className="absolute pointer-events-none select-none"
          style={{
            top: c.top,
            right: c.right ?? undefined,
            left: c.left ?? undefined,
            width: c.w,
            transform: `rotate(${c.r}deg)`,
          }}
        >
          <img src={c.src} alt="" className="w-full h-auto" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex items-center gap-4 relative z-10"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">Розклад дня</h2>
        <div className="h-[1px] flex-1 bg-border/60" />
      </motion.div>

      <div className="relative border-l-2 border-secondary/20 ml-4 md:ml-8 space-y-8 pb-8 z-10">
        {currentTimeProgress !== null && (
          <div
            className="absolute top-0 -left-[2px] w-0.5 bg-primary origin-top transition-all duration-1000 ease-in-out z-0"
            style={{ height: `${currentTimeProgress}%` }}
          />
        )}

        {timeline.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`relative pl-8 md:pl-12 group cursor-pointer z-10`}
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
          >
            <div className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full transition-colors duration-300 ${
              item.isBreak ? 'bg-muted-foreground/30' : 'bg-background border-2 border-secondary group-hover:border-primary'
            } ${activeId === item.id ? 'ring-4 ring-secondary/20 bg-secondary' : ''}`} />

            <div className={`flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-1 transition-colors duration-300 ${
              item.isBreak ? 'text-muted-foreground' : 'text-primary group-hover:text-secondary'
            }`}>
              <div className="font-medium text-sm md:text-base flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-4 h-4 opacity-70" />
                {item.time}
              </div>
              <h3 className={`text-lg md:text-xl font-medium ${item.isBreak ? 'italic' : ''}`}>
                {item.title}
              </h3>
            </div>

            {item.location && (
              <div className="flex items-center gap-1.5 mt-1 mb-1 pl-0 text-[#b06060] text-sm">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 opacity-70" />
                <span>{item.location}</span>
              </div>
            )}

            <motion.div
              initial={false}
              animate={{ height: activeId === item.id ? "auto" : 0, opacity: activeId === item.id ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="pt-1 pb-4 text-muted-foreground text-sm space-y-2">
                {item.description && (
                  <p className="leading-relaxed">{item.description}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
