/**
 * API Service Layer
 * Centralized API calls with error handling
 */

import axios from 'axios';
import { API_CONFIG } from '../config/constants';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
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
   * Send contact form email
   * @param {Object} data - Form data (name, email, message)
   * @returns {Promise}
   */
  sendEmail: async (data) => {
    try {
      const response = await apiClient.post('/sendMail', data);
      return response;
    } catch (error) {
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
