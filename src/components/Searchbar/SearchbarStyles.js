import styled from 'styled-components';
import Color from 'color';

const bgColor = Color('hsl(0, 0%, 90%)');
const border = `1px solid ${bgColor.darken(0.2).hsl()}`;

const blue = Color('hsl(220, 100%, 50%)');

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
    background-color: ${bgColor.lighten(0.05).hsl()};
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
    background-color: ${blue};
    border-color: ${bgColor.darken(0.8).hsl()};
    color: white;
  }
`;
