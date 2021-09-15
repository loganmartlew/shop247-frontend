import Header from './Header';
import Notifications from '../Notifications';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Notifications />
    </>
  );
};

export default Layout;
