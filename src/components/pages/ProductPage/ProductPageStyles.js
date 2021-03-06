import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  max-width: 700px;
  margin: 3rem auto;
  padding: 1.5em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
`;

export const Name = styled.h2`
  color: ${({ theme }) => theme.colors.black};
`;

export const Description = styled.h4`
  color: ${({ theme }) => theme.colors.black};
`;

export const Price = styled.h3`
  color: ${({ theme }) => theme.colors.black};
`;
