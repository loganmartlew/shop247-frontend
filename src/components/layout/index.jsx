import ErrorModal from '../ErrorModal';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <ErrorModal />
    </>
  );
};

export default Layout;
