import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden" aria-label="VFXY Hero">
      {/* 3D Scene as full-width cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Vignette overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center p-6">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight"
          >
            Full‑Frame Audiovisual Production
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-5 text-neutral-300 text-base sm:text-lg"
          >
            VFXY — technology‑driven filmmaking. CG, realtime, and AI craft for modern brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 flex items-center justify-center gap-3 flex-wrap"
          >
            <a
              href="#work"
              className="rounded-md bg-orange-500/90 hover:bg-orange-500 text-black px-5 py-2.5 font-semibold tracking-wide transition-colors"
            >
              VIEW WORK ▸
            </a>
            <a
              href="#contact"
              className="rounded-md border border-neutral-700 hover:border-neutral-500 text-neutral-200 px-5 py-2.5 font-semibold tracking-wide transition-colors"
            >
              START A PROJECT
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scanline texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[linear-gradient(to_bottom,transparent_0,rgba(255,255,255,0.7)_1px,transparent_2px)] bg-[size:100%_3px]" />
    </section>
  );
};

export default Hero;
