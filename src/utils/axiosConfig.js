import axios from 'axios';

// Create an instance of axios with a custom config
const instance = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor with improved stream handling
instance.interceptors.response.use(
  (response) => {
    // Only clone the response data if it exists and hasn't been read
    if (response.data) {
      try {
        // Store the cloned data to prevent multiple reads
        const clonedData = JSON.parse(JSON.stringify(response.data));
        return {
          ...response,
          data: clonedData
        };
      } catch (error) {
        console.error('Error cloning response data:', error);
        return response;
      }
    }
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Response error:', error.response.data);
      // Clone error response data to prevent stream reading issues
      try {
        const clonedErrorData = JSON.parse(JSON.stringify(error.response.data));
        error.response.data = clonedErrorData;
      } catch (e) {
        console.error('Error cloning error response data:', e);
      }
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default instance;