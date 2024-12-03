import React from 'react';
import { KeyRound, ShieldCheck, UserCheck } from 'lucide-react';

export function SecurityFeatures() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative group order-2 lg:order-1">
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500/50 to-purple-600/50 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
        <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
          <div className="space-y-6">
            <Feature
              icon={<KeyRound className="w-6 h-6 text-blue-400" />}
              title="Blockchain Authentication"
              description="Secure access control through blockchain wallet authentication"
            />
            <Feature
              icon={<ShieldCheck className="w-6 h-6 text-blue-400" />}
              title="TLS Encryption"
              description="End-to-end encryption for all data transfers using secp256k1 certificates"
            />
            <Feature
              icon={<UserCheck className="w-6 h-6 text-blue-400" />}
              title="Whitelist Control"
              description="Publisher-defined access control through wallet address whitelisting"
            />
          </div>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <ShieldCheck className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium">Security Features</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-6">
          Multi-Layer Security
        </h3>
        <div className="space-y-6 text-gray-400">
          <p>
            Security is built into every layer of our platform. From blockchain-based 
            authentication to end-to-end encryption, every interaction is protected 
            by multiple security measures.
          </p>
          <p>
            Publishers maintain complete control over content access through a 
            simple yet powerful whitelisting system, while users enjoy private 
            and secure browsing.
          </p>
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