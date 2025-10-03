import React, { useState, useEffect } from 'react';

export default function TechStack() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const technologies = [
    { 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'bg-blue-50 dark:bg-blue-900/20',
      proficiency: 95
    },
    { 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'bg-green-50 dark:bg-green-900/20',
      proficiency: 90
    },
    { 
      name: 'TypeScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: 'bg-blue-50 dark:bg-blue-900/20',
      proficiency: 85
    },
    { 
      name: 'Python', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: 'bg-yellow-50 dark:bg-yellow-900/20',
      proficiency: 80
    },
    { 
      name: 'C#', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      color: 'bg-purple-50 dark:bg-purple-900/20',
      proficiency: 75
    },
    { 
      name: 'PostgreSQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: 'bg-blue-50 dark:bg-blue-900/20',
      proficiency: 85
    },
    { 
      name: 'MongoDB', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: 'bg-green-50 dark:bg-green-900/20',
      proficiency: 80
    },
    { 
      name: 'AWS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      color: 'bg-orange-50 dark:bg-orange-900/20',
      proficiency: 85
    },
    { 
      name: 'Docker', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: 'bg-blue-50 dark:bg-blue-900/20',
      proficiency: 75
    },
    { 
      name: 'Next.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: 'bg-gray-50 dark:bg-gray-800',
      proficiency: 90
    },
    { 
      name: 'React Native', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'bg-cyan-50 dark:bg-cyan-900/20',
      proficiency: 70
    },
    { 
      name: 'Redis', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      color: 'bg-red-50 dark:bg-red-900/20',
      proficiency: 75
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, []);

  // Create a circular array for smooth infinite scrolling - max 8 items
  const getVisibleTechnologies = () => {
    const visible = [];
    for (let i = 0; i < 8; i++) {
      const index = (currentIndex + i) % technologies.length;
      visible.push({ ...technologies[index], position: i });
    }
    return visible;
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="w-full">
        <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Versatile expertise across modern web technologies and frameworks
          </p>
        </div>

        {/* Technology Carousel */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between space-x-2 sm:space-x-4 overflow-hidden">
            {getVisibleTechnologies().map((tech, index) => (
              <div 
                key={`${tech.name}-${index}`}
                className={`${tech.color} rounded-2xl p-3 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-600 group flex-shrink-0 w-20 h-20 sm:w-32 sm:h-32 flex flex-col items-center justify-center backdrop-blur-sm bg-opacity-80`}
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="h-6 w-6 sm:h-12 sm:w-12 group-hover:scale-110 transition-transform duration-300 mb-1 sm:mb-3 filter drop-shadow-sm"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="h-12 w-12 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3 shadow-lg">${tech.name.charAt(0)}</div>`;
                    }
                  }}
                />
                <span className="font-semibold text-gray-900 dark:text-white text-center text-xs sm:text-sm">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center mx-4 sm:mx-6 lg:mx-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Full-Stack Versatility</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            With expertise spanning frontend frameworks, backend technologies, databases, and cloud platforms, 
            I can architect and implement complete solutions tailored to your specific business needs. 
            My diverse skill set ensures optimal technology choices for every project.
          </p>
        </div>
      </div>
    </section>
  );
}