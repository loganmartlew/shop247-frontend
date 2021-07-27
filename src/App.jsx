import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './components/pages/HomePage';
import ProfilePage from './components/pages/ProfilePage';

const App = () => {
  return (
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
  );
};

export default App;
