import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleCall = () => {
    window.open('tel:+91-9822123088', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:ramarankhambe88@gmail.com', '_self');
  };

  const handleWhatsApp = () => {
    const message = "Hello! I'm interested in your insurance services.";
    window.open(`https://wa.me/919822123088?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-12 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shriram Insurance Services</h3>
            <p className="text-gray-400 mb-4">
              Your security is our priority! We provide comprehensive insurance solutions
              tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleCall}
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors"
              >
                <Phone className="h-5 w-5" />
              </button>
              <button
                onClick={handleEmail}
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
              </button>
              <button
                onClick={handleWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Life Insurance</li>
              <li>Health Insurance</li>
              <li>Motor & Bike Insurance</li>
              <li>Travel Insurance</li>
              <li>Property Insurance</li>
              <li>Fire Insurance</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 text-green-500" />
                <div>
                  <p>+91-9822123088</p>
                  <p className="text-sm">Call us anytime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 text-blue-500" />
                <div>
                  <p>ramarankhambe88@gmail.com</p>
                  <p className="text-sm">Email support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-red-500" />
                <div>
                  <p>C/304 Moraj Maa Smriti CHS,</p>
                  <p>Chinchavali Shekin, Khopoli,</p>
                  <p>Navi Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Shriram Insurance Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;