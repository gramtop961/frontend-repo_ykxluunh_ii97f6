import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'NEON CITY: GEN-AI TITLE SEQUENCE',
    src: 'https://images.unsplash.com/photo-1623307019152-1ee797183f1d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxORU9OJTIwQ0lUWSUzQSUyMEdFTi1BSSUyMFRJVExFfGVufDB8MHx8fDE3NjIwODY5NTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'MOTION DATA: SPORTS VIZ',
    src: 'https://images.unsplash.com/photo-1623307019152-1ee797183f1d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxORU9OJTIwQ0lUWSUzQSUyMEdFTi1BSSUyMFRJVExFfGVufDB8MHx8fDE3NjIwODY5NTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'PRODUCT HYPERREAL: MACRO CG',
    src: 'https://images.unsplash.com/photo-1722962674182-5edc27f7ae30?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNT1RJT04lMjBEQVRBJTNBJTIwU1BPUlRTJTIwVklafGVufDB8MHx8fDE3NjIwODY5NTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'ROBOTICS // BRAND FILM',
    src: 'https://images.unsplash.com/photo-1700041721940-2e2f254375c6?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQUk9EVUNUJTIwSFlQRVJSRUFMJTNBJTIwTUFDUk8lMjBDR3xlbnwwfDB8fHwxNzYyMDg2OTU2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      gsap.from(cards, {
        opacity: 0,
        y: 32,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-6 flex items-end justify-between">
          <pre className="font-mono text-sm text-neutral-400 whitespace-pre">{`// SELECTED WORK`}</pre>
          <span className="font-mono text-xs text-neutral-500">FULL FRAMES • BIG SOUND • REAL TIME</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="project-card group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <video
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  src={p.src}
                  playsInline
                  muted
                  loop
                  autoPlay
                  controls={false}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="absolute left-4 bottom-3 right-4 flex items-center justify-between">
                <h3 className="font-mono text-xs sm:text-sm tracking-widest text-neutral-200">{p.title}</h3>
                <span className="font-mono text-[10px] text-orange-400">VFXY</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
