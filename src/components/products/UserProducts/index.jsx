import UserProductTile from '../UserProductTile';
import { List } from './UserProductStyle';

const UserProducts = ({ products }) => {
  return (
    <List>
      {products &&
        products.map(product => (
          <UserProductTile key={product._id} product={product} />
        ))}
    </List>
  );
};

export default UserProducts;
