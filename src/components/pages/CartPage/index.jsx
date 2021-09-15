import { CartSection } from './CartPageStyles';
import { List } from '../../products/ProductList/ProductListStyles';
import SingleProductTile from '../../products/SingleProductTile';
import { useCart } from '../../../contexts/CartContext';

const CartPage = () => {
  const { cart } = useCart();

  const EmptyCart = () => <h3>Your cart is currently empty!</h3>;

  const FilledCart = ({ cart }) => {
    return (
      <>
        <List>
          {cart &&
            cart.map(item => (
              <SingleProductTile
                key={item.product._id}
                product={item.product}
              />
            ))}
        </List>
      </>
    );
  };

  return (
    <>
      <CartSection>
        <h1>Your Cart</h1>

        {cart && cart.length > 0 ? <FilledCart cart={cart} /> : <EmptyCart />}
      </CartSection>
    </>
  );
};

export default CartPage;
