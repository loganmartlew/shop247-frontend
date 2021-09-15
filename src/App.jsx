import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './components/layout';
import HomePage from './components/pages/HomePage';
import ProfilePage from './components/pages/ProfilePage';
import NotificationProvider from './contexts/NotificationContext';
import CartProvider from './contexts/CartContext';
import GlobalStyles from './styles/globals';
import theme from './styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NotificationProvider>
          <CartProvider>
            <Router>
              <Layout>
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
              </Layout>
            </Router>
          </CartProvider>
        </NotificationProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
