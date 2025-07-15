import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Phone, Mail, MessageCircle, Star, CheckCircle, Quote, ZoomIn } from 'lucide-react';

interface FeedbackItem {
  id: number;
  name: string;
  phone: string;
  rating: number;
  message: string;
  submitted_at: string;
}

interface InsurancePlan {
  id: string;
  src: string;
  title: string;
  description: string;
  category?: string;
  featured?: boolean;
}

const Home = () => {
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Insurance Plans with Gallery Images - Comprehensive Coverage
  const insurancePlans: InsurancePlan[] = [
    {
      id: 'emi-insurance',
      src: '/gallery-images/EMI_INSURANCE.jpg',
      title: 'EMI Protection Insurance',
      description: 'Comprehensive EMI Protection Insurance safeguarding your loan repayments during job loss, disability, or critical illness. Covers home loans, car loans, and personal loans.',
      category: 'Featured',
      featured: true
    },
    {
      id: 'health-insurance',
      src: '/gallery-images/1740749396742.jpg',
      title: 'Health Insurance',
      description: 'Complete medical coverage for you and your family with cashless treatment at network hospitals nationwide.',
      category: 'Health'
    },
    {
      id: 'vehicle-insurance',
      src: '/gallery-images/1740749396743.jpg',
      title: 'Vehicle Insurance',
      description: 'Comprehensive car and bike insurance plans with instant claim settlement and nationwide service network.',
      category: 'Vehicle'
    },
    {
      id: 'life-insurance',
      src: '/gallery-images/1740749396745.jpg',
      title: 'Life Insurance',
      description: 'Secure your family\'s financial future with our term life and investment-linked insurance policies.',
      category: 'Life'
    },
    {
      id: 'home-insurance',
      src: '/gallery-images/1740749396747.jpg',
      title: 'Home Insurance',
      description: 'Protect your property against fire, theft, natural disasters and structural damages with comprehensive coverage.',
      category: 'Property'
    },
    {
      id: 'travel-insurance',
      src: '/gallery-images/1740749396740.jpg',
      title: 'Travel Insurance',
      description: 'International and domestic travel protection covering medical emergencies, trip cancellation and baggage loss.',
      category: 'Travel'
    },
    {
      id: 'business-insurance',
      src: '/gallery-images/1740749396742.jpg',
      title: 'Business Insurance',
      description: 'Comprehensive commercial insurance covering liability, property, cyber security and business interruption.',
      category: 'Commercial'
    },
    {
      id: 'cyber-insurance',
      src: '/gallery-images/1740749396743.jpg',
      title: 'Cyber Insurance',
      description: 'Digital age protection against cyber attacks, data breaches and online fraud for individuals and businesses.',
      category: 'Digital'
    }
  ];

  // Major Insurance Companies We Partner With
  const insuranceCompanies = [
    { name: 'LIC of India', coverage: 'Life Insurance' },
    { name: 'HDFC Life', coverage: 'Life & Health' },
    { name: 'ICICI Prudential', coverage: 'Life & General' },
    { name: 'SBI Life', coverage: 'Life Insurance' },
    { name: 'Bajaj Allianz', coverage: 'General Insurance' },
    { name: 'TATA AIG', coverage: 'General Insurance' },
    { name: 'New India Assurance', coverage: 'General Insurance' },
    { name: 'Oriental Insurance', coverage: 'General Insurance' },
    { name: 'Reliance General', coverage: 'General Insurance' },
    { name: 'Cholamandalam MS', coverage: 'General Insurance' },
    { name: 'Max Life', coverage: 'Life Insurance' },
    { name: 'Bharti AXA', coverage: 'Life & General' }
  ];

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
          try {
        const response = await fetch('/api/feedbacks');
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

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const handleWhatsApp = (planTitle?: string) => {
    const currentTime = getCurrentTime();
    const message = planTitle 
      ? `🏛️ *SHRIRAM INSURANCE SERVICES*

📋 *Inquiry Details:*
🔹 Service: ${planTitle}
📅 Date & Time: ${currentTime}
📱 Contact: 9822123088

💬 Hello! I'm interested in learning more about your *${planTitle}* service. Could you please provide me with:
• Policy details and coverage
• Premium rates and payment options
• Documentation required
• Claim process information

Thank you for your time! 🙏`
      : `🏛️ *SHRIRAM INSURANCE SERVICES*

📅 Date & Time: ${currentTime}
📱 Contact: 9822123088

💬 Hello! I'm interested in your insurance services. Could you please help me understand the available options and guide me through the process?

Thank you! 🙏`;
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
      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-8 md:py-16 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col md:flex-row items-center justify-center mb-6 md:mb-8"
            >
              <motion.div
                animate={{ 
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Shield className="h-16 md:h-20 w-16 md:w-20 text-yellow-400 mb-4 md:mb-0 md:mr-6" />
              </motion.div>
              <div>
                <motion.h1 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-3 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent"
                >
                  Shriram Insurance Services
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg md:text-2xl lg:text-3xl font-light text-yellow-100"
                >
                  Your security is our priority! 🛡️
                </motion.p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-2 md:space-y-3 mb-8 md:mb-12"
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-base md:text-xl lg:text-2xl font-medium text-blue-100"
              >
                ✨ We listen, We understand, We provide Solution
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
                className="text-base md:text-xl lg:text-2xl text-blue-200"
              >
                🌟 A great experience with Happy clients
              </motion.p>
            </motion.div>

            {/* Quick Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsApp()}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Quick WhatsApp Chat
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCall}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Insurance Plans Gallery Slider - Mobile Focused */}
      <section className="py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              🛡️ Complete Insurance Solutions
            </h2>
            <p className="text-sm md:text-lg text-gray-600 mb-2">
              8+ Insurance Types • All Major Companies • Complete Coverage
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-4 border border-blue-200">
              <p className="text-sm md:text-base text-blue-800 font-medium">
                🏆 <strong>One-Stop Solution:</strong> We represent ALL major insurance companies in India and offer EVERY type of insurance coverage for individuals, families, and businesses.
              </p>
            </div>
          </motion.div>

          {/* Mobile Slider for Insurance Plans */}
          <div className="relative">
            <div className="md:hidden overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 pb-4" style={{ width: `${insurancePlans.length * 90}%` }}>
                {insurancePlans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-white rounded-2xl shadow-lg overflow-hidden min-w-[280px] max-w-[280px] snap-center relative ${
                      plan.featured ? 'border-2 border-red-300' : 'border border-gray-200'
                    }`}
                  >
                    {plan.featured && (
                      <div className="absolute top-3 left-3 z-10">
                        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                          🌟 MOST IMPORTANT
                        </div>
                      </div>
                    )}
                    
                    <div className="relative">
                      <img
                        src={plan.src}
                        alt={plan.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 right-3">
                        <ZoomIn className="h-5 w-5 text-white/80" />
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {plan.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {plan.description.length > 100 
                          ? `${plan.description.substring(0, 100)}...` 
                          : plan.description}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleWhatsApp(plan.title)}
                        className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                          plan.featured
                            ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                            : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                        }`}
                      >
                        Get Quote
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Desktop Grid for Insurance Plans */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {insurancePlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden relative ${
                    plan.featured ? 'border-2 border-red-300' : 'border border-gray-200'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute top-3 left-3 z-10">
                      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        🌟 MOST IMPORTANT
                      </div>
                    </div>
                  )}
                  
                  <div className="relative">
                    <img
                      src={plan.src}
                      alt={plan.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 right-3">
                      <ZoomIn className="h-5 w-5 text-white/80" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {plan.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWhatsApp(plan.title)}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                        plan.featured
                          ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                      }`}
                    >
                      Get Quote
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile swipe indicator */}
            <div className="md:hidden text-center mt-4">
              <p className="text-sm text-gray-500">
                ← Swipe to see more plans →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Companies Partnership - Complete Coverage */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              🤝 Trusted Insurance Partners
            </h2>
            <p className="text-sm md:text-lg text-gray-600 mb-4">
              Authorized to sell policies from ALL major insurance companies in India
            </p>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-6 border border-green-200 max-w-4xl mx-auto">
              <p className="text-sm md:text-base text-green-800 font-medium">
                💼 <strong>Complete Access:</strong> We have tie-ups with 12+ major insurance companies ensuring you get the BEST rates and coverage options for ANY insurance need.
              </p>
            </div>
          </motion.div>

          {/* Company Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {insuranceCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-gray-200 hover:border-blue-300"
              >
                <div className="text-2xl mb-2">🏢</div>
                <h4 className="font-bold text-gray-800 text-sm md:text-base mb-1">
                  {company.name}
                </h4>
                <p className="text-xs md:text-sm text-blue-600 font-medium">
                  {company.coverage}
                </p>
              </motion.div>
            ))}
          </div>

          {/* All Insurance Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 text-center">
              📋 All Insurance Types We Offer
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { icon: '🏥', name: 'Health Insurance', desc: 'Medical Coverage' },
                { icon: '🚗', name: 'Vehicle Insurance', desc: 'Car & Bike' },
                { icon: '🏠', name: 'Home Insurance', desc: 'Property Protection' },
                { icon: '💼', name: 'Life Insurance', desc: 'Family Security' },
                { icon: '✈️', name: 'Travel Insurance', desc: 'Trip Protection' },
                { icon: '🏢', name: 'Business Insurance', desc: 'Commercial Cover' },
                { icon: '🔒', name: 'Cyber Insurance', desc: 'Digital Security' },
                { icon: '💳', name: 'EMI Protection', desc: 'Loan Coverage' }
              ].map((type, index) => (
                <motion.div
                  key={type.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{type.icon}</div>
                  <h5 className="font-semibold text-gray-800 text-sm mb-1">{type.name}</h5>
                  <p className="text-xs text-gray-600">{type.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleWhatsApp("Complete Insurance Solutions")}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
              >
                🔍 Find My Perfect Insurance Plan
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials Slider - Mobile Optimized */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              💬 Happy Customers
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
              Real experiences from our satisfied customers
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading testimonials...</p>
            </div>
          ) : feedbacks.length > 0 ? (
            <div className="relative">
              {/* Mobile Slider for Testimonials */}
              <div className="md:hidden overflow-x-auto scrollbar-hide">
                <div className="flex space-x-4 pb-4" style={{ width: `${feedbacks.length * 100}%` }}>
                  {feedbacks.map((feedback, index) => (
                    <motion.div
                      key={feedback.id}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl p-6 shadow-lg min-w-full max-w-sm relative snap-center"
                    >
                      <Quote className="h-6 w-6 text-blue-600 mb-3" />
                      
                      <div className="mb-3">
                        {renderStars(feedback.rating)}
                      </div>
                      
                      <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                        {feedback.message.length > 120 
                          ? `${feedback.message.substring(0, 120)}...` 
                          : feedback.message}
                      </p>
                      
                      <div className="border-t pt-3">
                        <h4 className="font-semibold text-gray-800">
                          {feedback.name}
                        </h4>
                        {feedback.phone && (
                          <p className="text-gray-600 text-xs">
                            Mo.: {feedback.phone}
                          </p>
                        )}
                      </div>
                      
                      <div className="absolute top-3 right-3">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Verified ✓
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="text-center mt-4">
                  <p className="text-xs text-gray-500">Swipe to see more testimonials →</p>
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
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
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
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
            </div>
          ) : (
            <div className="text-center py-8">
              <Quote className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Reviews Yet</h3>
              <p className="text-gray-500">Be the first to share your experience!</p>
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

      {/* Quick Inquiry Form - Mobile Optimized */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              📝 Quick Inquiry
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Get insurance quotes instantly via WhatsApp
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name') as string;
              const phone = formData.get('phone') as string;
              const service = formData.get('service') as string;
              
              const message = `🔔 Quick Insurance Inquiry

📝 *Name:* ${name}
📞 *Phone:* ${phone}
🛡️ *Service:* ${service}

I'm interested in getting a quote for this insurance service. Please contact me with details.`;
              
              window.open(`https://wa.me/919822123088?text=${encodeURIComponent(message)}`, '_blank');
            }} className="space-y-6">
              
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-sm"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-sm"
                />
              </div>

              <div>
                <select
                  name="service"
                  required
                  className="w-full px-4 py-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base md:text-sm bg-white"
                >
                  <option value="">Select Insurance Type</option>
                  <option value="EMI Protection Insurance">🔥 EMI Protection Insurance</option>
                  <option value="Health Insurance">🏥 Health Insurance</option>
                  <option value="Vehicle Insurance">🚗 Vehicle Insurance</option>
                  <option value="Life Insurance">🏠 Life Insurance</option>
                  <option value="Other">Other Insurance</option>
                </select>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 md:py-3 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 text-base md:text-sm min-h-[48px] flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Get Quote via WhatsApp
              </motion.button>
            </form>

            <div className="text-center mt-6">
              <p className="text-xs text-gray-500 mb-3">Or contact us directly:</p>
              <div className="flex justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCall}
                  className="flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  Call
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEmail}
                  className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  Email
                </motion.button>
              </div>
            </div>
          </motion.div>
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