import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Table = styled.table`
  border: none;
  border-collapse: collapse;
  border: 2px solid ${({ theme }) => darken(0.1, theme.colors.lilac)};
  text-align: left;
`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => lighten(0, theme.colors.lilac)};
`;

export const Row = styled.tr``;

export const Heading = styled.th`
  padding: 0.4em 0.5em;
`;

export const TableBody = styled.tbody`
  & tr:nth-child(odd) {
    background-color: ${({ theme }) => lighten(0.15, theme.colors.lilac)};
  }

  & tr:nth-child(even) {
    background-color: ${({ theme }) => lighten(0.1, theme.colors.lilac)};
  }
`;

export const ProductField = styled.td`
  padding: 0.2em 0.5em;
`;

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

export const TableFooter = styled.tfoot`
  background-color: ${({ theme }) => lighten(0, theme.colors.lilac)};
`;
