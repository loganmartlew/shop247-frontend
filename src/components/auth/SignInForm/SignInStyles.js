import styled from 'styled-components';

export const BottomFields = styled.fieldset`
  display: flex;
  align-items: center;
  gap: 1em;
  border: none;
`;

export const AltLink = styled.p`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.accent};

  &:hover {
    text-decoration: underline;
  }
`;
