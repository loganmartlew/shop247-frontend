import { Tile, Title, Subtitle, Info, Img, Price } from './SPTStyles';
import formatDisplayPrice from '../../../util/formatDisplayPrice';

const SingleProductTile = ({ product }) => {
  console.log(product);

  return (
    <Tile>
      <Title>{product.name}</Title>
      <Subtitle>subtitle</Subtitle>
      <Info>{product.description}</Info>
      <Img src={product.images[0].url} alt='tile-img' />
      <Price>{formatDisplayPrice(product.price)}</Price>
    </Tile>
  );
};

export default SingleProductTile;
