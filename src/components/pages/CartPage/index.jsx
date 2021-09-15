import { Link } from 'react-router-dom';
import Button from '../../Button';
import { PageWrapper, CartSection, BottomButtons } from './CartPageStyles';
import CartTable from './CartTable';
import { useCart } from '../../../contexts/CartContext';

const CartPage = () => {
  const { cart, cartPrice, removeItem } = useCart();

  return (
    <PageWrapper>
      <h1>Your Cart</h1>
      <CartSection>
        {(!cart || !cart.length > 0) && <h3>Your cart is currently empty!</h3>}
        {cart && cart.length > 0 && (
          <CartTable
            cart={cart}
            cartPrice={cartPrice}
            removeItem={removeItem}
          />
        )}
      </CartSection>
      <BottomButtons>
        <Link to='/checkout'>
          <Button solid size='sm'>
            Checkout
          </Button>
        </Link>
        <Link to='/'>
          <Button size='sm'>Continue Shopping</Button>
        </Link>
      </BottomButtons>
    </PageWrapper>
  );
};

export default CartPage;
