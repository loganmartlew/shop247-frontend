import { Link } from 'react-router-dom';
import Button from '../../Button';
import { PageWrapper, CartSection, BottomButtons } from './CartPageStyles';
import CartTable from './CartTable';
import { useCart } from '../../../contexts/CartContext';
import { useAuth } from '../../../contexts/AuthContext';
import { useNotification } from '../../../contexts/NotificationContext';
import { authFetchApi } from '../../../util/fetchApi';

const CartPage = () => {
  const { cart, cartPrice, removeItem } = useCart();
  const { user } = useAuth();
  const { addError } = useNotification();

  const checkout = e => {
    e.preventDefault();

    if (!user) return addError('You are not logged in');

    authFetchApi(
      '/payments/create-checkout-session',
      {
        method: 'POST',
        body: JSON.stringify({ cart }),
      },
      user
    )
      .then(res => res.json())
      .then(data => (window.location.href = data.url));
  };

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
        <Button solid size='sm' onClick={checkout}>
          Checkout
        </Button>
        <Link to='/'>
          <Button size='sm'>Continue Shopping</Button>
        </Link>
      </BottomButtons>
    </PageWrapper>
  );
};

export default CartPage;
