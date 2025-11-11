import axios from "axios";

// Create a reusable axios instance
const apiClient = axios.create({
  baseURL: "https://api.example.com", // replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // optional timeout
});

// Request interceptor (optional: e.g., for adding auth token)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // example: get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor (optional: e.g., global error handling)
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

// Common API methods
const commonApi = {
  get: (url: string, params: any) => apiClient.get(url, { params }),
  post: (url: string, data: any) => apiClient.post(url, data),
  put: (url: string, data: any) => apiClient.put(url, data),
  delete: (url: string) => apiClient.delete(url),
  patch: (url: string, data: any) => apiClient.patch(url, data),
};

export default commonApi;
