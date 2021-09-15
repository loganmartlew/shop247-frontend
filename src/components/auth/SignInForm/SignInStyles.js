import styled from 'styled-components';
import { darken } from 'polished';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: max-content;
  padding: 2em;
  background-color: ${({ theme }) => theme.colors.pewter};
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.4);
`;

export const FormGroup = styled.fieldset`
  border: none;
`;

export const FieldLabel = styled.label`
  display: block;
`;

export const TextInput = styled.input`
  padding: 0.4em 1em;
  min-width: 35ch;
  border: 1px solid ${({ theme }) => darken(0.2, theme.colors.pewter)};
  border-radius: 100vh;
  outline: none;
  font-size: 1em;
`;

export const ErrorMessage = styled.p`
  margin-top: 0.3em;
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.danger};
`;

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
