import { authFetchApi } from './fetchApi';
import ChangeIsValid from './ChangeIsValid';

const changeProduct = async (currentProductID, product, user) => {
  if (!ChangeIsValid(product)) throw new Error();
  if (!currentProductID) throw new Error();

  const res = await authFetchApi(
    `/products/${currentProductID}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product }),
    },
    user
  );

  if (!res.ok) throw new Error('');

  console.log("CURRENT PRODUCT:", currentProductID)
};

export default changeProduct;
