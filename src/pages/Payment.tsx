import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Share2, Download, QrCode, Phone } from 'lucide-react';
import toast from 'react-hot-toast';

const Payment = () => {
  const [showQR, setShowQR] = useState(false);

  const upiOptions = [
    {
      name: 'Paytm',
      id: '+91-9822123088',
      color: 'from-blue-500 to-blue-600',
      icon: '📱'
    },
    {
      name: 'PhonePe',
      id: '+91-9822123088',
      color: 'from-purple-500 to-purple-600',
      icon: '💜'
    },
    {
      name: 'Google Pay',
      id: '+91-9822123088',
      color: 'from-green-500 to-green-600',
      icon: '🟢'
    }
  ];

  const handleUPIPayment = (upiApp: string) => {
    const upiLink = `upi://pay?pa=9822123088@paytm&pn=Shriram Insurance Services&mc=0000&tid=1234567890&tr=1234567890&tn=Insurance Premium Payment&am=&cu=INR`;
    
    // Try to open UPI app
    window.location.href = upiLink;
    
    // Show success message
    toast.success(`Opening ${upiApp} for payment`);
  };

  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Shriram Insurance Services
ORG:Shriram Insurance Services
TEL:+91-9822123088
EMAIL:ramarankhambe88@gmail.com
URL:https://shriraminsurance.com
ADR:;;C/304 Moraj Maa Smriti CHS, Chinchavali Shekin;Khopoli;Navi Mumbai;;India
NOTE:Insurance & Investment Services - Your security is our priority!
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shriram-insurance-contact.vcf';
    a.click();
    window.URL.revokeObjectURL(url);
    
    toast.success('Contact card downloaded successfully!');
  };

  const shareOnWhatsApp = () => {
    const message = `Check out Shriram Insurance Services! 

🏢 *Shriram Insurance Services*
📞 Phone: +91-9822123088
📧 Email: ramarankhambe88@gmail.com
🏠 Address: C/304 Moraj Maa Smriti CHS, Chinchavali Shekin, Khopoli, Navi Mumbai

🛡️ Your security is our priority!
✅ Complete client satisfaction
✅ Ethical business policies
✅ Transparent dealings

Services:
• Life Insurance
• Health Insurance
• Motor & Bike Insurance
• Travel Insurance
• Property Insurance
• And more...

Contact us today for the best insurance solutions!`;

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
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
            <CreditCard className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Payment & Contact</h1>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
              Easy payment options and quick contact sharing
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Payment Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">UPI Payment Options</h2>
              
              <div className="space-y-4">
                {upiOptions.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleUPIPayment(option.name)}
                    className={`w-full bg-gradient-to-r ${option.color} text-white p-6 rounded-lg hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{option.icon}</span>
                        <div className="text-left">
                          <h3 className="text-xl font-bold">{option.name}</h3>
                          <p className="text-sm opacity-90">{option.id}</p>
                        </div>
                      </div>
                      <CreditCard className="h-8 w-8" />
                    </div>
                  </motion.button>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">QR Code Payment</h3>
                  <button
                    onClick={() => setShowQR(!showQR)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <QrCode className="h-5 w-5 inline mr-2" />
                    {showQR ? 'Hide' : 'Show'} QR
                  </button>
                </div>
                
                {showQR && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-center"
                  >
                    <div className="bg-white p-4 rounded-lg inline-block">
                      <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <QrCode className="h-16 w-16 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Scan to pay via UPI</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Sharing */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Share & Save Contact</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-800">Phone</p>
                        <p className="text-gray-600">+91-9822123088</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CreditCard className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-800">UPI ID</p>
                        <p className="text-gray-600">9822123088@ybl</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={downloadVCard}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300"
                  >
                    <Download className="h-6 w-6 inline mr-3" />
                    Download Contact Card (.vcf)
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={shareOnWhatsApp}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300"
                  >
                    <Share2 className="h-6 w-6 inline mr-3" />
                    Share on WhatsApp
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowQR(!showQR)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300"
                  >
                    <QrCode className="h-6 w-6 inline mr-3" />
                    Show QR Code Profile
                  </motion.button>
                </div>
              </div>

              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Payment Note</h3>
                <p className="text-sm text-yellow-700">
                  For premium payments, please contact us first to confirm the amount
                  and policy details. We ensure secure and transparent transactions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Additional Contact Options */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help with Payment?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our team is here to assist you with payment processing and policy inquiries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('tel:+91-9822123088', '_self')}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-5 w-5 inline mr-2" />
                Call +91-9822123088
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://wa.me/919822123088?text=Hello! I need help with payment processing.', '_blank')}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Share2 className="h-5 w-5 inline mr-2" />
                WhatsApp Support
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Payment;