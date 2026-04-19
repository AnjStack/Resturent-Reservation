import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Star, Users, Calendar } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RestaurantDetails() {
  const { id } = useParams();
  const [bookingStatus, setBookingStatus] = useState('idle');

  const handleBooking = (e) => {
    e.preventDefault();
    
    const date = e.target[0].value;
    const time = e.target[1].value;
    const partySize = e.target[2].value;

    setBookingStatus('loading');
    setTimeout(() => {
      const newReservation = {
        id: Date.now(),
        restaurantName: `Gourmet Haven ${id}`,
        location: "123 Culinary Blvd, Downtown",
        date,
        time,
        partySize,
        image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=400&q=80"
      };
      
      const existing = JSON.parse(localStorage.getItem('luxury_reservations') || '[]');
      localStorage.setItem('luxury_reservations', JSON.stringify([...existing, newReservation]));

      setBookingStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-20">
        
        <div className="h-80 w-full relative">
           <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1920&q=80" className="w-full h-full object-cover" alt="Restaurant interior" />
           <div className="absolute inset-0 bg-gray-900/50" />
           <div className="absolute bottom-0 left-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full p-8 text-white">
              <h1 className="text-5xl font-extrabold mb-2 text-balance">Gourmet Haven {id}</h1>
              <p className="text-xl opacity-90 font-medium">Fine Dining • Contemporary French</p>
           </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
           
           <div className="md:w-2/3">
             <div className="flex flex-wrap gap-6 mb-8 border-b border-gray-200 pb-8">
               <div className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-bold text-lg">4.8</span>
                  <span className="text-gray-500 font-medium">(120 Reviews)</span>
               </div>
               <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <span>123 Culinary Blvd, Downtown</span>
               </div>
               <div className="flex items-center gap-2 text-gray-700 font-medium">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <span>Open 17:00 - 23:00</span>
               </div>
             </div>
             
             <h2 className="text-2xl font-bold mb-4 text-gray-900">About this restaurant</h2>
             <p className="text-gray-600 leading-relaxed text-lg mb-10 text-balance">
               Experience an immersive culinary journey featuring the finest contemporary French cuisine in an intimate setting. Our award-winning chefs use locally sourced ingredients to create exquisite menus tailored to your tastes. 
               Whether you're celebrating a special occasion or simply indulging in a night out, Gourmet Haven promises a memorable evening filled with elegance and flavor.
             </p>

             <h2 className="text-2xl font-bold mb-4 text-gray-900">Atmosphere</h2>
             <div className="grid grid-cols-2 gap-4">
                {[1, 2].map(photo => (
                  <img key={photo} src={`https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=400&q=80`} className="rounded-2xl h-48 w-full object-cover shadow-sm" alt="Food ambiance" />
                ))}
             </div>
           </div>

           <div className="md:w-1/3">
             <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 p-8 sticky top-28">
               <h3 className="text-2xl font-extrabold mb-6 text-gray-900 border-b pb-4">Reserve your table</h3>
               
               {bookingStatus === 'success' ? (
                 <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-5">
                       <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Confirmed!</h4>
                    <p className="text-gray-500 text-lg mb-8 text-balance">Your reservation is set. We've sent the details to your email.</p>
                    <Link to="/reservations" className="block w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl hover:bg-gray-800 transition shadow-lg">View My Reservations</Link>
                 </div>
               ) : (
                 <form onSubmit={handleBooking} className="space-y-6">
                   <div>
                     <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4 text-indigo-500"/> Date</label>
                     <input required type="date" className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-shadow font-medium text-gray-800" />
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><Clock className="w-4 h-4 text-indigo-500"/> Time</label>
                     <select required className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-shadow font-medium text-gray-800">
                        <option>19:00 PM</option>
                        <option>19:30 PM</option>
                        <option>20:00 PM</option>
                        <option>20:30 PM</option>
                     </select>
                   </div>
                   <div>
                     <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2"><Users className="w-4 h-4 text-indigo-500"/> Party Size</label>
                     <select required className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-shadow font-medium text-gray-800">
                        <option>2 people</option>
                        <option>3 people</option>
                        <option>4 people</option>
                        <option>5+ people</option>
                     </select>
                   </div>
                   
                   <button type="submit" disabled={bookingStatus === 'loading'} className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all mt-4 shadow hover:shadow-lg shadow-indigo-200 flex justify-center items-center text-lg">
                     {bookingStatus === 'loading' ? 'Securing Book...' : 'Request to Book'}
                   </button>
                 </form>
               )}
             </div>
           </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
