import React, { lazy, Suspense } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

// Sections sous la ligne de flottaison : chunks séparés chargés en parallèle
// après le chunk principal → time-to-interactive plus rapide, ancres préservées.
const Education = lazy(() => import('./components/Education').then((m) => ({ default: m.Education })));
const Projects = lazy(() => import('./components/Projects').then((m) => ({ default: m.Projects })));
const Skills = lazy(() => import('./components/Skills').then((m) => ({ default: m.Skills })));
const Contact = lazy(() => import('./components/Contact').then((m) => ({ default: m.Contact })));

export default function App() {
  return (
    <div className="relative min-h-screen plexus-bg">
      <CustomCursor />
      <Background />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Profile />
        <Suspense fallback={null}>
          <Education />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
