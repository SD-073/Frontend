// const start = Date.now();
// while (Date.now() - start < 5000) {}
// console.log('Done blocking');

// fetch('https://fakestoreapi.com/products')
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => console.log(data));

// console.log('i will run first');

// const promisedCoffee = new Promise((resolve, reject) => {
//   const isCoffeeReady = Math.random() > 0.5;

//   if (isCoffeeReady) {
//     resolve('here is your coffee ☕');
//   } else {
//     reject('sorry, no coffee available');
//   }
// });

// promisedCoffee
//   .then((msg) => console.log(msg))
//   .catch((error) => console.error(error))
//   .finally(() => console.log('this will run in both conditions'));

// GETTING DATA

// const path = 'https://fakestoreapi.com/products';

// fetch(path)
//   .then((response) => {
//     console.log(response);

//     if (!response.ok) {
//       throw new Error('Something went wrong');
//     }

//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log('this will run in both conditions');
//   });

// const getProducts = async () => {
//   const response = await fetch('https://fakestoreapi.com/products');
//   const data = await response.json();
//   console.log(data);
// };

// getProducts();

// const getProducts = async () => {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products');

//     if (!response.ok) {
//       throw new Error(`Something went wrong: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);

//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log('This will run in any condition');
//   }
// };

// getProducts();

// const getProducts = async () => {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products');

//     if (!response.ok) {
//       throw new Error(`Something went wrong: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);

//     const cards = data.map(
//       (product) => `
//         <div>
//             <h2>${product.title}</h2>
//             <img src=${product.image} width=100 />
//             <p>$ ${product.price} </p>
//             <p>Rate: ${product.rating.rate} / 5 </p>
//             <button>BUY</button>
//         </div>
//         `,
//     );

//     document.body.innerHTML = cards.join('');
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log('This will run in any condition');
//   }
// };

// getProducts();

// const div = document.createElement('div');

// // div.textContent = '<h2>Hello World!</h2>';
// div.innerHTML = '<h2>Hello World!</h2>';

// document.body.appendChild(div);

// SEND DATA => POST

// const createProduct = async () => {
//   try {
//     const response = await fetch(
//       'https://fakestoreapi.com/products',

//       {
//         method: 'POST',

//         headers: {
//           'Content-Type': 'application/json',
//         },

//         body: JSON.stringify({
//           title: 'Product',
//           description: 'description',
//           category: 'something',
//           price: 49.99,
//           image: 'link.png',
//         }),
//       },
//     );

//     if (!response.ok) throw new Error(`Error: ${response.status}`);
//     console.log(response);
//     const data = await response.json();
//     console.log('Created:', data);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log('this will run in any condition');
//   }
// };

// createProduct();

// const updateProduct = async () => {
//   try {
//     const response = await fetch(
//       'https://fakestoreapi.com/products/10',

//       {
//         method: 'PUT',

//         headers: {
//           'Content-Type': 'application/json',
//         },

//         body: JSON.stringify({
//           title: 'updated',
//           description: 'updated',
//           category: 'updated',
//           price: 49.99,
//           image: 'updated.png',
//         }),
//       },
//     );

//     if (!response.ok) throw new Error(`Error: ${response.status}`);
//     console.log(response);
//     const data = await response.json();
//     console.log('updated:', data);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log('this will run in any condition');
//   }
// };

// updateProduct();

// const deleteProduct = async () => {
//   try {
//     const response = await fetch('https://fakestoreapi.com/products/10', {
//       method: 'DELETE',
//     });

//     if (!response.ok) throw new Error(`Error: ${response.status}`);

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log('this will run anyways');
//   }
// };

// deleteProduct();
