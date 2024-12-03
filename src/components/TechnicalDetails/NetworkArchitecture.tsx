import React from 'react';
import { Network, Shield, Lock } from 'lucide-react';

export function NetworkArchitecture() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <Network className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium">Network Architecture</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-6">
          Decentralized Infrastructure
        </h3>
        <div className="space-y-6 text-gray-400">
          <p>
            Our platform leverages the Diode Network, a decentralized networking infrastructure 
            that eliminates single points of failure. All connections are established through 
            secure TLS tunnels, ensuring data integrity and privacy.
          </p>
          <p>
            Content access is managed through blockchain-based identifiers, completely 
            removing the need for IP address exchanges between users and publishers.
          </p>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500/50 to-purple-600/50 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
        <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
          <div className="space-y-6">
            <Feature
              icon={<Shield className="w-6 h-6 text-blue-400" />}
              title="Diode Network Integration"
              description="Secure node connections with TLS encryption and blockchain-based routing"
            />
            <Feature
              icon={<Lock className="w-6 h-6 text-blue-400" />}
              title="IP Privacy"
              description="Complete IP address protection through blockchain-based identification"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="p-3 rounded-lg bg-white/5 border border-white/10">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="font-medium text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}