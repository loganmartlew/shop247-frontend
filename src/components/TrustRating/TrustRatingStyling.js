import styled from 'styled-components';

export const RatingContainer = styled.div`
  color: grey;
  font-size: 1.2rem;
  padding-left: 10px;
`;

export const Star = styled.span`
  color: ${({ display, selected, hoverSelected, theme }) => {
    switch (true) {
      case selected: {
        return theme.colors.gold;
      }
      case hoverSelected: {
        return display ? theme.colors.grey : theme.colors.yellow;
      }
      default: {
        return theme.colors.grey;
      }
    }
  }};
`;
