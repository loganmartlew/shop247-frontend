import { useParams } from 'react-router-dom';
import { Name, Description, Price, ProductContainer } from './ProducctPageStyles'

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

  return <ProductContainer>
    <Name>{product.name}</Name>
    <Description>{product.description}</Description>
    <Price>${product.price}</Price>
  </ProductContainer>;
};

export default ProductPage;
