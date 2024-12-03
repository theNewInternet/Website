import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { GlowingButton } from './GlowingButton';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div id="contact" className="relative py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-400 mb-8">
              Have questions about theNewInternet? Our team is here to help you get started
              with the future of web browsing.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Email Us</h3>
                  <p className="text-gray-400">Our friendly team is here to help.</p>
                  <a href="mailto:hello@thenewinternet.org" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-2">
                    hello@thenewinternet.org
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Live Chat</h3>
                  <p className="text-gray-400">Available 24/7 for urgent inquiries.</p>
                  <button className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-2">
                    Start a conversation
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-px bg-gradient-to-r from-blue-500/50 to-purple-600/50 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
            <form className="relative p-8 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <GlowingButton
                  className="w-full"
                  onClick={() => {
                    const mailtoLink = `mailto:hello@thenewinternet.org?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20<${encodeURIComponent(email)}>`;
                    window.location.href = mailtoLink;
                  }}
                >
                  Send Message
                </GlowingButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}