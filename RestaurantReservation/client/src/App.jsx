import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Restaurants from './pages/Restaurants';
import Reservations from './pages/Reservations';
import RestaurantDetails from './pages/RestaurantDetails';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
