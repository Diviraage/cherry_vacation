import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export function SchoolMap() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(820);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.mapHeight && typeof e.data.mapHeight === "number") {
        setIframeHeight(e.data.mapHeight + 24);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <section id="map" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-[#f0d4d4] overflow-hidden shadow-sm"
      >
        <iframe
          ref={iframeRef}
          src="/map.html"
          title="Інтерактивна карта Ліко-школи"
          className="w-full"
          style={{ height: iframeHeight, border: "none", display: "block" }}
          scrolling="no"
        />
      </motion.div>
    </section>
  );
}
