import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import Button from '../../Button';

const PaymentSuccessPage = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <Link to='/'>
        <Button solid>Continue Shopping</Button>
      </Link>
    </div>
  );
};

export default PaymentSuccessPage;
