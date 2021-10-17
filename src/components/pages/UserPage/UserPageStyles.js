import styled from 'styled-components';
import { lighten } from 'polished';

export const UserSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin: 2rem auto;
  padding: 1em;
  max-width: max-content;
  background-color: ${({ theme }) => lighten(0.1, theme.colors.lilac)};
`;

export const ListingsTitle = styled.h1`
  text-align: center;
  margin-bottom: 0.7em;
`;

export const ProductsSection = styled.section`
  margin-bottom: 2em;
`;

export const Logos = styled.div`
  padding-right: 20px;
  color: black;
  font-size: 150%;
`;

export const FacebookLogo = styled.li`
  list-style: none;
  display: inline-block;
  padding-right: 15px;
`;

export const InstagramLogo = styled.li`
  list-style: none;
  display: inline-block;
`;
