import { authFetchApi } from './fetchApi';

const removeProduct = async (productId, user) => {
  if (!productId) throw new Error();

  const res = await authFetchApi(
    `/products/${productId}`,
    {
      method: 'DELETE',
    },
    user
  );

  if (!res.ok) throw new Error();
};

export default removeProduct;
