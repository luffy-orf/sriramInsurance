import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/feedback', label: 'Feedback' },
    { path: '/enquiry', label: 'Enquiry' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/payment', label: 'Payment' },
  ];

  const handleCall = () => {
    window.open('tel:+91-9822123088', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:ramarankhambe88@gmail.com', '_self');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-blue-600">Shriram Insurance</h1>
              <p className="text-xs text-gray-600">Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={handleCall}
              className="flex items-center space-x-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">Call</span>
            </button>
            <button
              onClick={handleEmail}
              className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">Email</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center space-x-2 px-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={handleCall}
                    className="flex-1 flex items-center justify-center space-x-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Call Now</span>
                  </button>
                  <button
                    onClick={handleEmail}
                    className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;