import SingleProductTile from '../SingleProductTile';
import { List } from './ProductListStyles';
import testProducts from './testProducts';

const ProductList = products => {
  products = testProducts;

  console.log(products);

  return (
    <List>
      {products.map(product => (
        <SingleProductTile key={product._id} product={product} />
      ))}
    </List>
  );
};

export default ProductList;
