import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Feedback from './pages/Feedback';
import Enquiry from './pages/Enquiry';
import Gallery from './pages/Gallery';
import Payment from './pages/Payment';
import InquiryAdmin from './pages/InquiryAdmin';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pb-20 pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/admin/inquiries" element={<InquiryAdmin />} />
          </Routes>
        </main>
        <Footer />
        <BottomNav />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </div>
    </Router>
  );
}

export default App;