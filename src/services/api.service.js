/**
 * API Service Layer
 * Centralized API calls with error handling
 */

import axios from 'axios';
import { API_CONFIG } from '../config/constants';

// Determine base URL based on environment
const getBaseURL = () => {
  // Always use the backend URL directly (simpler and more reliable)
  return API_CONFIG.BASE_URL;
};

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: getBaseURL(),
  timeout: API_CONFIG.TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const errorMessage = error.response?.data?.message || error.message || 'Something went wrong';
    console.error('API Error:', errorMessage);
    return Promise.reject(new Error(errorMessage));
  }
);

/**
 * API Service Methods
 */
export const apiService = {
  /**
   * Wake up the backend (useful for Render free tier)
   * @returns {Promise}
   */
  wakeUp: async () => {
    try {
      const response = await apiClient.get('/', { timeout: 60000 });
      return response;
    } catch (error) {
      console.warn('Wake up request failed:', error.message);
      // Don't throw error, as this is just a wake-up call
      return null;
    }
  },

  /**
   * Send contact form email with wake-up call
   * @param {Object} data - Form data (name, email, message)
   * @returns {Promise}
   */
  sendEmail: async (data) => {
    try {
      console.log('📧 Sending email with data:', data);
      console.log('🌐 Backend URL:', API_CONFIG.BASE_URL);
      
      // First, try to wake up the backend if it's sleeping
      console.log('⏰ Waking up backend...');
      await apiService.wakeUp();
      
      console.log('📤 Sending email request...');
      const response = await apiClient.post('/sendMail', data, { timeout: 60000 });
      console.log('✅ Email sent successfully:', response);
      return response;
    } catch (error) {
      console.error('❌ Error sending email:', error);
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timeout. The server might be waking up. Please try again.');
      }
      throw error;
    }
  },

  /**
   * Health check
   * @returns {Promise}
   */
  healthCheck: async () => {
    try {
      const response = await apiClient.get('/health');
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;
