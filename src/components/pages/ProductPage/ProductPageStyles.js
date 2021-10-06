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

// to do: maybe change below, or not
export const Logos = styled.div`
  float: right;
  padding-right: 20px;
  color: black;
  font-size: 150%;
`;

export const FacebookLogo = styled.li`
  list-style: none;
  display: inline-block;
  padding-right: 10px;
`;

export const TwitterLogo = styled.li`
  list-style: none;
  display: inline-block;
  padding-right: 10px;
`;

export const InstagramLogo = styled.li`
  list-style: none;
  display: inline-block;
`;
