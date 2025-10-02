import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600">
                Kabeer Shah
              </span>
              <br />Full-Stack Developer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
              I love building web applications that solve real problems. From fintech platforms 
              to healthcare solutions, I turn ideas into scalable, user-friendly applications.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700 dark:text-gray-300">Full-Stack Development (React, Node.js, Python)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700 dark:text-gray-300">Experience with Healthcare & Fintech Projects</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-orange-600" />
                <span className="text-gray-700 dark:text-gray-300">Clean Code & Test-Driven Development</span>
              </div>
            </div>

            <button
              onClick={scrollToContact}
              className="mt-10 bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Let's Build Something Cool</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional software development"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-orange-200 dark:bg-orange-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}