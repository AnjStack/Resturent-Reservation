import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 text-center mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold tracking-tight mb-4">Luxe<span className="text-indigo-400">Dine</span></h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">Elevating your dining experiences with seamless reservations and exclusive access to the world's finest tables.</p>
        <div className="flex justify-center space-x-6 text-sm text-gray-400">
           <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-white transition-colors">Contact Us</a>
        </div>
        <p className="text-gray-600 text-xs mt-8">&copy; 2026 LuxeDine Systems. All rights reserved.</p>
      </div>
    </footer>
  );
}
