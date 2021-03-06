import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: grid;
  place-content: center;
  height: 79.755vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url('/ProfileBackground.png');
`;

export const ProfileBox = styled.div`
  display: grid;
  height: max-content;
  width: 100vh;
  background-color: transparent;
  padding-top: 5%;
  border: 0px;
  border-style: solid;
  border-color: black;
`;

export const DescBox = styled.div`
  display: grid;
  place-content: left;
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pewter};
  box-shadow: 1px 1px 8px 0px rgba(0, 0, 0, 0.4);
  padding: 5%;
`;

export const Section1 = styled.section`
  text-align: left;
  background-color: transparent;
  padding-left: 3%;
  padding-top: 3%;
  border: 0px;
  border-top: 1px;
  border-style: solid;
  border-color: black;
`;

export const Section2 = styled.section`
  text-align: left;
  background-color: transparent;
  padding-left: 3%;
  padding-top: 2%;
`;

export const Section3 = styled.section`
  text-align: left;
  background-color: transparent;
  padding-left: 3%;
  padding-top: 2%;
  padding-bottom: 3%;
  border: 0px;
  border-bottom: 1px;
  border-style: solid;
  border-color: black;
`;

export const AccHeader = styled.h1`
  text-align: center;
  padding: 5px;
  border: 1px;
  border-style: solid;
  border-color: black;
`;

export const AccID = styled.h3`
  text-align: right;
  font-size: medium;
  font-weight: bold;
  padding-top: 10px;
`;

export const FakeLink = styled.span`
  transition: color 100ms;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Image = styled.img`
  border-style: solid;
  border-width: 2px;
  width: 130px;
  aspect-ratio: 1/1;
`;
