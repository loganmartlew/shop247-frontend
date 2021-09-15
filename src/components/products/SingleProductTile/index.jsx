import Button from '../../Button';
import {
  Tile,
  Title,
  Subtitle,
  Info,
  ImageWrapper,
  Img,
  BottomRow,
  Price,
} from './SPTStyles';
import formatDisplayPrice from '../../../util/formatDisplayPrice';

const SingleProductTile = ({ product }) => {
  return (
    <Tile>
      <Img src={product.images[0].url} alt='tile-img' />
      <Title>{product.name}</Title>
      <Subtitle>Auckland</Subtitle>
      <Info>{product.description}</Info>
      <ImageWrapper>
        <Img src={product.images[0].url} alt='tile-img' />
      </ImageWrapper>
      <BottomRow>
        <Price>{formatDisplayPrice(product.price)}</Price>
        <Button solid>Add To Cart</Button>
      </BottomRow>
    </Tile>
  );
};

export default SingleProductTile;
