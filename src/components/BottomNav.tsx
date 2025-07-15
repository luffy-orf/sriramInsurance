import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Briefcase, MessageCircle, Phone, Share2 } from 'lucide-react';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/services', icon: Briefcase, label: 'Services' },
    { path: '/feedback', icon: MessageCircle, label: 'Feedback' },
    { path: '/enquiry', icon: Phone, label: 'Enquiry' },
    { path: '/payment', icon: Share2, label: 'Payment' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;