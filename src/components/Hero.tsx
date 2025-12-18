import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Welcome to Nordible Solutions
              <br />Your Partner in Web Development
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
              We specialize in building web applications that solve real problems. From fintech platforms 
              to healthcare solutions, we turn your ideas into scalable, user-friendly applications.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Full-Stack Development (React, Node.js, Python)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Experience with Healthcare & Fintech Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">Clean Code & Test-Driven Development</span>
              </div>
            </div>

            <button
              onClick={scrollToConsultation}
              className="mt-10 bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <span>Let's Build Something Cool</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>