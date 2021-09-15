import Header from './Header';
import Notifications from '../Notifications';
import Footer from './Footer';
import { LayoutWrapper } from './LayoutStyles';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
      <Notifications />
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
