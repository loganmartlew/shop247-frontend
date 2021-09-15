import { useParams } from 'react-router-dom';

const PRODUCT = {
  _id: '54jknghe45t098',
  name: 't-shirt',
  description: 'a very nice shirt',
  price: 1000,
  images: [
    {
      url: 'image1',
    },
    {
      url: 'image2',
    },
    {
      url: 'image3',
    },
  ],
  sellerId: 'es4rtgiu4a3we',
};

const ProductPage = () => {
  const { productid } = useParams();
  console.log(productid);

  const product = PRODUCT;

  return <div></div>;
};

export default ProductPage;
