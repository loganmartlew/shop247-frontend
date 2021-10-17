import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs';
import { RiUserSettingsFill } from 'react-icons/ri';
import { AiOutlineShoppingCart, AiOutlineFile } from 'react-icons/ai';
import { fetchApi } from '../../../util/fetchApi';
import { useAuth } from '../../../contexts/AuthContext';
import {
  AccHeader,
  AccID,
  DescBox,
  PageWrapper,
  ProfileBox,
  Section1,
  Section2,
  Section3,
  FakeLink,
  Image,
} from '../ProfilePage/ProfilePageStyles';
import SocialLinks from '../../SocialLinks';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const auth = useAuth();

  useEffect(() => {
    fetchApi(`/users/${auth.user.uid}`)
      .then(res => res.json())
      .then(data => setUser(data.user));
  }, [auth]);

  const resetClick = () => {
    auth.resetPassword(user.email);
  };

  if (!user) return null;

  return (
    <>
      <PageWrapper>
        <ProfileBox>
          <div>
            <DescBox>
              <AccHeader>My Account</AccHeader>
              <AccID>Account ID: xxxxx </AccID>
              <Section1>
                <Image src={user.avatar} alt='profilepic' />
                <br />
                <p>
                  <strong>User Name: </strong> {user.name}
                </p>
                <p>
                  <strong>Email: </strong> {user.email}
                </p>
                {user.location && (
                  <p>
                    <strong>Location: </strong> {user.location}
                  </p>
                )}
                {user.social && (
                  <div>
                    <strong>Socials:</strong>
                    <SocialLinks user={user} />
                  </div>
                )}
              </Section1>
              <Section2>
                <p>
                  <FakeLink>
                    <Link to='/profile/orders'>
                      <AiOutlineShoppingCart /> Purchase History
                    </Link>
                  </FakeLink>
                </p>
                <p>
                  <FakeLink>
                    <Link to={`/user/${user.uid}`}>
                      <AiOutlineFile /> Your Listings
                    </Link>
                  </FakeLink>
                </p>
              </Section2>
              <Section3>
                <p>
                  <FakeLink onClick={resetClick}>
                    <BsFillGearFill /> Change Password
                  </FakeLink>
                </p>
                <p>
                  <FakeLink>
                    <Link to={'/editprofile'}>
                      <RiUserSettingsFill /> Change Account Details
                    </Link>
                  </FakeLink>
                </p>
              </Section3>
            </DescBox>
          </div>
        </ProfileBox>
      </PageWrapper>
    </>
  );
};

export default ProfilePage;
