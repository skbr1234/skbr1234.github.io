import React, { useState } from 'react';
import { Check, ArrowRight, Zap, ChevronDown, ChevronUp } from 'lucide-react';

export default function Pricing() {
  const [expandedPackage, setExpandedPackage] = useState<number | null>(null);

  const packages = [
    {
      name: 'Website',
      price: '₹40,000',
      originalPrice: '₹50,000',
      duration: '2-3 weeks',
      description: 'Perfect for small businesses and personal brands',
      features: [
        'FREE Consultation Call',
        'Responsive Design (₹8,000)',
        'SEO Optimization (₹6,000)',
        'Contact Forms (₹4,000)',
        'Basic Analytics (₹3,000)',
        'Content Management (₹5,000)',
        'SSL Certificate Setup (₹2,000)',
        '3 Revisions (₹6,000)',
        '30 Days Support (₹4,000)',
        'Domain & Hosting Setup (₹2,000)'
      ],
      breakdown: [
        { item: 'Design & Development', price: '₹25,000' },
        { item: 'SEO & Analytics Setup', price: '₹9,000' },
        { item: 'Testing & Deployment', price: '₹4,000' },
        { item: 'Support & Revisions', price: '₹2,000' }
      ],
      popular: false,
      savings: '₹10,000'
    },
    {
      name: 'E-Commerce',
      price: '₹1,20,000',
      originalPrice: '₹1,50,000',
      duration: '6-8 weeks',
      description: 'Complete online store with payment integration',
      features: [
        'FREE Consultation Call',
        'Product Management System (₹25,000)',
        'Payment Gateway Integration (₹20,000)',
        'Inventory Management (₹18,000)',
        'Order Management Dashboard (₹15,000)',
        'Customer Account System (₹12,000)',
        'Shopping Cart & Checkout (₹15,000)',
        'Mobile Optimized Design (₹10,000)',
        'Email Notifications (₹8,000)',
        'Admin Dashboard (₹12,000)',
        '90 Days Support (₹15,000)'
      ],
      breakdown: [
        { item: 'E-commerce Development', price: '₹70,000' },
        { item: 'Payment & Security Setup', price: '₹25,000' },
        { item: 'Admin Panel & Features', price: '₹15,000' },
        { item: 'Testing & Support', price: '₹10,000' }
      ],
      popular: true,
      savings: '₹30,000'
    },
    {
      name: 'Web Application',
      price: '₹2,40,000+',
      originalPrice: '₹3,00,000+',
      duration: '12-24 weeks',
      description: 'Custom web applications with advanced features',
      features: [
        'FREE Consultation Call',
        'Custom Development (₹80,000)',
        'Database Design & Setup (₹30,000)',
        'API Development (₹25,000)',
        'User Authentication System (₹20,000)',
        'Admin Dashboard (₹25,000)',
        'Third-party Integrations (₹20,000)',
        'Advanced Security Features (₹15,000)',
        'Performance Optimization (₹10,000)',
        'Documentation (₹8,000)',
        '6 Months Support (₹25,000)'
      ],
      breakdown: [
        { item: 'Custom Application Development', price: '₹1,50,000' },
        { item: 'Database & API Development', price: '₹55,000' },
        { item: 'Security & Authentication', price: '₹35,000' },
        { item: 'Testing, Deployment & Support', price: '₹30,000' }
      ],
      popular: false,
      savings: '₹60,000+'
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
          <div className="inline-flex items-center space-x-2 bg-red-100 dark:bg-red-900/30 px-6 py-3 rounded-full mb-4">
            <span className="text-red-700 dark:text-red-300 font-semibold">🔥 Limited Time: Save up to ₹60,000</span>
          </div>
          <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 px-6 py-3 rounded-full mb-6">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-700 dark:text-green-300 font-semibold">FREE 30-min Consultation Call</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
            Choose the package that fits your needs. All projects start with a free consultation call to understand your requirements.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg max-w-2xl mx-auto">
            <p className="text-blue-800 dark:text-blue-300 text-sm font-medium">
              ✅ 100% Money-Back Guarantee • ✅ Join 50+ Satisfied Clients • ✅ On-Time Delivery Promise
            </p>
          </div>
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
                <div className="mb-2">
                  <span className="text-2xl text-gray-400 line-through mr-2">{pkg.originalPrice}</span>
                  <div className="text-4xl font-bold text-purple-600">{pkg.price}</div>
                  <div className="text-green-600 font-semibold text-sm">Save {pkg.savings}</div>
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">{pkg.duration}</div>
                <p className="text-gray-600 dark:text-gray-300">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mb-6">
                <button
                  onClick={() => setExpandedPackage(expandedPackage === index ? null : index)}
                  className="flex items-center justify-center w-full text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors"
                >
                  <span>View Price Breakdown</span>
                  {expandedPackage === index ? 
                    <ChevronUp className="h-4 w-4 ml-1" /> : 
                    <ChevronDown className="h-4 w-4 ml-1" />
                  }
                </button>
                
                {expandedPackage === index && (
                  <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm">Cost Breakdown:</h4>
                    <ul className="space-y-2">
                      {pkg.breakdown.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-300">{item.item}</span>
                          <span className="font-medium text-gray-900 dark:text-white">{item.price}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-200 dark:border-gray-600 mt-3 pt-3">
                      <div className="flex justify-between font-semibold">
                        <span className="text-gray-900 dark:text-white">Total Value:</span>
                        <span className="text-purple-600">{pkg.originalPrice}</span>
                      </div>
                      <div className="flex justify-between font-bold text-green-600">
                        <span>Your Price:</span>
                        <span>{pkg.price}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

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
          <div className="bg-green-100 dark:bg-green-900/30 p-6 rounded-lg max-w-2xl mx-auto mb-6">
            <p className="text-green-800 dark:text-green-300 text-lg font-semibold mb-2">
              💰 Refer a client and earn ₹5,000 when they book a project!
            </p>
            <p className="text-green-700 dark:text-green-400 text-sm">
              Know someone who needs a website? Share our contact and earn cash rewards.
            </p>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need something custom? Let's start with a free 30-minute consultation call.
          </p>
          <button
            onClick={scrollToConsultation}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Free Consultation
          </button>
          
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>⏰ Book this month and save an additional ₹10,000 on any package</p>
          </div>
        </div>
      </div>
    </section>
  );
}