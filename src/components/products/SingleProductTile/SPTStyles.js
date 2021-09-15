import styled from 'styled-components';

export const Tile = styled.div`
  border-style: solid;
  border-color: gray;
  border-width: 2px;
  border-radius: 10px;
  margin: 10px 10px 10px 10px;
  display: inline-block;
  width: 300px;
`;

export const Title = styled.h3`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  text-align: left;
  font-family: inherit;
`;

export const Subtitle = styled.h6`
  padding-bottom: 10px;
  padding-left: 6px;
  text-align: left;
  font-family: inherit;
`;

export const Info = styled.h5`
  text-align: left;
  font-family: inherit;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
`;

export const Img = styled.img`
  border-style: solid;
  border-color: black;
  border-width: 2px;
  width: 100%;
`;

export const Price = styled.h4`
  float: left;
  font: inherit;
  font-weight: bolder;
  padding-left: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
