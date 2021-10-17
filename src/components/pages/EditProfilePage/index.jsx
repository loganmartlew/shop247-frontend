import { useState, useEffect } from 'react';
import { fetchApi } from '../../../util/fetchApi';
import { useAuth } from '../../../contexts/AuthContext';
import { PageWrapper } from './EPPStyles';
import EditProfileForm from './EditProfileForm';

const EditProfilePage = () => {
  const [user, setUser] = useState(null);

  const auth = useAuth();

  useEffect(() => {
    fetchApi(`/users/${auth.user.uid}`)
      .then(res => res.json())
      .then(data => setUser(data.user));
  }, [auth]);

  if (!user) return null;

  return (
    <PageWrapper>
      <EditProfileForm user={user} />
    </PageWrapper>
  );
};

export default EditProfilePage;
