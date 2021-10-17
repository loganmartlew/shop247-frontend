import styled from 'styled-components';

export const IndicatorContainer = styled.div`
  display: flex;
  gap: 0.3em;
  margin: 1.5em auto;
  width: max-content;

  & a {
    color: ${({ theme }) => theme.colors.accent};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const IndicatorButton = styled.button``;
