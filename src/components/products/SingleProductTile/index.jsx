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
import { useCart } from '../../../contexts/CartContext';

const SingleProductTile = ({ product }) => {
  const { addItem } = useCart();

  return (
    <Tile>
      <Title>{product.name}</Title>
      <Subtitle>Auckland</Subtitle>
      <Info>{product.description}</Info>
      <ImageWrapper>
        <Img src={product.images[0].url} alt='tile-img' />
      </ImageWrapper>
      <BottomRow>
        <Price>{formatDisplayPrice(product.price)}</Price>
        <Button solid onClick={() => addItem({ quantity: 1, product })}>
          Add To Cart
        </Button>
      </BottomRow>
    </Tile>
  );
};

export default SingleProductTile;
