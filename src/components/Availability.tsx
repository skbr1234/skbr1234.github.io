import React from 'react';
import { Clock, Calendar, MessageCircle, Globe } from 'lucide-react';

export default function Availability() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-white text-center">
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-3">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-1">Available Now</h3>
            <p className="text-sm opacity-90">Taking new projects</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-3">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-1">24h Response</h3>
            <p className="text-sm opacity-90">Quick replies guaranteed</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-3">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-1">IST Timezone</h3>
            <p className="text-sm opacity-90">UTC +5:30</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/20 p-3 rounded-full mb-3">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-1">Free Consultation</h3>
            <p className="text-sm opacity-90">30-min discovery call</p>
          </div>
        </div>
      </div>
    </section>
  );
}