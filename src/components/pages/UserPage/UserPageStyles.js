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
