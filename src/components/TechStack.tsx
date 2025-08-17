import React from 'react';

export default function TechStack() {
  const technologies = [
    { 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'bg-blue-50 dark:bg-blue-900/20' 
    },
    { 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: 'bg-green-50 dark:bg-green-900/20' 
    },
    { 
      name: 'TypeScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: 'bg-blue-50 dark:bg-blue-900/20' 
    },
    { 
      name: 'Python', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: 'bg-yellow-50 dark:bg-yellow-900/20' 
    },
    { 
      name: 'C#', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
      color: 'bg-purple-50 dark:bg-purple-900/20' 
    },
    { 
      name: 'PostgreSQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: 'bg-blue-50 dark:bg-blue-900/20' 
    },
    { 
      name: 'MongoDB', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      color: 'bg-green-50 dark:bg-green-900/20' 
    },
    { 
      name: 'AWS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      color: 'bg-orange-50 dark:bg-orange-900/20' 
    },
    { 
      name: 'Docker', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: 'bg-blue-50 dark:bg-blue-900/20' 
    },
    { 
      name: 'Next.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      color: 'bg-gray-50 dark:bg-gray-800' 
    },
    { 
      name: 'React Native', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'bg-cyan-50 dark:bg-cyan-900/20' 
    },
    { 
      name: 'Redis', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      color: 'bg-red-50 dark:bg-red-900/20' 
    }
  ];


  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Versatile expertise across modern web technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className={`${tech.color} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-600 group`}
            >
              <div className="flex flex-col items-center space-y-3">
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="h-10 w-10 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="font-medium text-gray-900 dark:text-white text-center">{tech.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-center">
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