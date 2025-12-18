import React from 'react';
import { Star } from 'lucide-react';

export default function ClientStories() {
  const testimonials = [
    {
      quote: "Nordible Solutions' technical expertise and leadership were instrumental in delivering our healthcare platform ahead of schedule. Their attention to detail and architectural vision made all the difference.",
      author: "Dr. Sarah Chen",
      role: "Product Manager",
      company: "GE Healthcare",
      rating: 5
    },
    {
      quote: "Working with Nordible Solutions was a game-changer for our fintech platform. Their deep understanding of scalable systems helped us process millions of transactions seamlessly.",
      author: "Michael Rodriguez",
      role: "CTO",
      company: "Nium",
      rating: 5
    },
    {
      quote: "Nordible Solutions' expertise in healthcare technology integration was invaluable. Their solution improved our device monitoring capabilities significantly.",
      author: "Dr. Amanda Foster",
      role: "CEO",
      company: "Baxter International",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by industry leaders for exceptional delivery
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-purple-600 dark:text-purple-400 text-sm">{testimonial.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}