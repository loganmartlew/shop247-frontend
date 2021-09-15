import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './components/layout';
import PrivateRoute from './components/auth/PrivateRoute';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import ProfilePage from './components/pages/ProfilePage';
import CartPage from './components/pages/CartPage';
import NotificationProvider from './contexts/NotificationContext';
import AuthProvider from './contexts/AuthContext';
import CartProvider from './contexts/CartContext';
import GlobalStyles from './styles/globals';
import theme from './styles/theme';

// Initialize Firebase
import './firebase';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NotificationProvider>
          <AuthProvider>
            <CartProvider>
              <Router>
                <Layout>
                  <Route path='/' component={HomePage} exact />

                  <Route path='/signup' component={SignUpPage} />
                  <Route path='/signin' component={SignInPage} />

                  <Route path='/search' />
                  <Route path='/products/:productid' />
                  <Route path='/categories' />
                  <Route path='/categories/:category' />
                  <PrivateRoute path='/list' />

                  <PrivateRoute path='/profile' component={ProfilePage} />
                  <PrivateRoute path='/profile/orders' />
                  <Route path='/user/:userid' />

                  <Route path='/cart' component={CartPage} />
                  <PrivateRoute path='/checkout' />
                  <PrivateRoute path='/pay' />
                </Layout>
              </Router>
            </CartProvider>
          </AuthProvider>
        </NotificationProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
