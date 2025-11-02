import React, { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// A small sequence of ASCII frames to glitch/morph the VFXY monogram
const FRAMES = [
  String.raw` \\\  |\\\\\\\   /\\\\\\\    /\\\\\\\\\\\  
  \\ \ | \__  \\ / ____  \\  / ___/ __   | 
   \\ \|  / / / / / __/ / / /   / /_/ /  
    \\   / /_/ / / /_/ / / /__ / __  /   
     \\_/_____/  \\____/  \\____//_/ /_/    
         V  F  X  Y`,
  String.raw`  /\\\\\\\    /\\\\\\\   __   __   __
 / ____  \\  / ____  \\  \\ \\ / /  / _\\
/ / / __/ / / / __/ /   \\ V /  / /_ \\
\\ \\ \\__/ / \\ \\__/ /    > <  / / _  |
 \\________/  \\____/    / . \\ \\ \\_/ |
                         /_/\\_\\ \\___/`,
  String.raw` __     __ ________  __   __   __
|  \\/\|  |  _   _ \\ \\ \\ / /  / _\\
| |\\  /| | | | | | | \\ V /  / /_ \\
| | \\ / | | | | | |  > <  / / _  |
| |    | | |_| |_| | / . \\ \\ \\_/ |
|_|    |_|_____|____|/_/\\_\\ \\___/
      V F X Y  —  A I  D R I V E N`
];

const AsciiLogo = () => {
  const containerRef = useRef(null);
  const preRef = useRef(null);
  const [frame, setFrame] = useState(0);

  const lines = useMemo(() => FRAMES[frame].split('\n'), [frame]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin section and scrub timeline that tweens a proxy value to swap frames
      const proxy = { t: 0 };
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: '+=1200',
          scrub: true,
          pin: true,
        }
      });

      tl.to(proxy, {
        t: FRAMES.length - 1,
        duration: 1,
        ease: 'none',
        onUpdate: () => {
          const idx = Math.round(proxy.t);
          setFrame(idx);
        }
      });

      // Line-by-line reveal with a slight wave
      const items = gsap.utils.toArray('.ascii-line');
      gsap.set(items, { opacity: 0, y: 20 });
      tl.to(items, {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        ease: 'power2.out'
      }, 0);

      // Neon pulse on accent
      tl.fromTo(
        preRef.current,
        { filter: 'drop-shadow(0 0 0 rgba(251,146,60,0))' },
        { filter: 'drop-shadow(0 0 18px rgba(251,146,60,0.35))', duration: 0.6, ease: 'sine.inOut' },
        0.2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-black text-white border-y border-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="mb-6">
          <pre className="font-mono text-sm text-neutral-500 whitespace-pre">{`// BRAND ASCII — SCROLL TO ANIMATE`}</pre>
        </div>
        <pre
          ref={preRef}
          className="font-mono text-[10px] sm:text-[12px] md:text-[14px] leading-[1.05] text-orange-400/90 whitespace-pre select-none"
          aria-label="VFXY ASCII Logo Animation"
        >
          {lines.map((l, i) => (
            <span key={i} className="ascii-line block will-change-transform">{l}</span>
          ))}
        </pre>
      </div>
    </section>
  );
};

export default AsciiLogo;
