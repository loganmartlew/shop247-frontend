import styled from 'styled-components';
import { lighten } from 'polished';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 12vh;
  padding: 0.7em clamp(1em, 10%, 10em);
`;

export const LogoWrapper = styled.div`
  height: 100%;
`;

export const Logo = styled.img`
  height: 100%;
`;

export const NavBar = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1em;
  height: 100%;
`;

export const NavItem = styled.li`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.black};
  transition: color 150ms;

  &:hover {
    color: ${({ theme }) => lighten(0.3, theme.colors.black)};
  }
`;
