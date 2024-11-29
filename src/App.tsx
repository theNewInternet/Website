import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BackgroundShapes } from './components/BackgroundShapes';
import { AppPopup } from './components/AppPopup';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundShapes />
      <Navbar openPopup={openPopup} />
      <Hero openPopup={openPopup} />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
      {isPopupOpen && <AppPopup isOpen={isPopupOpen} onClose={closePopup} />}
    </div>
  );
}

export default App;