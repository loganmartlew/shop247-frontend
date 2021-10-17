import styled from 'styled-components';
import { lighten } from 'polished';

export const UserSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin: 0.5rem auto;
  padding: 0.5em;
  max-width: fit-content;
  background-color: ${({ theme }) => lighten(0.1, theme.colors.lilac)};
  text-align: center;
  border-style: solid;
  border-width: 1px;
`;

export const ListingsTitle = styled.h1`
  text-align: center;
  margin-bottom: 0.7em;
`;

export const ProductsSection = styled.section`
  margin-bottom: 2em;
`;

export const Imahe = styled.img`
  border-style: solid;
  border-width: 1px;
  height: 60%;
  width: 20%;
`;

export const DisplayPictureSection = styled.div`
  text-align: center;
`;