import styled from 'styled-components';

export const SearchSection = styled.section`
  margin: 1em ${({ theme }) => theme.padding.horizontal};

  & > * {
    margin: 0 auto;
    max-width: 600px;
  }
`;

export const ProductsSection = styled.section`
  padding: 1em ${({ theme }) => theme.padding.horizontal};
`;
