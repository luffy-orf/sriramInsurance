import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Car, 
  Plane, 
  Home, 
  Flame, 
  Ship, 
  Store, 
  Shield,
  Phone,
  Mail
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Life Insurance',
      description: 'Comprehensive life insurance plans to secure your family\'s future',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Medical coverage for you and your family\'s health needs',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Car,
      title: 'Motor & Bike Insurance',
      description: 'Complete vehicle protection with comprehensive coverage',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Plane,
      title: 'Travel Insurance',
      description: 'Safe travel protection for domestic and international trips',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Home,
      title: 'Property Insurance',
      description: 'Protect your property investments with comprehensive coverage',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Flame,
      title: 'Fire Insurance',
      description: 'Fire protection for your home and business properties',
      color: 'from-red-600 to-red-700'
    },
    {
      icon: Ship,
      title: 'Marine Insurance',
      description: 'Marine cargo and hull insurance for maritime businesses',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Store,
      title: 'Shop & Society Insurance',
      description: 'Commercial insurance for shops, societies, and businesses',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const handleCall = () => {
    window.open('tel:+91-9822123088', '_self');
  };

  const handleEmail = () => {
    window.open('mailto:ramarankhambe88@gmail.com', '_self');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Comprehensive insurance solutions for all your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Insurance Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Tailored insurance products to protect what matters most
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <service.icon className="h-10 w-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleCall}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Call Now
                    </button>
                    <button
                      onClick={handleEmail}
                      className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                    >
                      Email
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive insurance solutions with personalized service
              and competitive rates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Advice',
                description: 'Professional guidance from experienced insurance advisors',
                icon: Shield
              },
              {
                title: 'Quick Claims',
                description: 'Fast and hassle-free claim processing',
                icon: Phone
              },
              {
                title: 'Best Rates',
                description: 'Competitive premiums with maximum coverage',
                icon: Heart
              },
              {
                title: '24/7 Support',
                description: 'Round-the-clock customer support and assistance',
                icon: Mail
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your insurance needs and get personalized quotes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCall}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 inline mr-2" />
                Call +91-9822123088
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleEmail}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5 inline mr-2" />
                Email Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;