import { Tile, Title, Subtitle, Info, Img, Price } from './SPTStyles';
import formatDisplayPrice from '../../../util/formatDisplayPrice';

const SingleProductTile = ({ product }) => {
  console.log(product);

  return (
    <Tile>
      <Img src={product.images[0].url} alt='tile-img' />
      <Title>{product.name}</Title>
      <Subtitle>Auckland</Subtitle>
      <Info>{product.description}</Info>
      <Price>{formatDisplayPrice(product.price)}</Price>
    </Tile>
  );
};

export default SingleProductTile;
