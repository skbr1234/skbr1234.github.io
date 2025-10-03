import React from 'react';
import { DollarSign, TrendingUp, Clock, Shield, Users, Zap } from 'lucide-react';

export default function BusinessBenefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Increase Revenue',
      description: 'Modern websites convert 3x better than outdated ones',
      metric: '+150% Sales',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Automated processes reduce manual work by hours daily',
      metric: '40h/week Saved',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Scale Faster',
      description: 'Cloud-native solutions that grow with your business',
      metric: '10x Scalability',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Shield,
      title: 'Reduce Costs',
      description: 'Efficient code and architecture minimize hosting costs',
      metric: '-60% Expenses',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Better UX',
      description: 'Intuitive interfaces increase user satisfaction',
      metric: '+90% Retention',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Faster Performance',
      description: 'Optimized applications load 5x faster',
      metric: '<2s Load Time',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Real Business Impact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See how my solutions deliver measurable results for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group">
              <div className={`bg-gradient-to-r ${benefit.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {benefit.description}
              </p>
              
              <div className={`bg-gradient-to-r ${benefit.color} text-white px-4 py-2 rounded-lg font-bold text-center`}>
                {benefit.metric}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Let's discuss how these benefits can apply to your specific project and goals.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105"
          >
Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}