import React from 'react';
import { Check, ArrowRight, Zap } from 'lucide-react';

export default function Pricing() {
  const packages = [
    {
      name: 'Website',
      price: '₹40,000',
      duration: '1-2 weeks',
      description: 'Perfect for small businesses and personal brands',
      features: [
        'FREE Consultation Call',
        'Responsive Design',
        'SEO Optimization',
        'Contact Forms',
        'Basic Analytics',
        '3 Revisions',
        '30 Days Support'
      ],
      popular: false
    },
    {
      name: 'E-Commerce',
      price: '₹1,20,000',
      duration: '3-4 weeks',
      description: 'Complete online store with payment integration',
      features: [
        'FREE Consultation Call',
        'Product Management',
        'Payment Gateway',
        'Inventory System',
        'Order Management',
        'Mobile Optimized',
        '90 Days Support'
      ],
      popular: true
    },
    {
      name: 'Web Application',
      price: '₹2,40,000+',
      duration: '6-12 weeks',
      description: 'Custom web applications with advanced features',
      features: [
        'FREE Consultation Call',
        'Custom Development',
        'Database Design',
        'API Integration',
        'User Authentication',
        'Admin Dashboard',
        '6 Months Support'
      ],
      popular: false
    }
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-6 py-3 rounded-full mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 dark:text-green-300 font-semibold">FREE 30-min Consultation Call</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose the package that fits your needs. All projects start with a free consultation call to understand your requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-2xl ${pkg.popular ? 'border-purple-500 scale-105' : 'border-gray-200 dark:border-gray-700'}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Zap className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">{pkg.price}</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">{pkg.duration}</div>
                <p className="text-gray-600 dark:text-gray-300">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToConsultation}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${pkg.popular ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'}`}
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need something custom? Let's start with a free 30-minute consultation call.
          </p>
          <button
            onClick={scrollToConsultation}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}