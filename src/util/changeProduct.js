import { authFetchApi } from './fetchApi';
import changeIsValid from './changeIsValid';

const changeProduct = async (currentProductID, product, user) => {
  if (!changeIsValid(product)) throw new Error();
  if (!currentProductID) throw new Error();

  const res = await authFetchApi(
    `/products/${currentProductID}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ updates: product }),
    },
    user
  );

  if (!res.ok) throw new Error();
};

export default changeProduct;
