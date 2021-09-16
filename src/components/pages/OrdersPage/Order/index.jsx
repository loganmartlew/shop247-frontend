import formatDisplayPrice from '../../../../util/formatDisplayPrice';
import CartTable from '../../CartPage/CartTable';
import { OrderContainer } from './OrderStyles';

const Order = ({ order }) => {
  return (
    <OrderContainer>
      <h3>Price: {formatDisplayPrice(order.totalPrice)}</h3>
      <h3>Date: {new Date(order.date).toLocaleDateString()}</h3>
      <CartTable cart={order.items} cartPrice={order.totalPrice} noDelete />
    </OrderContainer>
  );
};

export default Order;
