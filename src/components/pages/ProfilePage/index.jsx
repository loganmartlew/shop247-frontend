import { Link } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs';
import { FaCartArrowDown } from 'react-icons/fa';
import {
  AccHeader,
  AccID,
  DescBox,
  PageWrapper,
  ProfileBox,
  Section1,
} from '../ProfilePage/ProfilePageStyles';
import { useAuth } from '../../../contexts/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <>
      <PageWrapper>
        <ProfileBox>
          <div>
            <DescBox>
              <AccHeader>My Account</AccHeader>
              <AccID>Account ID: xxxxx</AccID>
              <Section1>
                <p>
                  <strong>User Name: </strong> {user.displayName}
                </p>
                <p>
                  <strong>Email: </strong> {user.email}
                </p>
                <p>
                  <a href='/'>
                    <BsFillGearFill /> Change Password
                  </a>
                </p>
                <p>
                  <Link to='/'>
                    <FaCartArrowDown /> Purchase History
                  </Link>
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
