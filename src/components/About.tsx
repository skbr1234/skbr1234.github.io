import React from 'react';
import { Zap, Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const qualities = [
    {
      icon: Target,
      title: 'Full-Stack Skills',
      description: 'From React frontends to Node.js backends, I love working across the entire stack.'
    },
    {
      icon: Zap,
      title: 'Clean Code Advocate',
      description: 'I write tests first and believe in code that tells a story - readable, maintainable, and reliable.'
    },
    {
      icon: Users,
      title: 'Real-World Impact',
      description: 'Built applications used by millions - from healthcare platforms to fintech solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding creative solutions that actually work.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional developer workspace"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer who loves turning complex problems into 
              elegant solutions. I've had the opportunity to work on some amazing projects 
              including healthcare platforms at General Electric and fintech applications at Nium.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, I'm probably learning a new technology. I believe in writing clean, maintainable code and 
              creating applications that users actually enjoy using.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg flex-shrink-0">
                    <quality.icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{quality.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{quality.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}