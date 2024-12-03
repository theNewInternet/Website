import React from 'react';

interface StepProps {
  number: string;
  title: string;
  description: string;
  image: string;  // Add image property
}

function Step({ number, title, description, image }: StepProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/50 to-purple-600/50 rounded-xl opacity-0 blur group-hover:opacity-100 transition-opacity" />
      <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
        <div className="text-7xl font-bold bg-gradient-to-r from-white/5 to-white/10 text-transparent bg-clip-text mb-4">
          {number}
        </div>
        <img src={image} alt={title} className="w-full h-48 object-contain rounded-lg mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <div id="how-it-works" className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
            Simple Yet Powerful
          </h2>
          <p className="text-gray-400">
            Get started with theNewInternet in three easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Step
            number="01"
            title="Connect Wallet"
            description="Secure authentication with Web3Auth - no complex wallet setup needed"
            image="/images/connect.jpg"
          />
          <Step
            number="02"
            title="Access Content"
            description="Browse content using blockchain addresses with complete privacy"
            image="/images/browse.jpg"
          />
          <Step
            number="03"
            title="Share & Publish"
            description="Control access to your content with blockchain-based permissions"
            image="/images/cli.jpg"
          />
        </div>
      </div>
    </div>
  );
}