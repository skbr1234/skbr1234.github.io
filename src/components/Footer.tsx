import React from 'react';
import { Code, Mail, Phone, MessageSquare } from 'lucide-react';

interface FooterProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export default function Footer({ onPrivacyClick, onTermsClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-purple-400" />
              <div className="flex flex-col">
              <span className="text-xl font-bold text-white">Nordible</span>
              <span className="text-sm font-bold text-gray-400">Solutions</span>
            </div>
            </div>
            <p className="text-gray-300 mb-4">
              Software Development Consultant specializing in scalable web solutions 
              for businesses of all sizes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span className="text-sm">nordiblesolutions@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span className="text-sm">+91-9773207706</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-4 w-4 text-purple-400" />
                <span className="text-sm">WhatsApp Available</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">E-Commerce Solutions</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Custom Web Applications</a></li>
              <li><a href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
              <li>
                <button 
                  onClick={onPrivacyClick}
                  className="hover:text-purple-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={onTermsClick}
                  className="hover:text-purple-400 transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nordible Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}