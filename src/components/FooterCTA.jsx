import React from 'react';

const FooterCTA = () => {
  return (
    <footer id="contact" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <pre className="font-mono text-sm text-neutral-400 whitespace-pre mb-6">{`// LET'S BUILD SOMETHING UNREAL`}</pre>
        <h2 className="font-mono text-2xl sm:text-4xl tracking-wider text-orange-400 leading-tight">
{`> VFXY // AI-DRIVEN PRODUCTION
> EMAIL: hello@vfxy.studio`}
        </h2>
        <a
          href="mailto:hello@vfxy.studio?subject=New%20Project%20Inquiry%20—%20VFXY"
          className="inline-block mt-8 rounded-md bg-orange-500/90 hover:bg-orange-500 text-black px-6 py-3 font-semibold tracking-wide transition-colors"
        >
          START A PROJECT
        </a>
        <div className="mt-12 text-xs text-neutral-500 font-mono">© {new Date().getFullYear()} VFXY — All frames reserved.</div>
      </div>
    </footer>
  );
};

export default FooterCTA;
