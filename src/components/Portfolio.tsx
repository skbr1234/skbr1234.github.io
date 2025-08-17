import React from 'react';
import { ExternalLink, Users, TrendingUp } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'OncoCare Platform',
      client: 'GE Healthcare',
      link: 'https://www.gehealthcare.com/specialties/oncology-solutions/oncocare',
      description: 'Comprehensive oncology care management platform serving healthcare providers worldwide.',
      problem: 'Complex patient data management and treatment tracking across multiple healthcare facilities.',
      solution: 'Built a scalable web application with real-time data synchronization and advanced reporting.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      outcome: 'Improved patient care coordination by 40% and reduced administrative overhead by 60%',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: {
        users: '10K+',
        improvement: '40%'
      }
    },
    {
      title: 'Instarem.com',
      client: 'Nium (formerly InstaReM)',
      link: 'https://www.instarem.com',
      description: 'Global fintech platform for cross-border money transfers and digital banking.',
      problem: 'Legacy system limitations affecting transaction processing speed and user experience.',
      solution: 'Redesigned architecture with microservices and implemented real-time transaction processing.',
      technologies: ['React', 'Python', 'C#', 'AWS', 'PostgreSQL'],
      outcome: 'Increased transaction processing speed by 300% and improved user satisfaction scores',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: {
        users: '100K+',
        improvement: '300%'
      }
    },
    {
      title: 'Parents.VIP',
      client: 'The Parent Inc.',
      link: 'https://www.parents.vip/viparent',
      description: 'Premium parenting platform connecting parents with expert childcare resources.',
      problem: 'Fragmented parenting resources and lack of personalized expert guidance.',
      solution: 'Created an integrated platform with expert matching, content management, and community features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      outcome: 'Connected 5K+ families with certified experts and achieved 95% user retention',
      image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: {
        users: '5K+',
        improvement: '95%'
      }
    },
    {
      title: 'Smartbot Hub',
      client: 'SmarTek21',
      link: 'https://smartek21.com/resource/smartbothub-company-overview/',
      description: 'AI-powered chatbot platform for business automation and customer service.',
      problem: 'Businesses needed intelligent automation solutions for customer interactions.',
      solution: 'Built a comprehensive bot management platform with AI integration and analytics.',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS'],
      outcome: 'Automated 80% of customer inquiries and reduced response times by 90%',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: {
        users: '2K+',
        improvement: '90%'
      }
    },
    {
      title: 'Baxter Healthcare Platform',
      client: 'Baxter International',
      link: 'https://www.baxter.com',
      description: 'Healthcare management system for medical device monitoring and patient care coordination.',
      problem: 'Complex medical device data integration and real-time patient monitoring across healthcare networks.',
      solution: 'Developed a comprehensive healthcare platform with device integration, real-time monitoring, and analytics.',
      technologies: ['React', 'C#', '.NET', 'SQL Server', 'Azure'],
      outcome: 'Improved patient monitoring efficiency by 50% and reduced device downtime by 35%',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800',
      metrics: {
        users: '15K+',
        improvement: '50%'
      }
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Portfolio & Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real projects, real results. See how I've helped businesses scale and succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-2">
                    <Users className="h-4 w-4 text-white" />
                    <span className="text-white font-semibold">{project.metrics.users}</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-white" />
                    <span className="text-white font-semibold">+{project.metrics.improvement}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">{project.client}</p>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge & Solution:</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                    <strong>Problem:</strong> {project.problem}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    <strong>Solution:</strong> {project.solution}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
                  <p className="text-orange-800 dark:text-orange-400 text-sm font-semibold">Outcome:</p>
                  <p className="text-orange-700 dark:text-orange-300 text-sm">{project.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}