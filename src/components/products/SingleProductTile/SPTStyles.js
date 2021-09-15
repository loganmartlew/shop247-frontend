import styled from 'styled-components';

export const Tile = styled.article`
  --width: 300px;

  display: flex;
  flex-direction: column;
  gap: 0.5em;
  padding: 1em;
  width: var(--width);
  background-color: ${({ theme }) => theme.colors.pewter};
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h3``;

export const Subtitle = styled.h4``;

export const Info = styled.p``;

export const ImageWrapper = styled.div`
  position: relative;
  height: var(--width);
  width: 100%;
  margin-bottom: 0.5em;
  overflow: hidden;
`;

export const Img = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
`;

export const BottomRow = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Price = styled.p`
  font-size: 1.2em;
  font-weight: bold;
`;
