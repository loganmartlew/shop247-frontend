import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchApi } from '../../../util/fetchApi';
import ProductList from '../../products/ProductList';
import {
  UserSection,
  ListingsTitle,
  ProductsSection,
  Logos,
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
} from './UserPageStyles';
import {
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from 'react-icons/ai';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(null);

  const { userid } = useParams();

  useEffect(() => {
    fetchApi(`/users/${userid}`)
      .then(res => res.json())
      .then(data => setUser(data.user));

    fetchApi(`/users/${userid}/products`)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [userid]);

  if (!user || !products) return null;

  return (
    <div>
      <UserSection>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Location: Auckland</p>
        <p>{user.name}'s additional links:</p>
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
      </UserSection>
      <ListingsTitle>{user.name}'s Listings</ListingsTitle>
      <ProductsSection>
        <ProductList products={products} />
      </ProductsSection>
    </div>
  );
};

export default UserPage;
