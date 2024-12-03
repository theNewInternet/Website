import React, { useState } from 'react';
import { ChevronRight, Github, Play } from 'lucide-react';
import { GlowingButton } from './GlowingButton';
import { VideoModal } from './VideoModal';

export function Hero({ openPopup }: { openPopup: () => void }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <div className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-4xl">
            <div className="space-y-1 mb-8">
              <div className="text-sm font-medium">
                <span className="text-blue-400">Introducing</span>
                <span className="mx-2 text-gray-600">/</span>
                <span className="text-purple-400">Web3 Revolution</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                <span className="inline-block animate-fade-in">the</span>
                <span className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text animate-fade-in animation-delay-100">New</span>
                <span className="inline-block bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text animate-fade-in animation-delay-200">Internet</span>
              </h1>
            </div>

            <p className="text-xl text-gray-400 max-w-2xl mb-12 animate-fade-in animation-delay-300">
              Experience the future of web browsing with our decentralized, 
              censorship-resistant platform powered by blockchain technology.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
              <GlowingButton className="group" onClick={openPopup}>
                <span className="flex items-center gap-2">
                  Get Started Free
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </GlowingButton>
              <GlowingButton
                onClick={() => window.open('https://github.com/theNewInternet/theNewInternet', '_blank')}
              variant="secondary">
                <span className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  View on GitHub
                </span>
              </GlowingButton>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in animation-delay-500">
              <Stat value="100%" label="Decentralized" />
              <Stat value="0" label="IP Addresses Shared" />
              <Stat value="Web3" label="Authentication" />
              <Stat value="∞" label="Possibilities" />
            </div>
          </div>
        <div className="relative group animate-fade-in animation-delay-300">
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500/50 to-purple-600/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                <div className="absolute inset-0 bg-[url('/images/screenshot.jpg')] bg-contain bg-repeat-space bg-center opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="group/btn relative flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 animate-ping rounded-full bg-blue-400/20" />
                      <Play className="w-5 h-5 text-blue-400 group-hover/btn:text-blue-300 transition-colors" fill="currentColor" />
                    </div>
                    <span className="font-medium text-white group-hover/btn:text-blue-300 transition-colors">
                      Watch Demo
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/lxSuKkaQT98?si=BgFELIjzW8239R9-"
      />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}