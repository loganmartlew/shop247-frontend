import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Button from '../../Button';
import { fetchApi } from '../../../util/fetchApi';

const PaymentCancelPage = () => {
  const location = useLocation();

  useEffect(() => {
    const parsedQuery = queryString.parse(location.search);
    const orderId = parsedQuery.orderid;

    if (!orderId) return;

    fetchApi(`/payments/paymentcancel/${orderId}`);
  }, [location]);

  return (
    <div>
      <h1>Order Cancelled</h1>
      <Link to='/'>
        <Button solid>Continue Shopping</Button>
      </Link>
    </div>
  );
};

export default PaymentCancelPage;
