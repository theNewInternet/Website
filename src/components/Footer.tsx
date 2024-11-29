import React from 'react';
import { Github, Linkedin } from 'lucide-react';
// import { GlowingButton } from './GlowingButton';

const navigation = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
  ],
  resources: [
    { name: 'Github', href: 'https://github.com/theNewInternet/theNewInternet' },
    // { name: 'Documentation', href: '#' },
    // { name: 'API Reference', href: '#' },
    // { name: 'Guides', href: '#' },
    // { name: 'Blog', href: '#' },
    // { name: 'Community', href: '#' },
  ],
  company: [
    // { name: 'About', href: '#' },
    // { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#contact' },
    // { name: 'Partners', href: '#' },
    // { name: 'Legal', href: '#' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/theNewInternet/theNewInternet',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/thenewinternet/',
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16">
            <div className="space-y-8">
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  theNewInternet
                </span>
                <p className="mt-4 text-sm text-gray-400">
                  Building the future of decentralized web browsing and content distribution.
                </p>
              </div>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Product</h3>
              <ul className="mt-4 space-y-3">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Resources</h3>
              <ul className="mt-4 space-y-3">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section
        <div className="relative -mt-8 mb-20">
          <div className="relative group w-full max-w-lg mx-auto">
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500/50 to-purple-600/50 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
            <div className="relative p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <h3 className="text-lg font-semibold text-white mb-2">
                Subscribe to our newsletter
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                Stay updated with the latest features and releases.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm"
                />
                <GlowingButton>
                  <Send className="w-4 h-4" />
                </GlowingButton>
              </form>
            </div>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="border-t border-white/10 py-8">
          <p className="text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} theNewInternet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}