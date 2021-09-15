import Header from './Header';
import Notifications from '../Notifications';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Notifications />
      <Footer />
    </>
  );
};

export default Layout;
