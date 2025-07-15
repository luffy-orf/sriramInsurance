import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Phone, Mail, MessageCircle, Star, CheckCircle, Quote } from 'lucide-react';

interface FeedbackItem {
  id: number;
  name: string;
  phone: string;
  rating: number;
  message: string;
  submitted_at: string;
}

const Home = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/feedbacks');
      if (response.ok) {
        const data = await response.json();
        // Get latest 3 feedbacks for home page
        setFeedbacks(data.slice(0, 3));
      }
    } catch (error) {
      console.error('Failed to load feedbacks');
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

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

  const features = [
    { icon: CheckCircle, text: 'Complete client satisfaction' },
    { icon: CheckCircle, text: 'Ethical business policies' },
    { icon: CheckCircle, text: 'Transparent dealings' },
    { icon: CheckCircle, text: 'Wide connectivity' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="h-16 w-16 text-yellow-400 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Shriram Insurance Services
                </h1>
                <p className="text-xl md:text-2xl font-light">
                  Your security is our priority!
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg md:text-xl font-medium"
              >
                We listen, We understand, We provide Solution
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl"
              >
                A great experience with Happy clients
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8"
            >
              <p className="text-lg leading-relaxed">
                At Shriram Insurance Services, we are committed to providing comprehensive
                and customized insurance solutions to safeguard your future. With years of
                experience in the insurance industry, we specialize in offering a wide range
                of services tailored to individuals, families, and businesses.
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg"
            >
              Get the Right Insurance Plan Today!
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600">
              Our commitment to excellence sets us apart
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-800 font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from our satisfied customers
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading testimonials...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {feedbacks.map((feedback, index) => (
                <motion.div
                  key={feedback.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                >
                  <Quote className="h-8 w-8 text-blue-600 mb-4" />
                  
                  <div className="mb-4">
                    {renderStars(feedback.rating)}
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed line-clamp-4">
                    {feedback.message.length > 150 
                      ? `${feedback.message.substring(0, 150)}...` 
                      : feedback.message}
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {feedback.name}
                    </h4>
                    {feedback.phone && (
                      <p className="text-gray-600 text-sm">
                        Mo.: {feedback.phone}
                      </p>
                    )}
                    <p className="text-gray-500 text-xs mt-1">
                      {new Date(feedback.submitted_at).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {feedback.rating}/5
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {feedbacks.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <motion.a
                href="/feedback"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                View All Testimonials
              </motion.a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Actions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Ready to secure your future? Contact us today!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg"
            >
              <Phone className="h-8 w-8 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Call Now</h3>
              <p className="text-green-100">+91-9822123088</p>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmail}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
            >
              <Mail className="h-8 w-8 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-100">ramarankhambe88@gmail.com</p>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsApp}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="h-8 w-8 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-100">Quick Support</p>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">8+</div>
              <p className="text-blue-100">Insurance Types</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Support Available</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;