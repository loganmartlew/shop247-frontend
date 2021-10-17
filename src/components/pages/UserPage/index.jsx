import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchApi } from '../../../util/fetchApi';
import ProductList from '../../products/ProductList';
import { UserSection, ListingsTitle, ProductsSection, Imahe, 
DisplayPictureSection, } from './UserPageStyles';

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
        {/* <Imahe src={user.profile_pic} alt='profilepic'/> */}
        <DisplayPictureSection>
        <Imahe src='/testpicture.jpg' alt='testpicture' />
        </DisplayPictureSection>
        <h1>{user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Location: Auckland</p>
      </UserSection>
      <ListingsTitle>{user.name}'s Listings</ListingsTitle>
      <ProductsSection>
        <ProductList products={products} />
      </ProductsSection>
    </div>
  );
};

export default UserPage;
