import { apiUrl } from '../config';

const getCartPrice = async cart => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cart }),
  };

  const res = await fetch(`${apiUrl}/cart/checkprice`, options);

  if (!res.ok) return null;

  const { price } = await res.json();

  if (!price) return null;

  return price;
};

export default getCartPrice;
