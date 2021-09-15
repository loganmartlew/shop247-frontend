import { Link } from 'react-router-dom';
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import {
  HeaderContainer,
  LogoWrapper,
  Logo,
  NavBar,
  NavList,
  NavItem,
} from './HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoWrapper>
        <Link to='/'>
          <Logo src='/shop247-logo.png' alt='Shop247 Logo' />
        </Link>
      </LogoWrapper>
      <NavBar>
        <NavList>
          <NavItem>
            <Link to='/search'>
              <AiOutlineSearch />
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/cart'>
              <AiOutlineShoppingCart />
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/profile'>
              <AiOutlineUser />
            </Link>
          </NavItem>
        </NavList>
      </NavBar>
    </HeaderContainer>
  );
};

export default Header;
