// ============================================================
// Arrays Exercise — SOLUTIONS
// ============================================================

const products = [
  {
    id: 1,
    title: 'Fjallraven Backpack',
    price: 109.95,
    category: "men's clothing",
    rating: { rate: 3.9, count: 120 },
  },
  {
    id: 2,
    title: 'Mens Casual T-Shirts',
    price: 22.3,
    category: "men's clothing",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,
    category: "men's clothing",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    category: "men's clothing",
    rating: { rate: 2.1, count: 430 },
  },
  {
    id: 5,
    title: 'Gold & Silver Bracelet',
    price: 695.0,
    category: 'jewelery',
    rating: { rate: 4.6, count: 400 },
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave',
    price: 168.0,
    category: 'jewelery',
    rating: { rate: 3.9, count: 70 },
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    category: 'jewelery',
    rating: { rate: 3.0, count: 400 },
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold',
    price: 10.99,
    category: 'jewelery',
    rating: { rate: 1.9, count: 100 },
  },
  {
    id: 9,
    title: 'WD 2TB External Hard Drive',
    price: 64.0,
    category: 'electronics',
    rating: { rate: 3.3, count: 203 },
  },
  {
    id: 10,
    title: 'SanDisk SSD PLUS 1TB',
    price: 109.0,
    category: 'electronics',
    rating: { rate: 2.9, count: 470 },
  },
  {
    id: 11,
    title: 'Silicon Power 256GB SSD',
    price: 109.0,
    category: 'electronics',
    rating: { rate: 4.8, count: 319 },
  },
  {
    id: 12,
    title: 'WD 4TB Gaming Drive',
    price: 114.0,
    category: 'electronics',
    rating: { rate: 4.8, count: 400 },
  },
  {
    id: 13,
    title: 'Acer SB220Q Monitor',
    price: 599.0,
    category: 'electronics',
    rating: { rate: 2.9, count: 250 },
  },
  {
    id: 14,
    title: 'Samsung Curved Monitor',
    price: 999.99,
    category: 'electronics',
    rating: { rate: 2.2, count: 140 },
  },
  {
    id: 15,
    title: 'Snowboard Jacket',
    price: 56.99,
    category: "women's clothing",
    rating: { rate: 2.6, count: 235 },
  },
  {
    id: 16,
    title: 'Faux Leather Moto Jacket',
    price: 29.95,
    category: "women's clothing",
    rating: { rate: 2.9, count: 340 },
  },
  {
    id: 17,
    title: 'Rain Jacket Windbreaker',
    price: 39.99,
    category: "women's clothing",
    rating: { rate: 3.8, count: 679 },
  },
  {
    id: 18,
    title: 'MBJ Solid Short Sleeve',
    price: 9.85,
    category: "women's clothing",
    rating: { rate: 4.7, count: 130 },
  },
  {
    id: 19,
    title: 'Opna Short Sleeve Moisture',
    price: 7.95,
    category: "women's clothing",
    rating: { rate: 4.5, count: 146 },
  },
  {
    id: 20,
    title: 'DANVOUY Womens T Shirt',
    price: 12.99,
    category: "women's clothing",
    rating: { rate: 3.6, count: 145 },
  },
];

// ============================================================
// 🟡 Exercise 1 — map()
// map() goes through every element and returns a NEW array with the transformed results.
// The original array is never changed.
//
// Get an array of all product titles.
// ============================================================

const titles = products.map((product) => product.title);

console.log('Exercise 1 — titles:', titles);

// ============================================================
// 🟡 Exercise 2 — map()
// Here we use map() to reshape each object — instead of returning the full product,
// we return a new object with only the properties we need.
//
// Get an array of objects with only the title and price of each product.
// ============================================================

const titlesAndPrices = products.map((product) => ({
  title: product.title,
  price: product.price,
}));

console.log('Exercise 2 — titlesAndPrices:', titlesAndPrices);

