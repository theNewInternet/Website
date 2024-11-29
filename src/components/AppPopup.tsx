import React from 'react';
import { Github } from 'lucide-react';
import { GlowingButton } from './GlowingButton';

export function AppPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gray-800 rounded-lg p-6 text-center max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
        <p className="text-gray-300 mb-6">
          The public binary is not ready yet. Please compile from source.
        </p>
        <div className="flex gap-4 justify-center">
          <GlowingButton
            onClick={() => window.open('https://github.com/theNewInternet/theNewInternet', '_blank')}
          >
            <span className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              View on GitHub
            </span>
          </GlowingButton>
          <GlowingButton variant="secondary" onClick={onClose}>
            Close
          </GlowingButton>
        </div>
      </div>
    </div>
  );
}
