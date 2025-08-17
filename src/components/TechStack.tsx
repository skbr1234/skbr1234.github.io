import React from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Server, 
  Smartphone,
  Globe,
  Cpu,
  Layers
} from 'lucide-react';

export default function TechStack() {
  const technologies = [
    { name: 'React', icon: Code, color: 'text-blue-500' },
    { name: 'Node.js', icon: Server, color: 'text-green-500' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-600' },
    { name: 'Python', icon: Code, color: 'text-yellow-500' },
    { name: 'C#', icon: Code, color: 'text-purple-500' },
    { name: 'PostgreSQL', icon: Database, color: 'text-blue-700' },
    { name: 'MongoDB', icon: Database, color: 'text-green-600' },
    { name: 'AWS', icon: Cloud, color: 'text-orange-500' },
    { name: 'Docker', icon: Layers, color: 'text-blue-400' },
    { name: 'Next.js', icon: Globe, color: 'text-gray-800' },
    { name: 'React Native', icon: Smartphone, color: 'text-cyan-500' },
    { name: 'Redis', icon: Cpu, color: 'text-red-500' }
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
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="flex flex-col items-center space-y-3">
                <tech.icon className={`h-8 w-8 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
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