import { AccEmail, AccHeader, AccID, AccountHeader, BoughtItems, DescBox, DivTest, email, h3_, NavItem, PageWrapper, ProfileBox, Section1, Section2, Section3, Section4, UserScore, Watchlist } from "../ProfilePage/ProfilePageStyles";
import { BsFillBookmarkFill, BsStarFill, BsFillGearFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import { FaCartArrowDown, FaShoppingBag, FaDollarSign, FaPhone, FaMapMarkerAlt, FaTruck } from 'react-icons/fa';
import { useAuth } from '../../../contexts/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();
  const email = user.email;
  const name = user.displayName;
//  const billAdd = user.Address; grab address from user account

  return (
    <>
      <PageWrapper>
        <ProfileBox>
        <div>
          <DescBox>
            <AccHeader>My Account</AccHeader>
            <AccID>Account ID: xxxxx</AccID>
              <Section1>
              
              {/* <AccEmail>Email:</AccEmail>
              {email} */}
              
              <p><strong>User Name: </strong> {name} (xx <BsStarFill />)</p>
              <p><strong>Email: </strong> {email}</p>
                            
              <p>-=Section 1=-</p>

              {/* <Link to = '/profile'> 
                <a><BsFillBookmarkFill /> Watchlist</a>
                <BoughtItems><FaCartArrowDown /> Bought Items</BoughtItems>
                <UserScore><BsStarFill /> User Score</UserScore>
              </Link> */}

              <p><a href = '/'><BsFillBookmarkFill /> Watchlist</a></p>
              <p><a href = '/'><FaCartArrowDown /> Purchase History</a></p>
              <p><BsStarFill /> User Feedback</p>

              </Section1>

              <Section2>
              <p>-=Section 2=-</p>
              <p><a href = "/"><FaShoppingBag /> Items selling</a></p>
              <p><a href = "/"><FaDollarSign /> Sold Items</a></p>
              </Section2>

              <Section3>
              <p>-=Section 3=-</p>
              <p><a href='/'><FaPhone /> Contact Details: xxxxxxxxx</a></p>
              <p><FaMapMarkerAlt /> Billing Address: </p>
              {/* print address here using billAdd */}
              <p><FaTruck /> Shipping Address</p>
              </Section3>

              <Section4>
              <p>-=Section 4=-</p>
              
              <p><a href='/'><BsFillGearFill /> Change Password</a></p>

              <p><a href='/'><BsFillGearFill /> Change Contact Details</a></p>

              <p><a href='/'><BsFillGearFill /> Change Billing/Shipping Address</a></p>
              
              <p><a href='/'><BsFillGearFill /> Change Payment Info</a></p>
              </Section4>
          </DescBox>
        </div>
        </ProfileBox>
      </PageWrapper>
    </>
  );
};

export default ProfilePage;
