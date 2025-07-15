import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Camera, MessageCircle, Phone, Share2, CreditCard } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/gallery', icon: Camera, label: 'Gallery' },
    { path: '/enquiry', icon: Phone, label: 'Enquiry' },
    { path: '/feedback', icon: MessageCircle, label: 'Feedback' },
    { path: '/payment', icon: CreditCard, label: 'Payment' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 md:hidden z-50">
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-3 px-3 rounded-xl transition-all duration-300 min-h-[60px] ${
                isActive
                  ? 'text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 scale-105 shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 active:scale-95'
              }`}
            >
              <Icon className={`h-5 w-5 mb-1 transition-all duration-300 ${isActive ? 'animate-pulse' : ''}`} />
              <span className={`text-xs font-medium transition-all duration-300 ${isActive ? 'font-semibold' : ''}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;