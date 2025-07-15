import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Award, Users } from 'lucide-react';

const About = () => {
  const specialities = [
    'Complete client satisfaction',
    'Ethical business policies',
    'Live in touch with our customers',
    'Transparent dealings',
    'Wide connectivity',
    'We listen, We understand, We provide Solution',
    'A great experience with Happy clients',
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Your trusted partner in comprehensive insurance solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Shriram Insurance Services
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Category</h3>
                  <p className="text-gray-600">Insurance & Investment</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Nature of Business</h3>
                  <p className="text-gray-600">Service Provider</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide comprehensive and customized insurance solutions that
                    safeguard your future and give you peace of mind.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Experience</p>
                    <p className="text-sm text-gray-600">Years of expertise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Trust</p>
                    <p className="text-sm text-gray-600">500+ Happy clients</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-yellow-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Security</p>
                    <p className="text-sm text-gray-600">Your priority</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-8 w-8 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Quality</p>
                    <p className="text-sm text-gray-600">Premium service</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialities */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Specialities
            </h2>
            <p className="text-lg text-gray-600">
              What makes us stand out in the insurance industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialities.map((speciality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-800 font-medium">{speciality}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The principles that guide our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <Shield className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Trust & Security</h3>
                <p className="text-blue-100">
                  Your security is our top priority. We ensure transparent and
                  ethical practices in all our dealings.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Customer First</h3>
                <p className="text-blue-100">
                  We listen to our clients, understand their needs, and provide
                  tailored solutions for complete satisfaction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <Award className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-blue-100">
                  We strive for excellence in every interaction, ensuring
                  professional service and quality outcomes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;