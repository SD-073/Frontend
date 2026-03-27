import { renderCart } from './pages/cart';
import './style.css';
import { getProducts } from './utils/api';
import { addToCart } from './utils/storage';

const main = document.querySelector('#main-content');

const renderRating = ({ rate, count }) => `⭐ ${rate} / 5 (${count} reviews)`;

const createProductCard = (product) => {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="card-img" />
    <span class="category">${product.category} </span>
    <h2 class="card-title">${product.title} </h2>
    <p class="rating">${renderRating(product.rating)}</p>
    <p class="price">$${product.price} </p>
    <button class="btn btn-add">Add to Cart</button>  
  `;

  card.querySelector('.btn-add').addEventListener('click', () => {
    addToCart(product);

    const btn = card.querySelector('.btn-add');
    btn.textContent = 'Added!';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = 'Add to Cart';
      btn.disabled = false;
    }, 1000);
  });

  return card;
};

const renderShop = async () => {
  main.innerHTML = '<p class="loading">Loading products...</p>';

  const products = await getProducts();

  main.innerHTML = '';

  const grid = document.createElement('grid');
  grid.className = 'product-grid';

  products.forEach((product) => grid.appendChild(createProductCard(product)));

  main.appendChild(grid);
};

// document.querySelector('.site-header').addEventListener('click', (e) => {
//   //   console.log('clicked', e.target);
//   //   console.log('clicked', e.target.dataset);
//   const page = e.target.closest('[data-page')?.dataset.page;
//   console.log(page);
// });

document.querySelector('.site-header').addEventListener('click', (e) => {
  e.preventDefault();

  const page = e.target.closest('[data-page')?.dataset.page;

  if (!page) return;
  setActiveLink(page);
  renderPage(page);
});

const setActiveLink = (page) => {
  document.querySelectorAll('[data-page').forEach((link) => {
    link.classList.toggle('active', link.dataset.page === page);
  });
};

const renderPage = (page) => {
  if (page === 'shop') renderShop();
  else if (page === 'cart') renderCart(main);
};

renderShop('shop'); // initial load
