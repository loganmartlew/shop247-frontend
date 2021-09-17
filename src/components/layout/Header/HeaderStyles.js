import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 12vh;
  padding: 0.7em clamp(1em, 10%, 10em);
  background-color: ${({ theme }) => theme.colors.pewter};
  border-color: black;
  border: 0px;
  border-bottom: 1px;
  border-style: solid;
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
  color: ${({ theme }) => theme.colors.black};
  transition: color 150ms;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const NavIcon = styled(NavItem)`
  font-size: 2rem;
`;
