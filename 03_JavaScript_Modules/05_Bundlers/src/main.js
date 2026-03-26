import './style.css';
import { getProductsAxios } from './api.js';

const container = document.querySelector('#app');

const renderProducts = async () => {
  const products = await getProductsAxios();

  const cards = products.map(
    (product) => `
    <div class="card">
      <img src="${product.image}" alt="${product.title}" width="50" />
      <h2>${product.title}</h2>
      <p>${product.price}</p>
    </div>
    `,
  );

  container.innerHTML = cards.join('');
};

renderProducts();
