import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Restaurants() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex-grow pt-28 px-4 max-w-7xl mx-auto w-full">
         <h1 className="text-4xl font-extrabold text-gray-900 mb-8">All Restaurants</h1>
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-lg transition-all">
                <img src={`https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=600&q=80`} className="h-40 w-full object-cover" alt="Restaurant placeholder" />
                <div className="p-4">
                   <h3 className="text-lg font-bold text-gray-900">Gourmet Haven {i}</h3>
                   <p className="text-gray-500 text-sm mb-4">Fine Dining • Downtown</p>
                   <Link to={`/restaurant/${i}`} className="block w-full text-center bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition shadow-md hover:shadow-lg">View Details & Book</Link>
                </div>
              </div>
            ))}
         </div>
      </div>
      <Footer />
    </div>
  );
}
