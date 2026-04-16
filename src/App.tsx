import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="relative min-h-screen plexus-bg">
      <CustomCursor />
      <Background />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Profile />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
