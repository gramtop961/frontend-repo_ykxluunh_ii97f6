import React from 'react';
import { motion } from 'framer-motion';

const sources = [
  'https://videos.pexels.com/video-files/854332/854332-sd_640_360_25fps.mp4',
  'https://assets.mixkit.co/videos/preview/mixkit-woman-editing-on-a-computer-3996-large.mp4',
];

const Showreel = () => {
  return (
    <section id="reel" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <pre className="font-mono text-sm text-neutral-400 whitespace-pre">
{`// VFXY — SHOWREEL 2025
// frames: ai + cg + live-action // color: matte-black + neon orange`}
          </pre>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
        >
          <video
            className="h-full w-full object-cover"
            playsInline
            muted
            loop
            autoPlay
            controls={false}
            poster="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1200&auto=format&fit=crop"
          >
            {sources.map((s) => (
              <source key={s} src={s} type="video/mp4" />
            ))}
          </video>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent h-32" />
          <div className="absolute left-6 bottom-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/60 backdrop-blur px-3 py-1.5 text-xs font-mono tracking-widest text-orange-400 border border-neutral-800">VFXY • AI DRIVEN</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showreel;
