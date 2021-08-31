import Notifications from '../Notifications';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Notifications />
    </>
  );
};

export default Layout;
