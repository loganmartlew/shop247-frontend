import { Link } from 'react-router-dom';
import {
  AccHeader,
  AccID,
  DescBox,
  PageWrapper,
  ProfileBox,
  Section1,
  Section2,
  Section3,
  Section4,
} from '../ProfilePage/ProfilePageStyles';
import { BsFillBookmarkFill, BsStarFill, BsFillGearFill } from 'react-icons/bs';
import {
  FaCartArrowDown,
  FaShoppingBag,
  FaDollarSign,
  FaPhone,
  FaMapMarkerAlt,
  FaTruck,
} from 'react-icons/fa';
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
                  <strong>User Name: </strong> {user.name} (xx <BsStarFill />)
                </p>
                <p>
                  <strong>Email: </strong> {user.email}
                </p>

                <p>-=Section 1=-</p>

                <p>
                  <a href='/'>
                    <BsFillBookmarkFill /> Watchlist
                  </a>
                </p>
                <p>
                  <a href='/'>
                    <FaCartArrowDown /> Purchase History
                  </a>
                </p>
                <p>
                  <BsStarFill /> User Feedback
                </p>
              </Section1>

              <Section2>
                <p>-=Section 2=-</p>
                <p>
                  <Link to='/'>
                    <FaShoppingBag /> Items selling
                  </Link>
                </p>
                <p>
                  <a href='/'>
                    <FaDollarSign /> Sold Items
                  </a>
                </p>
              </Section2>

              <Section3>
                <p>-=Section 3=-</p>
                <p>
                  <a href='/'>
                    <FaPhone /> Contact Details: xxxxxxxxx
                  </a>
                </p>
                <p>
                  <FaMapMarkerAlt /> Billing Address:{' '}
                </p>
                <p>
                  <FaTruck /> Shipping Address
                </p>
              </Section3>

              <Section4>
                <p>-=Section 4=-</p>

                <p>
                  <a href='/'>
                    <BsFillGearFill /> Change Password
                  </a>
                </p>

                <p>
                  <a href='/'>
                    <BsFillGearFill /> Change Contact Details
                  </a>
                </p>

                <p>
                  <a href='/'>
                    <BsFillGearFill /> Change Billing/Shipping Address
                  </a>
                </p>

                <p>
                  <a href='/'>
                    <BsFillGearFill /> Change Payment Info
                  </a>
                </p>
              </Section4>
            </DescBox>
          </div>
        </ProfileBox>
      </PageWrapper>
    </>
  );
};

export default ProfilePage;
