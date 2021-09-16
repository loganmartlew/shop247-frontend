import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetchApi } from '../../../util/fetchApi';
import formatDisplayPrice from '../../../util/formatDisplayPrice';
import {
  Name,
  Description,
  Price,
  ProductContainer,
} from './ProducctPageStyles';

const fetcher = (...args) => fetchApi(...args).then(res => res.json());

const ProductPage = () => {
  const { productid } = useParams();

  const { data } = useSWR(`/products/${productid}`, fetcher);

  const ProductCard = ({ product }) => (
    <ProductContainer>
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <Price>{formatDisplayPrice(product.price)}</Price>
    </ProductContainer>
  );

  return (
    <>
      {data && data.product && <ProductCard product={data.product} />}
      {data?.message && <h2>Product Not Found</h2>}
      {!data && <h2>Loading...</h2>}
    </>
  );
};

export default ProductPage;
