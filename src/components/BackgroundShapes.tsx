import React from 'react';

export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none">
      {/* Top-right shape */}
      <svg
        className="absolute -right-20 -top-20 w-96 h-96 animate-spin-slow opacity-20"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#gradient1)"
          d="M42.8,-65.5C54.9,-56.5,63.7,-43.2,69.4,-28.7C75.1,-14.2,77.8,1.5,74.9,16.2C72,30.9,63.5,44.7,51.6,54.4C39.7,64.1,24.4,69.8,8.6,71.9C-7.1,74,-23.4,72.5,-37.9,65.8C-52.4,59.1,-65.1,47.2,-72.5,32.4C-79.9,17.6,-82,-0.1,-77.8,-15.8C-73.6,-31.5,-63.1,-45.2,-49.7,-54.2C-36.3,-63.2,-20,-67.5,-3.2,-63.8C13.7,-60.1,30.7,-74.5,42.8,-65.5Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Bottom-left shape */}
      <svg
        className="absolute -left-20 -bottom-20 w-96 h-96 animate-float opacity-20"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#gradient2)"
          d="M39.9,-51.3C53.1,-42.2,66.3,-32.1,71.1,-18.6C75.9,-5,72.3,11.9,64.8,26.5C57.3,41.1,45.9,53.3,32.1,60.1C18.3,66.9,2.2,68.3,-14.9,66.1C-32,63.9,-50.1,58.1,-63.4,45.6C-76.7,33.1,-85.2,13.9,-83.1,-3.9C-81,-21.7,-68.3,-38,-53.6,-47.4C-38.9,-56.8,-22.2,-59.3,-6.6,-51.8C9,-44.3,26.7,-60.4,39.9,-51.3Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Center shape */}
      <svg
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] animate-pulse-slow opacity-10"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#gradient3)"
          d="M44.5,-76.3C59.1,-69.8,73.3,-59.5,81.9,-45.6C90.5,-31.7,93.5,-14.2,91.8,2.8C90.1,19.8,83.7,36.3,73.7,50.3C63.7,64.3,50.1,75.8,34.7,80.9C19.2,86,1.9,84.7,-14.9,80.6C-31.7,76.5,-48,69.6,-61.5,58.4C-75,47.2,-85.8,31.7,-89.5,14.3C-93.2,-3.1,-89.8,-22.4,-81.6,-38.5C-73.3,-54.6,-60.2,-67.5,-45,-74.8C-29.8,-82.1,-12.6,-83.8,2.1,-87.3C16.8,-90.8,29.9,-82.8,44.5,-76.3Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Gradients */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}