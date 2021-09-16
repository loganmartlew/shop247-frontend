import useSWR from 'swr';
import { fetchApi } from '../../../util/fetchApi';
import { useAuth } from '../../../contexts/AuthContext';

const fetcher = (...args) => fetchApi(...args).then(res => res.json());

const OrdersPage = () => {
  const { user } = useAuth();
  const { data } = useSWR([`/orders/user/${user.uid}`, user], fetcher);
  console.log(data);

  return <div></div>;
};

export default OrdersPage;
