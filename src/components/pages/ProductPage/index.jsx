import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useSWR from 'swr';
import { fetchApi } from '../../../util/fetchApi';
import formatDisplayPrice from '../../../util/formatDisplayPrice';
import {
  Name,
  Description,
  Price,
  ProductContainer,
  Logos,
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
} from './ProductPageStyles';
import Button from '../../Button';
import {
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from 'react-icons/ai';

const fetcher = (...args) => fetchApi(...args).then(res => res.json());

const ProductPage = () => {
  const { productid } = useParams();

  const { data } = useSWR(`/products/${productid}`, fetcher);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!data?.product) return;

    fetchApi(`/users/${data.product.sellerId}`)
      .then(res => res.json())
      .then(data => setUser(data.user));
  }, [data]);

  const ProductCard = ({ product, user }) => (
    <ProductContainer>
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <p>Seller: {user.name}</p>
      <Link to={`/user/${user.uid}`}>
        <Button>View Profile</Button>
      </Link>
      {/*just a basic what-it-might-look-like*/}
      <Logos>
        <Link to='/'>
          <FacebookLogo>
            <AiOutlineFacebook />
          </FacebookLogo>
        </Link>
        <Link to='/'>
          <TwitterLogo>
            <AiFillTwitterSquare />
          </TwitterLogo>
        </Link>
        <Link to='/'>
          <InstagramLogo>
            <AiOutlineInstagram />
          </InstagramLogo>
        </Link>
      </Logos>
      <Price>{formatDisplayPrice(product.price)}</Price>
      {product.images.map(({ url }, i) => (
        <img src={url} key={i} alt='' />
      ))}
    </ProductContainer>
  );

  return (
    <>
      {data?.product && user && (
        <ProductCard product={data.product} user={user} />
      )}
      {data?.message && <h2>Product Not Found</h2>}
      {!data && <h2>Loading...</h2>}
    </>
  );
};

export default ProductPage;
