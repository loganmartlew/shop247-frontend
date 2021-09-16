import { Link } from 'react-router-dom';
import Button from '../../Button';

const PaymentSuccessPage = () => {
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
