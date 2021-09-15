import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={props => {
        if (!!user) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{ pathname: '/signin', state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};

export default PrivateRoute;
