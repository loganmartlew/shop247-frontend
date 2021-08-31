import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './components/pages/HomePage';
import ProfilePage from './components/pages/ProfilePage';
import ErrorProvider from './contexts/ErrorContext';
import GlobalStyles from './styles/globals';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ErrorProvider>
        <Layout>
          <Router>
            <Route path='/' component={HomePage} exact />

            <Route path='/search' />
            <Route path='/products/:productid' />
            <Route path='/categories' />
            <Route path='/categories/:category' />

            <Route path='/profile' component={ProfilePage} />
            <Route path='/profile/orders' />
            <Route path='/user/:userid' />

            <Route path='/cart' />
            <Route path='/checkout' />
            <Route path='/pay' />
          </Router>
        </Layout>
      </ErrorProvider>
    </>
  );
};

export default App;
