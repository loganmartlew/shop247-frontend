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
  FakeLink,
  Image,
} from '../ProfilePage/ProfilePageStyles';
import { Button } from 'antd';
import SocialLinks from '../../SocialLinks';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [Img, setImg] = useState(null);
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

  let imgsrc = Img;

  return (
    <>
      <PageWrapper>
        <ProfileBox>
          <div>
            <DescBox>
              <AccHeader>My Account</AccHeader>
              <AccID>Account ID: xxxxx </AccID>
              <Section1>
                <Image src={imgsrc} alt='profilepic' />
                <br />
                <label>
                  imgurl:
                  <input
                    type='text'
                    placeholder='Enter text'
                    onChange={event => setImg(event.target.value)}
                  />
                  <input type='submit' value='Submit' />
                </label>
                <Button> Submit </Button>
                <p>
                  <strong>User Name: </strong> {user.name}
                </p>
                <p>
                  <strong>Email: </strong> {user.email}
                </p>
                <SocialLinks user={user} />
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
              </Section1>
            </DescBox>
          </div>
        </ProfileBox>
      </PageWrapper>
    </>
  );
};

export default ProfilePage;
