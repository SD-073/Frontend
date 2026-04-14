import { useProducts } from "../context";

function Categories() {
  const {products}= useProducts();
  console.log(products)
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li>men's clothes</li>
      </ul>
    </div>
  );
}

export default Categories;
