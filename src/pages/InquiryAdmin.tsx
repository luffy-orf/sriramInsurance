import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, User, Phone, Mail, MessageCircle, Calendar, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface Inquiry {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  status: string;
  submitted_at: string;
}

const InquiryAdmin = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/inquiries');
      if (response.ok) {
        const data = await response.json();
        setInquiries(data);
      }
    } catch (error) {
      toast.error('Failed to load inquiries');
    } finally {
      setLoading(false);
    }
  };

  const updateInquiryStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`http://localhost:3001/api/inquiries/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        toast.success('Status updated successfully');
        fetchInquiries(); // Refresh the list
      } else {
        throw new Error('Failed to update status');
      }
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const openWhatsApp = (inquiry: Inquiry) => {
    const message = `Hi ${inquiry.name}! 

Thank you for your inquiry about our insurance services. I would like to discuss your requirements in detail.

Your inquiry details:
📝 Name: ${inquiry.name}
📞 Phone: ${inquiry.phone}
📧 Email: ${inquiry.email}
💬 Message: ${inquiry.message}

When would be a good time to call you?

Best regards,
Shriram Insurance Services`;

    window.open(`https://wa.me/${inquiry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'in_progress':
        return <Clock className="h-5 w-5 text-yellow-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-red-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in_progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };

  const filteredInquiries = inquiries.filter(inquiry => {
    if (filter === 'all') return true;
    return inquiry.status === filter;
  });

  const stats = {
    total: inquiries.length,
    pending: inquiries.filter(i => i.status === 'pending').length,
    in_progress: inquiries.filter(i => i.status === 'in_progress').length,
    completed: inquiries.filter(i => i.status === 'completed').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ClipboardList className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Inquiry Management</h1>
                <p className="text-gray-600">Track and manage customer inquiries</p>
              </div>
            </div>
            <button
              onClick={fetchInquiries}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Inquiries</p>
                <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
              </div>
              <ClipboardList className="h-8 w-8 text-blue-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-red-600">{stats.pending}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.in_progress}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All ({stats.total})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'pending' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Pending ({stats.pending})
            </button>
            <button
              onClick={() => setFilter('in_progress')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'in_progress' 
                  ? 'bg-yellow-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              In Progress ({stats.in_progress})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filter === 'completed' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Completed ({stats.completed})
            </button>
          </div>
        </div>

        {/* Inquiries List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading inquiries...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredInquiries.length > 0 ? (
              filteredInquiries.map((inquiry, index) => (
                <motion.div
                  key={inquiry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{inquiry.name}</h3>
                        <p className="text-sm text-gray-600">ID: {inquiry.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(inquiry.status)}
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(inquiry.status)}`}>
                        {inquiry.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{inquiry.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{inquiry.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {new Date(inquiry.submitted_at).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">{inquiry.message}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => openWhatsApp(inquiry)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </button>
                    
                    <select
                      value={inquiry.status}
                      onChange={(e) => updateInquiryStatus(inquiry.id, e.target.value)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="pending">Pending</option>
                      <option value="in_progress">In Progress</option>
                      <option value="completed">Completed</option>
                    </select>

                    <a
                      href={`tel:${inquiry.phone}`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </a>

                    <a
                      href={`mailto:${inquiry.email}`}
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <ClipboardList className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Inquiries Found</h3>
                <p className="text-gray-500">
                  {filter === 'all' 
                    ? 'No inquiries have been submitted yet.' 
                    : `No inquiries with status "${filter}" found.`}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InquiryAdmin; 