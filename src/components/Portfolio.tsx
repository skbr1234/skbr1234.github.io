import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Users, TrendingUp, CheckCircle, Pause, Play } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { isDark } = useTheme();

  const projects = [
    {
      id: 'ge-healthcare',
      title: 'OncoCare Platform',
      client: 'GE Healthcare',
      logo: 'https://www.gehealthcare.com/-/jssmedia/gehc/global/logo/ge-healthcare-logo.svg',
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
    {
      id: 'nium',
      title: 'Instarem.com',
      client: 'Nium (formerly InstaReM)',
      logo: 'https://www.instarem.com/assets/images/instarem-logo.svg',
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
    {
      id: 'vantive',
      title: 'Healthcare Platform',
      client: 'Vantive',
      logo: 'https://vantive.com/wp-content/uploads/2024/12/vantive-logo.svg',
      link: 'https://vantive.com',
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
    {
      id: 'parent-inc',
      title: 'Parents.VIP',
      client: 'The Parent Inc.',
      logo: 'https://theparentinc.com/wp-content/uploads/2024/01/the-parent-inc-logo.svg',
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
    {
      id: 'smartek21',
      title: 'Smartbot Hub',
      client: 'SmarTek21',
      logo: 'https://smartek21.com/wp-content/uploads/2021/03/smartek21-logo.png',
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
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="py-12 bg-gradient-to-br from-purple-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the innovative projects I've delivered for leading companies
          </p>
        </div>

        {/* Project Details Carousel */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Project Header */}
            <div className="bg-gradient-to-r from-purple-600 to-orange-600 p-6 text-white">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-8 flex items-center justify-center bg-white/20 rounded-lg">
                    <img
                      src={currentProject.logo}
                      alt={currentProject.client}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-12 h-8 bg-white/30 rounded-lg flex items-center justify-center text-white font-bold text-xs">${currentProject.client}</div>`;
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{currentProject.title}</h3>
                    <p className="text-lg opacity-90">{currentProject.client}</p>
                  </div>
                </div>
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg transition-all duration-300 mt-3 lg:mt-0 w-fit"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Hero Image and Metrics */}
              <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-48 lg:h-56 object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Project Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-purple-600" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">Active Users</span>
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">{currentProject.metrics.users}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-4 w-4 text-orange-600" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">Improvement</span>
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">+{currentProject.metrics.improvement}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">Uptime</span>
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">{currentProject.metrics.uptime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Project Overview</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{currentProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">The Challenge</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{currentProject.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">The Solution</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{currentProject.solution}</p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-orange-50 dark:from-purple-900/20 dark:to-orange-900/20 rounded-xl p-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Outcome</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">{currentProject.outcome}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {currentProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm font-medium shadow-sm"
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

          {/* Carousel Controls */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>

            <button
              onClick={togglePause}
              className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {isPaused ? (
                <>
                  <Play className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Play</span>
                </>
              ) : (
                <>
                  <Pause className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Pause</span>
                </>
              )}
            </button>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
            >
              <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {projects.map((_, index) => (
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

        <div className="text-center mt-8">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            From Fortune 500 companies to innovative startups, I deliver scalable solutions that drive results
          </p>
        </div>
      </div>
    </section>
  );
}