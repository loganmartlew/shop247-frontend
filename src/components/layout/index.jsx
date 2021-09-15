import Header from './Header';
import Notifications from '../Notifications';
import { LayoutWrapper } from './LayoutStyles';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
      <Notifications />
    </LayoutWrapper>
  );
};

export default Layout;
