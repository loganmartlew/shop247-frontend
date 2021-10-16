import { Link } from 'react-router-dom';
import { BsFillGearFill } from 'react-icons/bs';
import {
  AiOutlineShoppingCart,
  AiOutlineFile,
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from 'react-icons/ai';
import {
  AccHeader,
  AccID,
  DescBox,
  PageWrapper,
  ProfileBox,
  Section1,
  FakeLink,
} from '../ProfilePage/ProfilePageStyles';
import { useAuth } from '../../../contexts/AuthContext';

const ProfilePage = () => {
  const { user, resetPassword } = useAuth();

  const resetClick = () => {
    resetPassword(user.email);
  };

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
                  <FakeLink onClick={resetClick}>
                    <BsFillGearFill /> Change Password
                  </FakeLink>
                </p>
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
                  <strong>Additional Links: </strong>
                </p>
                <p>
                  <AiOutlineFacebook /> Facebook:
                  <FakeLink>
                    <Link to='/'> Link </Link>
                  </FakeLink>
                </p>
                <p>
                  <AiFillTwitterSquare /> Twitter:
                  <FakeLink>
                    <Link to='/'> Link </Link>
                  </FakeLink>
                </p>
                <p>
                  <AiOutlineInstagram /> Instagram:
                  <FakeLink>
                    <Link to='/'> Link </Link>
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
