import React from 'react';
import { Shield, Globe2, Lock, Cpu } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-px bg-gradient-to-r from-blue-500/50 to-purple-600/50 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative h-full p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
        <div className="mb-4 inline-block text-blue-400 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <div id="features" className="relative bg-black/50 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
            Built for the Future
          </h2>
          <p className="text-gray-400">
            Experience a new era of internet freedom with our cutting-edge features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Censorship Resistant"
            description="Your content remains accessible, free from central authority control"
          />
          <FeatureCard
            icon={<Globe2 className="w-8 h-8" />}
            title="Decentralized"
            description="Powered by the Diode network, eliminating single points of failure"
          />
          <FeatureCard
            icon={<Lock className="w-8 h-8" />}
            title="Privacy First"
            description="Complete anonymity with blockchain-based identification"
          />
          <FeatureCard
            icon={<Cpu className="w-8 h-8" />}
            title="Web3 Powered"
            description="Seamless integration with Web3Auth for secure access"
          />
        </div>
      </div>
    </div>
  );
}