import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://food-boutique.b.goit.study/api',
// });

export class ProductsAPI {
  static options = {
    baseURL: 'https://food-boutique.b.goit.study/api',
    page: 1,
    limit: 10,
  };
  constructor() {
    this.api = axios.create({
      baseURL: ProductsAPI.options.baseURL,
    });
  }

  static setOptions(newOptions) {
    ProductsAPI.options = { ...ProductsAPI.options, ...newOptions };
  }

  async getProducts() {
    try {
      const response = await this.api.get('/products', {
        params: {
          page: ProductsAPI.options.page,
          limit: ProductsAPI.options.limit,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async getPopularProducts() {
    try {
      const response = await api.get('/products/popular', {
        params: {
          page: ProductsAPI.options.page,
          limit: ProductsAPI.options.limit,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async getDiscountProducts() {
    try {
      const response = await api.get('/products/discount', {
        params: {
          page: ProductsAPI.options.page,
          limit: ProductsAPI.options.limit,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async getProductCategories() {
    try {
      const response = await api.get('/products/categories', {
        params: {
          page: ProductsAPI.options.page,
          limit: ProductsAPI.options.limit,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async getProductById(id) {
    try {
      const response = await api.get(`/products/${id}`, {
        params: {
          page: ProductsAPI.options.page,
          limit: ProductsAPI.options.limit,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async createOrder(orderData) {
    try {
      const response = await api.post('/orders', orderData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async subscribeToNewProducts(subscriptionData) {
    try {
      const response = await api.post('/subscription', subscriptionData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
}
