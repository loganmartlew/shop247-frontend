import useSWR from 'swr';
import { fetchApi } from '../../../util/fetchApi';
import { useAuth } from '../../../contexts/AuthContext';
import Order from './Order';

const fetcher = (...args) => fetchApi(...args).then(res => res.json());

const OrdersPage = () => {
  const { user } = useAuth();
  const { data } = useSWR([`/orders/user/${user.uid}`, user], fetcher);

  return (
    <div>
      {data?.orders &&
        data.orders.map(order => <Order order={order} key={order._id} />)}
    </div>
  );
};

export default OrdersPage;
