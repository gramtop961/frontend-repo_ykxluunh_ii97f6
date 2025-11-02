import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Full-bleed, fullscreen grid gallery (no inner spacing)
const projects = [
  {
    title: 'NEON CITY: GEN-AI TITLE SEQUENCE',
    src: 'https://images.unsplash.com/photo-1623307019152-1ee797183f1d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxORU9OJTIwQ0lUWSUzQSUyMEdFTi1BSSUyMFRJVExFfGVufDB8MHx8fDE3NjIwODY5NTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    type: 'video',
  },
  {
    title: 'MOTION DATA: SPORTS VIZ',
    src: 'https://images.unsplash.com/photo-1623307019152-1ee797183f1d?auto=format&fit=crop&w=1800&q=80',
    type: 'image',
  },
  {
    title: 'PRODUCT HYPERREAL: MACRO CG',
    src: 'https://images.unsplash.com/photo-1722962674182-5edc27f7ae30?auto=format&fit=crop&w=1800&q=80',
    type: 'image',
  },
  {
    title: 'ROBOTICS // BRAND FILM',
    src: 'https://images.unsplash.com/photo-1700041721940-2e2f254375c6?auto=format&fit=crop&w=1800&q=80',
    type: 'image',
  },
  {
    title: 'FUTURE RETAIL: IMMERSIVE LED',
    src: 'https://images.unsplash.com/photo-1740378454478-c8c38beb6f28?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGVVRVUkUlMjBSRVRBSUwlM0ElMjBJTU1FUlNJVkUlMjBMRUR8ZW58MHwwfHx8MTc2MjA4ODAyNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    type: 'video',
  },
  {
    title: 'CONCEPT CAR: CINEMATIC RIG',
    src: 'https://images.unsplash.com/photo-1728470015698-a831d9a25faf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDT05DRVBUJTIwQ0FSJTNBJTIwQ0lORU1BVElDJTIwUklHfGVufDB8MHx8fDE3NjIwODgwMjV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    type: 'image',
  },
];

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.project-card');
      gsap.set(cards, { opacity: 0, scale: 0.98, y: 24 });

      cards.forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="relative w-full bg-black text-white">
      {/* Label strip */}
      <div className="sticky top-14 z-10 w-full bg-black/70 backdrop-blur border-b border-neutral-900">
        <div className="px-4 sm:px-6 lg:px-8 py-3">
          <pre className="font-mono text-xs text-neutral-500 whitespace-pre">{`// FULLFRAME WORKS GRID`}</pre>
        </div>
      </div>

      {/* Full-bleed grid with no gaps/padding */}
      <div className="w-full min-h-screen grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
        {projects.map((p, i) => (
          <article key={i} className="project-card group relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
            {p.type === 'video' ? (
              <video
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                src={p.src}
                playsInline
                muted
                loop
                autoPlay
                controls={false}
              />
            ) : (
              <img
                src={p.src}
                alt={p.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between">
              <h3 className="font-mono text-[10px] sm:text-xs tracking-widest text-neutral-200/90">{p.title}</h3>
              <span className="font-mono text-[10px] text-orange-400">VFXY</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
