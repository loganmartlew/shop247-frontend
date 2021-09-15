import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & main {
    flex-grow: 1;
    padding-inline: ${({ theme }) => theme.padding.horizontal};
  }
`;
