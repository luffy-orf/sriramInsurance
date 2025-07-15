import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Image as ImageIcon, X, ZoomIn, Download } from 'lucide-react';

interface GalleryImage {
  id: string;
  src: string;
  title: string;
  description: string;
  category?: string;
  date?: string;
}

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [loading, setLoading] = useState(true);

  // Define the local images from the gallery-images folder
  const localImages = [
    'EMI_INSURANCE.jpg', // Featured - Most Important
    '1740749396740.jpg',
    '1740749396742.jpg', 
    '1740749396743.jpg',
    '1740749396745.jpg',
    '1740749396747.jpg'
  ];

  // Professional image details for insurance business
  const imageDetails: Record<string, { title: string; description: string; category?: string; date?: string }> = {
    'EMI_INSURANCE.jpg': {
      title: 'EMI Protection Insurance',
      description: 'Comprehensive EMI Protection Insurance safeguarding your loan repayments during job loss, disability, or critical illness. Secure your family\'s financial future with our specialized EMI insurance solutions covering home loans, car loans, and personal loans.',
      category: 'Featured',
      date: '2024'
    },
    '1740749396740.jpg': {
      title: 'Shriram Insurance Office',
      description: 'Our modern office building in Khopoli providing comprehensive insurance services to clients across Navi Mumbai and surrounding areas.',
      category: 'Office',
      date: '2024'
    },
    '1740749396742.jpg': {
      title: 'Professional Consultation Services', 
      description: 'Expert insurance consultation and advisory services helping clients choose the right insurance policies for their specific needs.',
      category: 'Services',
      date: '2024'
    },
    '1740749396743.jpg': {
      title: 'Dedicated Insurance Team',
      description: 'Our experienced and professional team of insurance advisors working together to provide the best service to our valued clients.',
      category: 'Team',
      date: '2024'
    },
    '1740749396745.jpg': {
      title: 'Client Service Excellence',
      description: 'Providing personalized insurance solutions and excellent customer service to ensure complete client satisfaction and support.',
      category: 'Clients',
      date: '2024'
    },
    '1740749396747.jpg': {
      title: 'Insurance Success Stories',
      description: 'Celebrating successful insurance claim settlements and happy clients who have benefited from our comprehensive insurance solutions.',
      category: 'Events',
      date: '2024'
    }
  };

  useEffect(() => {
    // Create gallery images array from local images
    const images: GalleryImage[] = localImages.map((filename) => ({
      id: filename,
      src: `/gallery-images/${filename}`,
      title: imageDetails[filename]?.title || 'Gallery Image',
      description: imageDetails[filename]?.description || 'Shriram Insurance Services',
      category: imageDetails[filename]?.category,
      date: imageDetails[filename]?.date
    }));

    setGalleryImages(images);
    setLoading(false);
  }, []);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const downloadImage = (src: string, title: string) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `${title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Get unique categories for filtering (future enhancement)
  const categories = Array.from(new Set(galleryImages.map(img => img.category).filter(Boolean)));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 md:py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Camera className="h-12 md:h-16 w-12 md:w-16 text-yellow-400 mx-auto mb-4 md:mb-6" />
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Gallery</h1>
            <p className="text-base md:text-xl lg:text-2xl font-light max-w-3xl mx-auto">
              Discover our journey through images and moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 md:py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Our Visual Story
            </h2>
            <p className="text-sm md:text-lg text-gray-600">
              Take a look at our office, team, and services in action
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading gallery images...</p>
            </div>
          ) : (
          <>
            {/* Featured EMI Insurance Section */}
            {galleryImages.find(img => img.category === 'Featured') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">🔥 Featured Service</h3>
                  <p className="text-gray-600">Our most important insurance solution for your financial security</p>
                </div>
                
                {(() => {
                  const featuredImage = galleryImages.find(img => img.category === 'Featured');
                  return featuredImage ? (
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-2xl overflow-hidden border-2 border-blue-200 cursor-pointer"
                      onClick={() => openModal(featuredImage)}
                    >
                      <div className="md:flex items-center">
                        <div className="md:w-1/2 relative group">
                          <img
                            src={featuredImage.src}
                            alt={featuredImage.title}
                            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=EMI+Insurance';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                              🌟 MOST IMPORTANT
                            </span>
                          </div>
                        </div>
                        <div className="md:w-1/2 p-8">
                          <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                            {featuredImage.title}
                          </h4>
                          <p className="text-gray-700 mb-6 leading-relaxed">
                            {featuredImage.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-blue-600 font-semibold">Click to view details</span>
                            <ZoomIn className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : null;
                })()}
              </motion.div>
            )}

            {/* Regular Gallery Grid */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 text-center">More From Our Gallery</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.filter(img => img.category !== 'Featured').map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(image)}
              >
                <div className="relative group">
                  <img
                    src={image.src}
                    alt={image.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Image+Not+Found';
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {image.category && (
                      <div className="absolute top-2 left-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {image.category}
                        </span>
                      </div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      {image.description}
                    </p>
                    {image.date && (
                      <p className="text-xs text-gray-400">
                        {image.date}
                      </p>
                    )}
                </div>
              </motion.div>
            ))}
          </div>
          </>
          )}

          {galleryImages.length === 0 && !loading && (
            <div className="text-center py-12">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Images Found</h3>
              <p className="text-gray-500">
                Add images to the public/gallery-images/ folder to display them here.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent p-4 z-10">
                <div className="flex justify-between items-start text-white">
                  <div>
                    <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                    <p className="text-sm opacity-80">{selectedImage.description}</p>
                    {selectedImage.category && (
                      <span className="inline-block bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium mt-2">
                        {selectedImage.category}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => downloadImage(selectedImage.src, selectedImage.title)}
                      className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                      title="Download Image"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                    <button
                      onClick={closeModal}
                      className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-colors"
                      title="Close"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Image */}
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Be Part of Our Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our growing family of satisfied customers and let us help
              secure your future with the right insurance solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('tel:+91-9822123088', '_self')}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;