import { authFetchApi } from './fetchApi';
import ChangeIsValid from './ChangeIsValid';

const ChangeProduct = async (product, user) => {
  if (!ChangeIsValid(product)) throw new Error();

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

export default ChangeProduct;
