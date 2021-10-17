import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router';
import { fetchApi } from '../../../util/fetchApi';
import {
  UserSection,
  Rating,
  ListingsTitle,
  ProductsSection,
  Image,
  DisplayPictureSection,
} from './UserPageStyles';
import SocialLinks from '../../SocialLinks';
import UserProducts from '../../products/UserProducts';
import TrustRating from '../../TrustRating';
import RateModal from './RateModal';

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState(null);

  const [rating, setRating] = useState(user?.rating?.rating ?? null);
  const [rateOpen, setRateOpen] = useState(false);

  const { userid } = useParams();

  const getUser = useCallback(() => {
    fetchApi(`/users/${userid}`)
      .then(res => res.json())
      .then(data => {
        setUser(data.user);
        setRating(data.user.rating?.rating);
      });
  }, [userid]);

  useEffect(() => {
    getUser();

    fetchApi(`/users/${userid}/products`)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [userid, getUser]);

  if (!user || !products) return null;
  return (
    <div>
      <UserSection>
        <DisplayPictureSection>
          <Image src={user.avatar} alt='profilepic' />
        </DisplayPictureSection>
        <h1>{user.name}</h1>
        <p>
          <strong>Email: </strong>
          {user.email}
        </p>
        {user.location && (
          <p>
            <strong>Location: </strong> {user.location}
          </p>
        )}
        {user.socials && (
          <p>
            {user.name}'s additional links:
          </p>
        )}
        <SocialLinks user={user} />
        <Rating onClick={() => setRateOpen(true)}>
          <strong>Trust Rating:</strong>{' '}
          {user.rating?.rating ? (
            <TrustRating display rating={rating} />
          ) : (
            'No Rating'
          )}
        </Rating>
        <RateModal open={rateOpen} setOpen={setRateOpen} refetch={getUser} />
      </UserSection>
      <ListingsTitle>{user.name}'s Listings</ListingsTitle>
      <ProductsSection>
        <UserProducts products={products} />
      </ProductsSection>
    </div>
  );
};

export default UserPage;
