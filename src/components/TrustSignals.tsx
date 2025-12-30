import React from 'react';
import { Award, Users, TrendingUp } from 'lucide-react';

export default function TrustSignals() {
  const stats = [
    // {
    //   icon: Code,
    //   number: '13+',
    //   label: 'Years Experience',
    //   description: 'Building web applications'
    // },
    {
      icon: Users,
      number: '50+',
      label: 'Projects Completed',
      description: 'Successful deliveries'
    },
    {
      icon: TrendingUp,
      number: '1M+',
      label: 'Users Served',
      description: 'Across all platforms'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Client Satisfaction',
      description: 'On-time delivery rate'
    }
  ];

  const companies = [
    { name: 'General Electric', logo: '/images/logos/GeneralElectric_logo.svg' },
    { name: 'NIUM', logo: '/images/logos/InstaRem_logo.svg' },
    { name: 'Vantive', logo: '/images/logos/vantive_logo.jpg' },
    { name: 'The Parent Inc', logo: '/images/logos/TheParentInc-logo.webp' },
    { name: 'Smartek21', logo: '/images/logos/smartek21_logo.png' },
    { name: 'NextServices', logo: '/images/logos/nextservices_logo.png' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Companies */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Worked with Leading Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
            {companies.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-16">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}