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
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/GE-Healthcare-Logo.png',
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
      logo: 'https://assets-global.website-files.com/5f973c970bea5548ad4287ef/5f973c970bea554d8d4288a7_nium-logo-purple.svg',
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
      id: 'baxter',
      title: 'Healthcare Platform',
      client: 'Baxter International',
      logo: 'https://logos-world.net/wp-content/uploads/2021/11/Baxter-Logo.png',
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
    {
      id: 'parent-inc',
      title: 'Parents.VIP',
      client: 'The Parent Inc.',
      logo: 'https://images.squarespace-cdn.com/content/v1/5e7b8a1c4c5c5f5c5c5c5c5c/1585155555555-5C5C5C5C5C5C5C5C5C5C/parent-inc-logo.png',
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
      const interval = setInterval(nextSlide, 8000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const currentProject = projects[currentIndex];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Delivering innovative solutions for Fortune 500 companies and growing startups
          </p>
        </div>

        {/* Company Logos Carousel */}
        <div className="mb-16">
          <div className="flex justify-center items-center space-x-8 mb-8">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative group transition-all duration-300 ${
                  index === currentIndex 
                    ? 'scale-110 opacity-100' 
                    : 'scale-90 opacity-60 hover:opacity-80 hover:scale-95'
                }`}
              >
                <div className={`w-24 h-24 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center p-4 border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-purple-500 shadow-purple-200 dark:shadow-purple-900' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'
                }`}>
                  <img
                    src={project.logo}
                    alt={project.client}
                    className="max-w-full max-h-full object-contain filter transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-sm text-center leading-tight">${project.client}</div>`;
                      }
                    }}
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className={`text-sm font-medium transition-all duration-300 ${
                    index === currentIndex 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {project.client}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Project Details Card */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            {/* Project Header */}
            <div className="bg-gradient-to-r from-purple-600 via-purple-700 to-orange-600 p-8 text-white">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center p-3">
                    <img
                      src={currentProject.logo}
                      alt={currentProject.client}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<div class="w-full h-full bg-white/30 rounded-xl flex items-center justify-center text-white font-bold text-lg">${currentProject.client.charAt(0)}</div>`;
                        }
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{currentProject.title}</h3>
                    <p className="text-xl opacity-90">{currentProject.client}</p>
                  </div>
                </div>
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 mt-4 lg:mt-0 w-fit group"
                >
                  <span className="font-semibold">View Live Project</span>
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
              {/* Hero Image and Metrics */}
              <div className="grid lg:grid-cols-3 gap-8 mb-10">
                <div className="lg:col-span-2">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-64 lg:h-72 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-purple-50 to-orange-50 dark:from-purple-900/20 dark:to-orange-900/20 rounded-2xl p-6 border border-purple-100 dark:border-purple-800">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                      Project Impact
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Users className="h-5 w-5 text-purple-600" />
                          <span className="text-gray-600 dark:text-gray-300 font-medium">Active Users</span>
                        </div>
                        <span className="font-bold text-2xl text-gray-900 dark:text-white">{currentProject.metrics.users}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-orange-600" />
                          <span className="text-gray-600 dark:text-gray-300 font-medium">Improvement</span>
                        </div>
                        <span className="font-bold text-2xl text-green-600">+{currentProject.metrics.improvement}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <span className="text-gray-600 dark:text-gray-300 font-medium">Uptime</span>
                        </div>
                        <span className="font-bold text-2xl text-gray-900 dark:text-white">{currentProject.metrics.uptime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details Grid */}
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h4>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{currentProject.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">The Challenge</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{currentProject.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">The Solution</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{currentProject.solution}</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-green-100 dark:border-green-800">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                      Outcome & Results
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-lg">{currentProject.outcome}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {currentProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-3">
                      {currentProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
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
          <div className="flex justify-center items-center space-x-6 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 group"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
            </button>

            <button
              onClick={togglePause}
              className="flex items-center space-x-3 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            >
              {isPaused ? (
                <>
                  <Play className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-purple-600">Play</span>
                </>
              ) : (
                <>
                  <Pause className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
                  <span className="text-gray-600 dark:text-gray-300 font-medium group-hover:text-purple-600">Pause</span>
                </>
              )}
            </button>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 group"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-3 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-600 scale-125 shadow-lg'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-400 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From Fortune 500 healthcare giants to innovative fintech startups, I deliver scalable, 
            enterprise-grade solutions that drive measurable business results and exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
}