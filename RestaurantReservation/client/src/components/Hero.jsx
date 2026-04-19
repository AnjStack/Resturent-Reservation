import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1920&q=80" 
          alt="Fine dining restaurant" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight"
        >
          Book Your Perfect <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Dining Experience
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Discover and reserve the best tables at exclusive restaurants. Instant confirmation, real-time availability.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-4 md:p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
              <MapPin className="text-indigo-600 flex-shrink-0" />
              <input type="text" placeholder="Location, Restaurant" className="bg-transparent border-none outline-none w-full text-gray-900 placeholder-gray-500 font-medium" />
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
              <Calendar className="text-indigo-600 flex-shrink-0" />
              <input type="date" className="bg-transparent border-none outline-none w-full text-gray-900 font-medium" />
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
              <Clock className="text-indigo-600 flex-shrink-0" />
              <select className="bg-transparent border-none outline-none w-full text-gray-900 font-medium">
                <option>19:00</option>
                <option>19:30</option>
                <option>20:00</option>
                <option>20:30</option>
              </select>
            </div>
            <button className="bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              Find a Table
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
