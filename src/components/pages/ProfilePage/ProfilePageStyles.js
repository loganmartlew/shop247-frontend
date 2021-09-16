import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: grid;
  place-content: center;
  height: 88vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url('/ProfileBackground.png');
`;

export const ProfileBox = styled.div`
  display: grid;
  height: 88vh;
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
  display: block;
  text-align: left;
  background-color: transparent;
  padding: 3%;
  border: 0px;
  border-top: 1px;
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
