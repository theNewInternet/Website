import React from 'react';
import { NetworkArchitecture } from './NetworkArchitecture';
import { SecurityFeatures } from './SecurityFeatures';
import { PublishingSystem } from './PublishingSystem';

export function TechnicalDetails() {
  return (
    <div id="technical-details" className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
            Technical Deep Dive
          </h2>
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
    </div>
  );
}