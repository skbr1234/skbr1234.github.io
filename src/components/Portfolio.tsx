import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Users, TrendingUp, CheckCircle, Pause, Play, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDetailsExpanded, setIsDetailsExpanded] = useState(false);
  const { isDark } = useTheme();

  const projects = [
    {
      id: 'instarem',
      title: 'Instarem.com',
      client: 'NIUM',
      logo: '/images/logos/InstaRem_logo.svg',
      link: 'https://www.instarem.com',
      description: 'Flagship fintech product for cost-effective foreign remittances serving millions of users globally.',
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
      client: 'General Electric',
      logo: '/images/logos/GeneralElectric_logo.svg',
      link: 'https://www.gehealthcare.com/specialties/oncology-solutions/oncocare',
      description: 'Comprehensive oncology care assistant platform for clinicians to manage patient data and enable confident cancer care decision-making.',
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
      logo: '/images/logos/TheParentInc-logo.webp',
      link: 'https://www.parents.vip',
      description: 'End-to-end influencer social media promotions, market surveys, and content creation process management platform.',
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
      client: 'Vantive Healthcare',
      logo: '/images/logos/vantive_logo.png',
      link: 'https://www.vantive.com',
      description: 'Medical device support platform for remote diagnosis and troubleshooting of medical devices in healthcare facilities.',
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
      logo: '/images/logos/smartek21_logo.png',
      link: 'https://smartek21.com',
      description: 'Chatbot-building platform with Natural Language Processing for creating conversational AI chatbots.',
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
      id: 'daily-planner',
      title: 'Daily Planner',
      client: 'Personal Project',
      logo: '/images/logos/daily-planner-logo.svg',
      link: 'https://daily-planner.kabeershah.com',
      description: 'A clean, intuitive daily task management application with date navigation and local storage persistence.',
      problem: 'Need for a simple, distraction-free daily planner that works offline and maintains task history across different dates.',
      solution: 'Built a lightweight HTML/JavaScript application with local storage for data persistence and intuitive date navigation.',
      technologies: ['HTML5', 'JavaScript', 'Tailwind CSS', 'Local Storage'],
      outcome: 'Created a fully functional daily planner with offline capabilities and cross-date task management',
      image: 'https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&w=1200',
      metrics: {
        features: '5+',
        storage: 'Offline',
        responsive: '100%'
      },
      features: [
        'Date-based task organization',
        'Local storage persistence',
        'Task completion tracking',
        'Inline task editing',
        'Responsive design'
      ],
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'nextauto',
      title: 'NextAuto',
      client: 'NextServices HSS Pvt Ltd',
      logo: '/images/logos/nextservices_logo.png',
      link: 'https://nextservices.com/',
      description: 'Internal process automation software for automating web scraping, data processing, reporting, and email workflows.',
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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



        {/* Project Showcase Card */}
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 group -translate-x-16"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
          </button>

          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 overflow-hidden flex-1 mx-20">
            {/* Project Header with Background Image */}
            <div className="relative p-6 text-white overflow-hidden" style={{ backgroundImage: `url(${currentProject.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center p-3 shadow-lg">
                      <img
                        src={currentProject.logo}
                        alt={currentProject.client}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-full h-full bg-white/30 rounded-xl flex items-center justify-center text-white font-bold text-sm">${currentProject.client.charAt(0)}</div>`;
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
                    className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm px-6 py-3 rounded-lg transition-all duration-300 mt-4 lg:mt-0 w-fit group shadow-lg"
                  >
                    <span className="font-semibold">View Project</span>
                    <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              {/* Project Overview and Image */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Project Overview</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{currentProject.description}</p>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Results and Impact */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 border border-green-200 dark:border-green-800">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        Results
                      </h5>
                      <p className="text-gray-700 dark:text-gray-300 font-medium">{currentProject.outcome}</p>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {currentProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
                      <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                        <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
                        Impact
                      </h5>
                      <div className="space-y-2">
                        {Object.entries(currentProject.metrics).map(([key, value], index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-xs text-gray-600 dark:text-gray-300 capitalize">
                              {key.replace('_', ' ')}
                            </span>
                            <span className="font-bold text-sm text-gray-900 dark:text-white">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Collapsible Details Section */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <button
                  onClick={() => setIsDetailsExpanded(!isDetailsExpanded)}
                  className="flex items-center justify-between w-full text-left p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">Project Details</span>
                  {isDetailsExpanded ? (
                    <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  )}
                </button>
                
                {isDetailsExpanded && (
                  <div className="mt-4 grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">The Challenge</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{currentProject.problem}</p>
                      </div>
                      
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">The Solution</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{currentProject.solution}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h5>
                      <ul className="space-y-2">
                        {currentProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700 group translate-x-16"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
          </button>

          {/* Play/Pause Control */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <button
              onClick={togglePause}
              className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group backdrop-blur-sm"
            >
              {isPaused ? (
                <>
                  <Play className="h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 font-medium group-hover:text-purple-600">Play</span>
                </>
              ) : (
                <>
                  <Pause className="h-4 w-4 text-gray-600 dark:text-gray-300 group-hover:text-purple-600" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 font-medium group-hover:text-purple-600">Pause</span>
                </>
              )}
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 right-6 z-10">
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-white scale-125 shadow-lg'
                      : 'bg-white/50 hover:bg-white/80 hover:scale-110'
                  }`}
                />
              ))}
            </div>
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