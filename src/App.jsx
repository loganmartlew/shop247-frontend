import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from './components/layout';
import PrivateRoute from './components/auth/PrivateRoute';
import NotificationProvider from './contexts/NotificationContext';
import AuthProvider from './contexts/AuthContext';
import CartProvider from './contexts/CartContext';
import GlobalStyles from './styles/globals';
import theme from './styles/theme';

// Page Components
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import SignUpPage from './components/pages/SignUpPage';
import SearchPage from './components/pages/SearchPage';
import ProductPage from './components/pages/ProductPage';
import ListPage from './components/pages/ListPage';
import OrdersPage from './components/pages/OrdersPage';
import ProfilePage from './components/pages/ProfilePage';
import UserPage from './components/pages/UserPage';
import CartPage from './components/pages/CartPage';
import PaymentSuccessPage from './components/pages/PaymentSuccessPage';
import PaymentCancelPage from './components/pages/PaymentCancelPage';

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
                  <Switch>
                    <Route path='/' component={HomePage} exact />

                    <Route path='/signup' component={SignUpPage} />
                    <Route path='/signin' component={SignInPage} />

                    <Route path='/search' component={SearchPage} />
                    <Route path='/product/:productid' component={ProductPage} />
                    <PrivateRoute path='/list' component={ListPage} />

                    <PrivateRoute
                      path='/profile/orders'
                      component={OrdersPage}
                    />
                    <PrivateRoute path='/profile' component={ProfilePage} />
                    <Route path='/user/:userid' component={UserPage} />

                    <Route path='/cart' component={CartPage} />
                    <Route
                      path='/paymentsuccess'
                      component={PaymentSuccessPage}
                    />
                    <Route
                      path='/paymentcancel'
                      component={PaymentCancelPage}
                    />
                  </Switch>
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
