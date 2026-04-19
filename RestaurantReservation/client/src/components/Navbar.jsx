import React from 'react';
import { Utensils, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Utensils className="h-8 w-8 text-indigo-600" />
            <span className="font-extrabold text-2xl tracking-tight text-gray-900">
              Luxe<span className="text-indigo-600">Dine</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Home</Link>
            <Link to="/restaurants" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">Restaurants</Link>
            <Link to="/reservations" className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">My Reservations</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-indigo-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/login" className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-all shadow-md">
              <User className="h-4 w-4" />
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
