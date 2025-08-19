import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Users, TrendingUp, CheckCircle, Pause, Play, Calendar, Code, Award } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { isDark } = useTheme();

  const projects = [
    {
      id: 'instarem',
      title: 'Instarem.com',
      client: 'NIUM',
      logo: 'https://nium.com/wp-content/uploads/2023/03/nium-logo-purple.svg',
      link: 'https://www.instarem.com',
      description: 'Flagship fintech product for cost-effective foreign remittances serving millions of users globally.',
      role: 'Technical Lead - Full Stack Development',
      duration: '2+ years',
      problem: 'Leading the technical development of a complex fintech platform handling millions in cross-border transactions with stringent regulatory requirements.',
      solution: 'Architected and led full-stack development using modern technologies, implementing robust security measures and scalable microservices architecture.',
      technologies: ['Node.js', 'React.js', 'PostgreSQL', 'Mocha', 'AWS'],
      outcome: 'Successfully delivered a platform processing millions in remittances with 99.9% uptime',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        users: '1M+',
        transactions: '$100M+',
        uptime: '99.9%'
      },
      features: [
        'Real-time cross-border payment processing',
        'Multi-currency support and conversion',
        'Advanced fraud detection and security',
        'Regulatory compliance across multiple countries',
        'Scalable microservices architecture'
      ],
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      id: 'oncocare',
      title: 'OncoCare Platform',
      client: 'General Electric (via Quest Global)',
      logo: 'https://logos-world.net/wp-content/uploads/2021/02/GE-Healthcare-Logo.png',
      link: 'https://www.gehealthcare.com/specialties/oncology-solutions/oncocare',
      description: 'Comprehensive oncology care assistant platform for clinicians to manage patient data and enable confident cancer care decision-making.',
      role: 'Senior Software Engineer - Team Lead',
      duration: '18 months',
      problem: 'Healthcare professionals needed a unified platform to aggregate and visualize complex cancer patient data for better treatment decisions.',
      solution: 'Developed a comprehensive platform with data visualization, patient management, and decision support tools using modern web technologies.',
      technologies: ['Node.js', 'PostgreSQL', 'React.js', 'AWS', 'Leadership'],
      outcome: 'Improved patient care coordination by 40% and reduced data processing time by 60%',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        users: '10K+',
        improvement: '40%',
        uptime: '99.8%'
      },
      features: [
        'Patient data aggregation and visualization',
        'Clinical decision support tools',
        'Real-time data synchronization',
        'Advanced reporting and analytics',
        'Cross-functional team leadership'
      ],
      gradient: 'from-blue-600 to-teal-600'
    },
    {
      id: 'parents-vip',
      title: 'Parents.VIP',
      client: 'The Parent Inc / TickleMedia',
      logo: 'https://images.squarespace-cdn.com/content/v1/5e7b8a1c4c5c5f5c5c5c5c5c/1585155555555-5C5C5C5C5C5C5C5C5C5C/parent-inc-logo.png',
      link: 'https://www.parents.vip',
      description: 'End-to-end influencer social media promotions, market surveys, and content creation process management platform.',
      role: 'SDE 3 - Full Stack Architect',
      duration: '2 years',
      problem: 'Managing complex influencer marketing campaigns, content creation workflows, and market research processes across multiple platforms.',
      solution: 'Architected a comprehensive platform with microservices and micro front-end architecture for scalable influencer management.',
      technologies: ['Node.js', 'MySQL', 'Mocha', 'Microservices', 'AWS', 'Redis', 'Python'],
      outcome: 'Streamlined influencer campaigns resulting in 200% increase in campaign efficiency',
      image: 'https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        campaigns: '5K+',
        efficiency: '200%',
        uptime: '99.7%'
      },
      features: [
        'End-to-end campaign management',
        'Influencer matching and analytics',
        'Content creation workflow automation',
        'Market survey and research tools',
        'Microservices architecture'
      ],
      gradient: 'from-pink-600 to-purple-600'
    },
    {
      id: 'rst-baxter',
      title: 'RST - Remote Service Tool',
      client: 'Baxter Healthcare (via Quest Global)',
      logo: 'https://logos-world.net/wp-content/uploads/2021/11/Baxter-Logo.png',
      link: 'https://www.baxter.com',
      description: 'Medical device support platform for remote diagnosis and troubleshooting of medical devices in healthcare facilities.',
      role: 'Senior Software Engineer',
      duration: '15 months',
      problem: 'Healthcare facilities needed remote diagnostic capabilities for medical devices to reduce downtime and improve patient care.',
      solution: 'Developed IoT-enabled remote diagnostic platform with real-time monitoring and automated troubleshooting capabilities.',
      technologies: ['Node.js', 'PostgreSQL', 'AWS IoT', 'Jest', 'TDD', 'AWS'],
      outcome: 'Reduced device downtime by 50% and improved remote diagnostic accuracy by 75%',
      image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        devices: '15K+',
        downtime: '-50%',
        accuracy: '95%'
      },
      features: [
        'Remote device monitoring and diagnostics',
        'IoT integration with medical devices',
        'Automated troubleshooting workflows',
        'Real-time alert systems',
        'Test-driven development approach'
      ],
      gradient: 'from-green-600 to-blue-600'
    },
    {
      id: 'smartbothub',
      title: 'SmartbotHub',
      client: 'Smartek21',
      logo: 'https://smartek21.com/wp-content/uploads/2021/03/smartek21-logo.png',
      link: 'https://smartek21.com',
      description: 'Chatbot-building platform with Natural Language Processing for creating conversational AI chatbots.',
      role: 'Full Stack Developer',
      duration: '12 months',
      problem: 'Businesses needed an easy-to-use platform to create and deploy intelligent chatbots without technical expertise.',
      solution: 'Built a comprehensive chatbot development platform with NLP capabilities and intuitive drag-and-drop interface.',
      technologies: ['AngularJS', 'Node.js', 'MySQL', 'AWS', 'NLP'],
      outcome: 'Enabled 500+ businesses to deploy chatbots, reducing customer service costs by 60%',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        bots: '500+',
        cost_reduction: '60%',
        accuracy: '90%'
      },
      features: [
        'Drag-and-drop chatbot builder',
        'Natural Language Processing integration',
        'Multi-channel deployment',
        'Analytics and performance tracking',
        'Custom workflow automation'
      ],
      gradient: 'from-orange-600 to-red-600'
    },
    {
      id: 'nerdspal',
      title: 'Nerdspal.com',
      client: 'Independent Project',
      logo: 'https://via.placeholder.com/200x80/4F46E5/FFFFFF?text=Nerdspal',
      link: '#',
      description: 'Q&A platform connecting students with professionals for academic collaboration and knowledge sharing.',
      role: 'Founder & Lead Developer',
      duration: '18 months',
      problem: 'Students needed a dedicated platform to get expert answers to academic questions from industry professionals.',
      solution: 'Created a comprehensive Q&A platform with gamification, expert verification, and collaborative learning features.',
      technologies: ['Node.js', 'AngularJS', 'Bootstrap', 'Google Cloud Platform'],
      outcome: 'Connected 10K+ students with 2K+ professionals, facilitating 50K+ Q&A interactions',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        students: '10K+',
        professionals: '2K+',
        interactions: '50K+'
      },
      features: [
        'Expert-verified Q&A system',
        'Gamification and reputation system',
        'Real-time collaboration tools',
        'Subject-wise categorization',
        'Mobile-responsive design'
      ],
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'nextauto',
      title: 'NextAuto',
      client: 'NextServices HSS Pvt Ltd',
      logo: 'https://via.placeholder.com/200x80/059669/FFFFFF?text=NextServices',
      link: '#',
      description: 'Internal process automation software for automating web scraping, data processing, reporting, and email workflows.',
      role: 'Software Developer',
      duration: '10 months',
      problem: 'Manual processes for data collection, processing, and reporting were time-consuming and error-prone.',
      solution: 'Developed comprehensive automation platform to streamline repetitive tasks and improve operational efficiency.',
      technologies: ['C#', 'JavaScript', 'SQL Server', '.NET Framework', 'ASP.NET MVC'],
      outcome: 'Automated 80% of manual processes, saving 40+ hours per week and reducing errors by 90%',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        automation: '80%',
        time_saved: '40h/week',
        error_reduction: '90%'
      },
      features: [
        'Automated web scraping workflows',
        'Data processing and transformation',
        'Automated reporting systems',
        'Email workflow automation',
        'Process monitoring and logging'
      ],
      gradient: 'from-emerald-600 to-teal-600'
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
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
            <Award className="h-5 w-5 text-purple-600" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Portfolio Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Enterprise Solutions & Innovation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Delivering scalable solutions for Fortune 500 companies and innovative startups across healthcare, fintech, and technology sectors
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">Trusted by Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setCurrentIndex(index)}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  index === currentIndex 
                    ? 'border-purple-500 scale-105 shadow-purple-200 dark:shadow-purple-900' 
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 hover:scale-102'
                }`}
              >
                <div className="h-16 flex items-center justify-center">
                  <img
                    src={project.logo}
                    alt={project.client}
                    className="max-w-full max-h-full object-contain filter transition-all duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center text-white font-bold text-xs text-center leading-tight px-2">${project.client}</div>`;
                      }
                    }}
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className={`text-sm font-medium transition-all duration-300 ${
                    index === currentIndex 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-600 dark:text-gray-400'
                  }`}>
                    {project.client}
                  </p>
                </div>
                {index === currentIndex && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project Showcase Card */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
            {/* Project Header with Gradient */}
            <div className={`bg-gradient-to-r ${currentProject.gradient} p-8 text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4 shadow-lg">
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
                      <p className="text-xl opacity-90 mb-2">{currentProject.client}</p>
                      <div className="flex items-center space-x-4 text-sm opacity-80">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{currentProject.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Code className="h-4 w-4" />
                          <span>{currentProject.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-xl transition-all duration-300 mt-6 lg:mt-0 w-fit group shadow-lg"
                  >
                    <span className="font-semibold">View Project</span>
                    <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
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
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-2xl p-6 border border-gray-200 dark:border-gray-600">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
                      Project Impact
                    </h4>
                    <div className="space-y-4">
                      {Object.entries(currentProject.metrics).map(([key, value], index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-600 dark:text-gray-300 font-medium capitalize">
                            {key.replace('_', ' ')}
                          </span>
                          <span className="font-bold text-2xl text-gray-900 dark:text-white">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Details Grid */}
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h4>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{currentProject.description}</p>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-blue-800 dark:text-blue-300 font-medium">{currentProject.role}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">The Challenge</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{currentProject.problem}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">The Solution</h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{currentProject.solution}</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
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
                          className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
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
              className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 group"
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
              className="p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 group"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              From Fortune 500 healthcare solutions to innovative fintech platforms, I deliver enterprise-grade applications that drive real business results.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}