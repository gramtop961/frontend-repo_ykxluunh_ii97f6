import React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ClientsMarquee from './components/ClientsMarquee';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-900/80 bg-black/50 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <pre className="font-mono text-xs tracking-[0.35em] text-orange-400">V F X Y</pre>
          <nav className="hidden sm:flex items-center gap-6 text-xs font-mono text-neutral-400">
            <a href="#work" className="hover:text-orange-400 transition-colors">WORK</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">CONTACT</a>
          </nav>
        </div>
      </header>

      <main className="w-full">
        <Hero />
        <ClientsMarquee />
        <Projects />
      </main>

      <FooterCTA />
    </div>
  );
}

export default App;
