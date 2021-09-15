import { Link } from 'react-router-dom';
import Button from '../../Button';
import { CartSection } from './CartPageStyles';
import CartTable from './CartTable';
import { useCart } from '../../../contexts/CartContext';

const CartPage = () => {
  const { cart, removeItem } = useCart();

  return (
    <>
      <h1>Your Cart</h1>
      <CartSection>
        {(!cart || !cart.length > 0) && <h3>Your cart is currently empty!</h3>}
        {cart && cart.length > 0 && (
          <CartTable cart={cart} removeItem={removeItem} />
        )}
      </CartSection>
      <Link to='/'>
        <Button size='sm'>Continue Shopping</Button>
      </Link>
    </>
  );
};

export default CartPage;
