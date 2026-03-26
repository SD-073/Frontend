import axios from 'axios';

export const getProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok)
      throw new Error(`Something went wrong: ${response.status}`);

    const data = await response.json();
    console.log('HTTP request using FETCH:', data);

    // return data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductsAxios = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log('HTTP request using AXIOS:', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
