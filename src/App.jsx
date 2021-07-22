import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './components/pages/HomePage';

const App = () => {
  return (
    <Layout>
      <Router>
        <Route path='/' component={HomePage} exact />
      </Router>
    </Layout>
  );
};

export default App;