// ============================================================
// 🟠 Exercise 3 — filter()
// filter() goes through every element and returns a NEW array with only
// the elements that pass the condition. The original array is never changed.
//
// Get all products in the 'electronics' category.
// ============================================================

const electronics = products.filter(
  (product) => product.category === 'electronics',
);

console.log('Exercise 3 — electronics:', electronics);

// ============================================================
// 🟠 Exercise 4 — filter()
// Same idea — filter() keeps only the elements where the condition is true.
//
// Get all products that cost less than $20.
// ============================================================

const affordable = products.filter((product) => product.price < 20);

console.log('Exercise 4 — affordable:', affordable);

// ============================================================
// 🟠 Exercise 5 — find()
// find() searches the array and returns the FIRST element that matches the condition.
// If nothing matches, it returns undefined.
//
// Find the product with id 12.
// ============================================================

const productById = products.find((product) => product.id === 12);

console.log('Exercise 5 — productById:', productById);

// ============================================================
// 🟠 Exercise 6 — find()
// Note: rating is a nested object — we access it with product.rating.rate.
//
// Find the first product with a rating above 4.5.
// ============================================================

const highlyRated = products.find((product) => product.rating.rate > 4.5);

console.log('Exercise 6 — highlyRated:', highlyRated);

// ============================================================
// 🔵 Exercise 7 — some()
// some() returns true if AT LEAST ONE element passes the condition.
// It stops as soon as it finds the first match.
//
// Check if there is any product that costs more than $500.
// ============================================================

const hasExpensive = products.some((product) => product.price > 500);

console.log('Exercise 7 — hasExpensive:', hasExpensive); // true

// ============================================================
// 🔵 Exercise 8 — every()
// every() returns true only if ALL elements pass the condition.
// If even one fails, it returns false.
//
// Check if all products have a rating above 1.
// ============================================================

const allRated = products.every((product) => product.rating.rate > 1);

console.log('Exercise 8 — allRated:', allRated); // true

// ============================================================
// 🔴 Exercise 9 — reduce()
// reduce() processes every element and reduces the array down to a SINGLE value.
// acc (accumulator) is the running total that builds up with each step.
// We start at 0 and add each product's price to it.
//
// Calculate the total price of all products combined.
// ============================================================

const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

console.log('Exercise 9 — totalPrice:', totalPrice);

// ============================================================
// 🔴 Exercise 10 — reduce()
// Same idea — we first sum all ratings with reduce(),
// then divide by the number of products to get the average.
// toFixed(2) rounds the result to 2 decimal places.
//
// Calculate the average rating of all products.
// ============================================================

const totalRating = products.reduce(
  (acc, product) => acc + product.rating.rate,
  0,
);
const averageRating = (totalRating / products.length).toFixed(2);

console.log('Exercise 10 — averageRating:', averageRating);

// ============================================================
// ⭐ Exercise 11 — Chaining
// We can chain methods together — the output of one becomes the input of the next.
// Step 1: filter() keeps only jewelery products under $100
// Step 2: map() extracts just the title from each result
//
// Get the titles of all 'jewelery' products that cost less than $100.
// ============================================================

const cheapJewelery = products
  .filter((product) => product.category === 'jewelery' && product.price < 100)
  .map((product) => product.title);

console.log('Exercise 11 — cheapJewelery:', cheapJewelery);
// ['White Gold Plated Princess', 'Pierced Owl Rose Gold']

// ============================================================
// ⭐ Exercise 12 — Chaining
// Step 1: filter() keeps only electronics products
// Step 2: reduce() adds up all their prices into a single total
//
// Get the total price of all 'electronics' products.
// ============================================================

const electronicsTotalPrice = products
  .filter((product) => product.category === 'electronics')
  .reduce((acc, product) => acc + product.price, 0);

console.log('Exercise 12 — electronicsTotalPrice:', electronicsTotalPrice);
