import axios from 'axios';

const API_BASE_URL = 'https://organic-backend-hvld.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Product {
  _id: string;
  name: string;
  image: string;
  brand: string;
  description?: string;
}

export interface Feedback {
  productId: string;
  name: string;
  message: string;
}

export interface FeedbackResponse {
  message: string;
}

export const productsAPI = {
  getAllProducts: async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data;
  },

  getProductById: async (id: string): Promise<Product> => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  submitFeedback: async (feedback: Feedback): Promise<FeedbackResponse> => {
    const response = await api.post('/feedback', feedback);
    return response.data;
  },
};