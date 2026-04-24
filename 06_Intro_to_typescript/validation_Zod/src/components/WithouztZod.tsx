import { z } from 'zod/v4';
import { ProductSchema, type Product } from '../schemas';

const WithouztZod = () => {
  const fakedResponse = [
    {
      id: 1,
      title: 'Product',
      price: 'test',
    },
  ];

  const product = fakedResponse as unknown as Product[];
  console.log(product[0].price * 1.2);

  const { success, error } = z.array(ProductSchema).safeParse(fakedResponse);
  if (!success) console.log(z.prettifyError(error));
  console.log(success);

  return (
    <div>
      <h2>Without ZOD</h2>
    </div>
  );
};

export default WithouztZod;
