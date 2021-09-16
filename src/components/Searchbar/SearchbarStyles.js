import styled from 'styled-components';
import { lighten, darken } from 'polished';

const bgColor = 'hsl(0, 0%, 90%)';
const border = `1px solid ${darken(0.2, bgColor)}`;

export const SearchSection = styled.section`
  margin: 1em 0;

  & > * {
    margin: 0 auto;
    max-width: 600px;
  }
`;

export const SearchbarContainer = styled.form`
  display: flex;
  width: 100%;
`;

export const TextInput = styled.input`
  flex-grow: 1;
  padding: 0.5em 1em;
  background-color: ${bgColor};
  border: ${border};
  border-right: none;
  border-radius: 1000px 0 0 1000px;
  font-size: 1em;

  &:focus {
    background-color: ${lighten(0.05, bgColor)};
    outline: none;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  background-color: ${bgColor};
  border: ${border};
  border-radius: 0 1000px 1000px 0;
  font-size: 1em;
  cursor: pointer;

  --time: 100ms;
  transition: background-color var(--time), color var(--time), border-color,
    var(--time);

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: ${darken(0.8, bgColor)};
    color: white;
  }
`;
