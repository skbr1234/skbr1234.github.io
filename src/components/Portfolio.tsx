import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PortfolioProps {
  onProjectSelect: (projectId: string) => void;
}

export default function Portfolio({ onProjectSelect }: PortfolioProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const companies = [
    {
      id: 'ge-healthcare',
      name: 'GE Healthcare',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/GE_Healthcare_logo.svg/320px-GE_Healthcare_logo.svg.png',
      project: 'OncoCare Platform',
      description: 'Comprehensive oncology care management platform'
    },
    {
      id: 'nium',
      name: 'Nium',
      logo: 'https://assets-global.website-files.com/5f973c970bea5548ad4287ef/6087f2c739e0e143d0a2b3e5_nium-logo-purple.svg',
      project: 'Instarem.com',
      description: 'Global fintech platform for cross-border payments'
    },
    {
      id: 'baxter',
      name: 'Baxter International',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Baxter_International_Logo.svg/320px-Baxter_International_Logo.svg.png',
      project: 'Healthcare Platform',
      description: 'Medical device monitoring and patient care coordination'
    },
    {
      id: 'parent-inc',
      name: 'The Parent Inc.',
      logo: 'https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/erkxwhl1gqjfqgz2o3qc',
      project: 'Parents.VIP',
      description: 'Premium parenting platform with expert resources'
    },
    {
      id: 'smartek21',
      name: 'SmarTek21',
      logo: 'https://smartek21.com/wp-content/uploads/2021/03/smartek21-logo.png',
      project: 'Smartbot Hub',
      description: 'AI-powered chatbot platform for business automation'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % companies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + companies.length) % companies.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleCompanies = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % companies.length;
      visible.push({ ...companies[index], position: i });
    }
    return visible;
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-purple-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Click on any company logo to explore the projects I've delivered
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="flex items-center justify-center space-x-8 mb-12">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="flex items-center space-x-6">
              {getVisibleCompanies().map((company) => (
                <div
                  key={company.id}
                  className={`transition-all duration-500 cursor-pointer ${
                    company.position === 1
                      ? 'scale-110 z-10'
                      : 'scale-90 opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => onProjectSelect(company.id)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 group">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-32 h-20 flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<div class="w-32 h-20 bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">${company.name}</div>`;
                            }
                          }}
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">
                          {company.project}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          {company.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 dark:border-gray-700"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2">
            {companies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-purple-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            From Fortune 500 companies to innovative startups, I deliver scalable solutions that drive results
          </p>
        </div>
      </div>
    </section>
  );
}