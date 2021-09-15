import SingleProductTile from '../SingleProductTile';
import { List } from './ProductListStyles';

const ProductList = ({ products }) => {
  return (
    <List>
      {products &&
        products.map(product => (
          <SingleProductTile key={product._id} product={product} />
        ))}
    </List>
  );
};

export default ProductList;
