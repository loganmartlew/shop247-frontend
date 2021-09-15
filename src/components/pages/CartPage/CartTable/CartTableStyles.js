import styled from 'styled-components';
import { lighten } from 'polished';

export const Table = styled.table`
  text-align: left;
`;

export const TableHeader = styled.thead``;

export const Row = styled.tr``;

export const Heading = styled.th``;

export const TableBody = styled.tbody``;

export const ProductField = styled.td``;

export const DeleteBtn = styled.button`
  border: none;
  background-color: unset;
  color: ${({ theme }) => theme.colors.danger};
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 150ms;

  &:hover {
    color: ${({ theme }) => lighten(0.1, theme.colors.danger)};
  }
`;
