import React from 'react';
import { Terminal, FileCode, Users } from 'lucide-react';

export function PublishingSystem() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <Terminal className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium">Publishing System</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-6">
          Streamlined Publishing
        </h3>
        <div className="space-y-6 text-gray-400">
          <p>
            Our CLI tool simplifies the process of publishing and managing content. 
            Publishers can easily share locally hosted applications while maintaining 
            complete control over access permissions.
          </p>
          <p>
            The whitelist-based system allows publishers to define exactly who can 
            access their content, creating a secure and controlled distribution network.
          </p>
        </div>
      </div>

      <div className="relative group">
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500/50 to-purple-600/50 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
        <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
          <div className="space-y-6">
            <Feature
              icon={<FileCode className="w-6 h-6 text-blue-400" />}
              title="CLI Publishing Tool"
              description="Simple command-line interface for content publishing and management"
            />
            <Feature
              icon={<Users className="w-6 h-6 text-blue-400" />}
              title="Access Control"
              description="Flexible whitelist system for granular access management"
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