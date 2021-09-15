import { Link } from 'react-router-dom';
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import Button from '../../Button';
import {
  HeaderContainer,
  LogoWrapper,
  Logo,
  NavBar,
  NavList,
  NavIcon,
  NavItem,
} from './HeaderStyles';
import { useAuth } from '../../../contexts/AuthContext';

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <HeaderContainer>
      <LogoWrapper>
        <Link to='/'>
          <Logo src='/shop247-logo.png' alt='Shop247 Logo' />
        </Link>
      </LogoWrapper>
      <NavBar>
        <NavList>
          <NavIcon>
            <Link to='/'>
              <AiOutlineSearch />
            </Link>
          </NavIcon>
          <NavIcon>
            <Link to='/cart'>
              <AiOutlineShoppingCart />
            </Link>
          </NavIcon>
          <NavIcon>
            <Link to='/profile'>
              <AiOutlineUser />
            </Link>
          </NavIcon>
          {user && (
            <>
              <NavItem>
                <Link to='/profile'>{user.displayName ?? user.email}</Link>
              </NavItem>
              <NavItem>
                <Button size='sm' onClick={signOut}>
                  Sign Out
                </Button>
              </NavItem>
            </>
          )}
          {!user && (
            <NavItem>
              <Link to='/signin'>
                <Button solid size='sm'>
                  Sign In
                </Button>
              </Link>
            </NavItem>
          )}
        </NavList>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
