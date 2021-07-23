import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './components/pages/HomePage';
import ProfilePage from './components/pages/ProfilePage';

const App = () => {
  return (
    <Layout>
      <Router>
        <Route path='/' component={HomePage} exact />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/product/:productid' />
        <Route path='/search' />
        <Route path='/user/:userid' />
      </Router>
    </Layout>
  );
};

export default App;
