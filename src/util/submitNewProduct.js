import { authFetchApi } from './fetchApi';
import productIsValid from './productIsValid';

const submitNewProduct = async (product, user) => {
  if (!productIsValid(product)) throw new Error();

  const res = await authFetchApi(
    `/products`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product }),
    },
    user
  );

  if (!res.ok) throw new Error('');
};

export default submitNewProduct;
