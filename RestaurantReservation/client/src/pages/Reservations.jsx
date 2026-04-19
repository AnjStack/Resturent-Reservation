import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, MapPin, Users, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('luxury_reservations') || '[]');
    setReservations(saved);
  }, []);

  const handleCancel = (id) => {
    const updated = reservations.filter(res => res.id !== id);
    setReservations(updated);
    localStorage.setItem('luxury_reservations', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-28 px-4 max-w-5xl mx-auto w-full mb-12">
         <div className="flex justify-between items-end mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900">My Reservations</h1>
            <span className="text-indigo-600 font-bold bg-indigo-50 px-4 py-2 rounded-lg">{reservations.length} Active Bookings</span>
         </div>
         
         {reservations.length === 0 ? (
           <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">No Upcoming Reservations</h2>
              <p className="text-gray-500 mb-8 text-lg text-balance">You haven't booked any tables yet. Discover top restaurants and make your first dining reservation.</p>
              <Link to="/restaurants" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg">Explore Restaurants</Link>
           </div>
         ) : (
           <div className="grid grid-cols-1 gap-6">
              {reservations.map(res => (
                <div key={res.id} className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 overflow-hidden flex flex-col md:flex-row transition-transform transform hover:-translate-y-1">
                  <img src={res.image} className="md:w-64 h-56 md:h-auto object-cover" alt="Restaurant interior" />
                  <div className="p-6 flex-grow flex flex-col justify-between">
                     <div>
                       <div className="flex justify-between items-start mb-2">
                         <h3 className="text-2xl font-bold text-gray-900">{res.restaurantName}</h3>
                         <span className="bg-green-100 text-green-700 font-bold text-xs px-3 py-1.5 rounded-full uppercase tracking-wider">Confirmed</span>
                       </div>
                       <p className="text-gray-500 flex items-center gap-2 mb-6 font-medium"><MapPin className="w-4 h-4"/> {res.location}</p>
                       
                       <div className="grid grid-cols-3 gap-4 mb-4">
                         <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 shadow-sm">
                           <p className="text-xs text-gray-500 font-bold uppercase mb-1 flex items-center gap-1"><Calendar className="w-3 h-3 text-indigo-500"/> Date</p>
                           <p className="font-bold text-gray-900">{res.date}</p>
                         </div>
                         <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 shadow-sm">
                           <p className="text-xs text-gray-500 font-bold uppercase mb-1 flex items-center gap-1"><Clock className="w-3 h-3 text-indigo-500"/> Time</p>
                           <p className="font-bold text-gray-900">{res.time}</p>
                         </div>
                         <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 shadow-sm">
                           <p className="text-xs text-gray-500 font-bold uppercase mb-1 flex items-center gap-1"><Users className="w-3 h-3 text-indigo-500"/> Party</p>
                           <p className="font-bold text-gray-900">{res.partySize}</p>
                         </div>
                       </div>
                     </div>
                     <div className="flex justify-end mt-4">
                        <button onClick={() => handleCancel(res.id)} className="text-red-500 font-bold hover:text-red-700 transition flex items-center gap-1 hover:bg-red-50 px-3 py-2 rounded-lg">
                           <XCircle className="w-4 h-4"/> Cancel Booking
                        </button>
                     </div>
                  </div>
                </div>
              ))}
           </div>
         )}
      </div>
      <Footer />
    </div>
  );
}
