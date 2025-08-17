import React from 'react';
import { Zap, Target, Users, Lightbulb } from 'lucide-react';

export default function About() {
  const qualities = [
    {
      icon: Target,
      title: 'End-to-End Expertise',
      description: 'From architectural design to deployment, I handle every aspect of web development with precision.'
    },
    {
      icon: Zap,
      title: 'Agile & TDD Methodologies',
      description: 'Proven track record using agile development and test-driven development for reliable results.'
    },
    {
      icon: Users,
      title: 'Enterprise Experience',
      description: 'Worked with Fortune 500 companies including GE Healthcare and Nium, delivering mission-critical solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Go Do-It Attitude',
      description: 'Problem-solver by nature with a proactive approach to overcoming technical challenges.'
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
              About Kabeer Shah
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a seasoned software development consultant with a passion for creating 
              scalable web solutions that drive business growth. With extensive experience 
              working with industry leaders like GE Healthcare and Nium, I bring enterprise-level 
              expertise to projects of all sizes.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My approach combines technical excellence with business acumen, ensuring that 
              every solution I deliver not only meets technical requirements but also drives 
              measurable business outcomes. I specialize in end-to-end architectural design, 
              leveraging agile methodologies and test-driven development to ensure reliable, 
              maintainable solutions.
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