/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { NewInventory } from './pages/NewInventory';
import { Rentals } from './pages/Rentals';
import { PartsServices } from './pages/PartsServices';
import { FinancingPage } from './pages/FinancingPage';
import { ContactUs } from './pages/ContactUs';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-600 selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/inventory" element={<NewInventory />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/services" element={<PartsServices />} />
          <Route path="/financing" element={<FinancingPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}
