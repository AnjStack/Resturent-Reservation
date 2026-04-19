import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex text-gray-900">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white relative">
         <Link to="/" className="absolute top-8 left-8 text-indigo-600 font-extrabold tracking-tight text-xl">LuxeDine</Link>
         
         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md w-full">
            <h1 className="text-4xl font-extrabold mb-2">Welcome Back</h1>
            <p className="text-gray-500 mb-8 text-lg">Please enter your details to sign in.</p>
            
            <div className="space-y-5">
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" placeholder="hello@luxedine.com" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-shadow" />
               </div>
               <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-shadow" />
               </div>
               
               <div className="flex items-center justify-between mt-2">
                 <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-indigo-600 w-4 h-4 cursor-pointer" />
                    <span className="text-sm font-semibold text-gray-700">Remember me</span>
                 </label>
                 <a href="#" className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors">Forgot password?</a>
               </div>

               <Link to="/">
                 <button className="w-full bg-indigo-600 text-white font-bold py-3.5 rounded-xl hover:bg-indigo-700 transition-all mt-6 shadow-lg shadow-indigo-200">
                   Sign In
                 </button>
               </Link>
            </div>
            
            <p className="text-center mt-10 text-sm text-gray-600 font-medium">
               Don't have an account? <a href="#" className="text-indigo-600 font-bold hover:underline">Sign up for free</a>
            </p>
         </motion.div>
      </div>
      <div className="hidden md:block w-1/2 bg-indigo-900 relative">
         <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1920&q=80" alt="Dining" className="w-full h-full object-cover opacity-60" />
         <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply" />
         <div className="absolute inset-0 flex flex-col justify-end p-12 bg-gradient-to-t from-gray-900/80 to-transparent">
            <h2 className="text-white font-extrabold text-4xl mb-4 leading-tight">Elevate Your Dining Experience</h2>
            <p className="text-white/80 text-xl font-medium max-w-lg">Reserve a table at the world's most prestigious culinary destinations instantly.</p>
         </div>
      </div>
    </div>
  );
}
