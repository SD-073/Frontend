let value: unknown = 'Hello!';
let result1 = <string>value;

// console.log(value.toUpperCase());

let result = value as string;
// console.log(result.toUpperCase());

// const input = document.querySelector('input') as HTMLInputElement;

type Product = {
  id: number;
  title: string;
  price: number;
};

async function fetchProducts() {
  const response = await fetch('https://fakestoreapi.com/products');
  const products = (await response.json()) as Product[];

  products.forEach((product) => {
    console.log(`${product.title} - $${product.price} `);
  });
}

// fetchProducts();
