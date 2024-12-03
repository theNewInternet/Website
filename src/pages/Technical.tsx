import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BackgroundShapes } from '../components/BackgroundShapes';
import { NetworkArchitecture } from '../components/TechnicalDetails/NetworkArchitecture';
import { SecurityFeatures } from '../components/TechnicalDetails/SecurityFeatures';
import { PublishingSystem } from '../components/TechnicalDetails/PublishingSystem';

export function Technical() {
  return (
    <div className="min-h-screen bg-black text-white">
      <BackgroundShapes />
      <Navbar />
      
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
              Technical Details
            </h1>
            <p className="text-gray-400">
              Explore the advanced technology stack powering our decentralized platform
            </p>
          </div>

          <div className="space-y-32">
            <NetworkArchitecture />
            <SecurityFeatures />
            <PublishingSystem />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}