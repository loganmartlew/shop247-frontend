import styled from "styled-components";

export const PageWrapper = styled.div`
  display: grid;
  place-content: center;
  height: 88vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url('/ProfileBackground.png');
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: max-content;
  padding: 2em;
  margin: 1rem auto 10rem auto;
  background-color: ${({ theme }) => theme.colors.pewter};
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.4);
`;

export const Image = styled.img`
  border-style: solid;
  border-width: 2px;
  height: 60%;
  width: 20%;
`;