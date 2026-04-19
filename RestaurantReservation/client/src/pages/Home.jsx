import { Link } from 'react-router-dom';
import { CalendarCheck, MapPin, CreditCard, Star, Award, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <Hero />
      
      {/* Featured Destinations */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-20">
         <div className="flex justify-between items-end mb-12">
           <div>
             <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Featured Destinations</h2>
             <p className="text-gray-500 mt-2 text-lg">Curated selections for unforgettable culinary experiences.</p>
           </div>
           <a href="/restaurants" className="text-indigo-600 font-bold hover:underline mb-1 hidden sm:block">View all</a>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <Link to={`/restaurant/${i}`} key={i} className="block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                <img src={`https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80`} className="h-64 w-full object-cover" alt="Restaurant placeholder" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                     <h3 className="text-xl font-bold text-gray-900">Le Petit Bistro {i}</h3>
                     <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full">4.8 ★</span>
                  </div>
                  <p className="text-gray-500 text-sm font-medium mb-4">French • Fine Dining • $$$</p>
                  <p className="text-gray-600 line-clamp-2">Experience an immersive culinary journey featuring the finest contemporary French cuisine in an intimate setting.</p>
                </div>
              </Link>
            ))}
         </div>
         <a href="/restaurants" className="text-indigo-600 font-bold hover:underline mt-6 block sm:hidden text-center">View all</a>
      </section>

      {/* How it Works Section */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">How LuxeDine Works</h2>
          <p className="text-gray-500 text-lg mb-16 max-w-2xl mx-auto">Secure your table in three simple steps and enjoy the world's most desired dining venues.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 shadow-sm border border-indigo-100 transform hover:scale-105 transition-transform">
                  <MapPin className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Discover</h3>
                <p className="text-gray-500">Search top-rated restaurants by location, cuisine, or specific mood.</p>
             </div>
             
             <div className="flex flex-col items-center relative z-10">
                <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 shadow-sm border border-indigo-100 transform hover:scale-105 transition-transform">
                  <CalendarCheck className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">2. Choose a Time</h3>
                <p className="text-gray-500">Pick the perfect date and time. Availability is verified in real-time instantly.</p>
             </div>

             <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 shadow-sm border border-indigo-100 transform hover:scale-105 transition-transform">
                  <CreditCard className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Confirm Booking</h3>
                <p className="text-gray-500">Instant confirmation via email and VIP status upon arrival at the venue.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-4xl font-extrabold mb-6">Why Choose LuxeDine?</h2>
               <p className="text-gray-600 text-lg mb-8 text-balance">We curate only the finest establishments, ensuring every meal transforms into an unforgettable experience. Over 2 million diners trust our recommendations.</p>
               
               <div className="space-y-8">
                 <div className="flex gap-5">
                   <div className="flex-shrink-0 mt-1"><Award className="text-indigo-600 w-8 h-8" /></div>
                   <div>
                     <h4 className="text-xl font-bold mb-1">Handpicked Selections</h4>
                     <p className="text-gray-500">Every restaurant on our platform passes rigorous quality, service, and ambiance standards.</p>
                   </div>
                 </div>
                 <div className="flex gap-5">
                   <div className="flex-shrink-0 mt-1"><ShieldCheck className="text-indigo-600 w-8 h-8" /></div>
                   <div>
                     <h4 className="text-xl font-bold mb-1">Guaranteed Reservations</h4>
                     <p className="text-gray-500">Your table is 100% secured with instant verification directly from the restaurant.</p>
                   </div>
                 </div>
                 <div className="flex gap-5">
                   <div className="flex-shrink-0 mt-1"><Star className="text-indigo-600 w-8 h-8" /></div>
                   <div>
                     <h4 className="text-xl font-bold mb-1">Exclusive VIP Perks</h4>
                     <p className="text-gray-500">Enjoy complimentary drinks, preferred seating, or customized menus at partner venues.</p>
                   </div>
                 </div>
               </div>
             </div>
             <div className="relative">
               <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80" className="rounded-3xl shadow-2xl relative z-10" alt="Dining experience" />
               <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20 blur-2xl rounded-3xl z-0"></div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80')] mix-blend-overlay opacity-10 object-cover w-full h-full"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <h2 className="text-5xl font-extrabold text-white mb-6">Ready for an incredible meal?</h2>
           <p className="text-indigo-200 text-xl mb-10 max-w-2xl mx-auto text-balance">Join thousands of food lovers finding their next favorite spot right now.</p>
           <a href="/restaurants">
             <button className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all shadow-md">Explore Availability</button>
           </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
