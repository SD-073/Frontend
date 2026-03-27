import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    // console.log(response); // response.data
    return response.data;
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }
};
