import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <Link to='/profile'>Profile</Link>
    </>
  );
};

export default HomePage;
