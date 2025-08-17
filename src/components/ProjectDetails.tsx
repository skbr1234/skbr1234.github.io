import React from 'react';
import { ArrowLeft, ExternalLink, Users, TrendingUp, CheckCircle } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectDetailsProps {
  projectId: string;
  onBack: () => void;
}

export default function ProjectDetails({ projectId, onBack }: ProjectDetailsProps) {
  const { isDark } = useTheme();

  const projects = {
    'ge-healthcare': {
      title: 'OncoCare Platform',
      client: 'GE Healthcare',
      link: 'https://www.gehealthcare.com/specialties/oncology-solutions/oncocare',
      description: 'Comprehensive oncology care management platform serving healthcare providers worldwide.',
      problem: 'Complex patient data management and treatment tracking across multiple healthcare facilities required a unified, scalable solution.',
      solution: 'Built a scalable web application with real-time data synchronization, advanced reporting, and seamless integration with existing healthcare systems.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Redis'],
      outcome: 'Improved patient care coordination by 40% and reduced administrative overhead by 60%',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        users: '10K+',
        improvement: '40%',
        uptime: '99.9%'
      },
      features: [
        'Real-time patient data synchronization',
        'Advanced treatment tracking and analytics',
        'Multi-facility integration',
        'Automated reporting and compliance',
        'Mobile-responsive design for healthcare professionals'
      ]
    },
    'nium': {
      title: 'Instarem.com',
      client: 'Nium (formerly InstaReM)',
      link: 'https://www.instarem.com',
      description: 'Global fintech platform for cross-border money transfers and digital banking.',
      problem: 'Legacy system limitations affecting transaction processing speed and user experience in the competitive fintech market.',
      solution: 'Redesigned architecture with microservices and implemented real-time transaction processing with enhanced security measures.',
      technologies: ['React', 'Python', 'C#', 'AWS', 'PostgreSQL', 'Redis', 'Docker'],
      outcome: 'Increased transaction processing speed by 300% and improved user satisfaction scores significantly',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        users: '100K+',
        improvement: '300%',
        uptime: '99.95%'
      },
      features: [
        'Real-time cross-border payment processing',
        'Multi-currency support and conversion',
        'Advanced fraud detection and security',
        'Regulatory compliance across multiple countries',
        'Mobile-first user experience'
      ]
    },
    'baxter': {
      title: 'Healthcare Platform',
      client: 'Baxter International',
      link: 'https://www.baxter.com',
      description: 'Healthcare management system for medical device monitoring and patient care coordination.',
      problem: 'Complex medical device data integration and real-time patient monitoring across healthcare networks needed streamlining.',
      solution: 'Developed a comprehensive healthcare platform with device integration, real-time monitoring, and predictive analytics.',
      technologies: ['React', 'C#', '.NET', 'SQL Server', 'Azure', 'SignalR'],
      outcome: 'Improved patient monitoring efficiency by 50% and reduced device downtime by 35%',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        users: '15K+',
        improvement: '50%',
        uptime: '99.8%'
      },
      features: [
        'Real-time medical device monitoring',
        'Predictive maintenance alerts',
        'Patient care coordination dashboard',
        'Integration with hospital management systems',
        'Compliance with healthcare regulations'
      ]
    },
    'parent-inc': {
      title: 'Parents.VIP',
      client: 'The Parent Inc.',
      link: 'https://www.parents.vip/viparent',
      description: 'Premium parenting platform connecting parents with expert childcare resources.',
      problem: 'Fragmented parenting resources and lack of personalized expert guidance made it difficult for parents to access quality advice.',
      solution: 'Created an integrated platform with expert matching, content management, and community features for personalized parenting support.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Socket.io'],
      outcome: 'Connected 5K+ families with certified experts and achieved 95% user retention rate',
      image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        users: '5K+',
        improvement: '95%',
        uptime: '99.7%'
      },
      features: [
        'Expert matching algorithm',
        'Video consultation platform',
        'Personalized content recommendations',
        'Community forums and support groups',
        'Progress tracking for child development'
      ]
    },
    'smartek21': {
      title: 'Smartbot Hub',
      client: 'SmarTek21',
      link: 'https://smartek21.com/resource/smartbothub-company-overview/',
      description: 'AI-powered chatbot platform for business automation and customer service.',
      problem: 'Businesses needed intelligent automation solutions for customer interactions without complex technical implementation.',
      solution: 'Built a comprehensive bot management platform with AI integration, natural language processing, and detailed analytics.',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'MongoDB'],
      outcome: 'Automated 80% of customer inquiries and reduced response times by 90%',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        users: '2K+',
        improvement: '90%',
        uptime: '99.6%'
      },
      features: [
        'AI-powered natural language processing',
        'Multi-channel bot deployment',
        'Advanced analytics and reporting',
        'Custom workflow automation',
        'Integration with popular business tools'
      ]
    }
  };

  const project = projects[projectId as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Not Found</h2>
          <button
            onClick={onBack}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Portfolio</span>
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
              <p className="text-xl text-purple-600 dark:text-purple-400 mt-1">{project.client}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <span>View Live</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image and Metrics */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Metrics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-600 dark:text-gray-300">Active Users</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">{project.metrics.users}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-600 dark:text-gray-300">Improvement</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">+{project.metrics.improvement}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-600 dark:text-gray-300">Uptime</span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">{project.metrics.uptime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Challenge</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.problem}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Solution</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.solution}</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-orange-50 dark:from-purple-900/20 dark:to-orange-900/20 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Outcome</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{project.outcome}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}