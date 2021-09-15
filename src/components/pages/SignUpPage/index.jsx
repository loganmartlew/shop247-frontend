import { useHistory } from 'react-router-dom';
import SignInForm from '../../auth/SignInForm';
import { PageWrapper } from './SignUpPageStyles';
import { useAuth } from '../../../contexts/AuthContext';

const SignUpPage = () => {
  const { signUp } = useAuth();
  const history = useHistory();

  const submit = (email, password) => {
    signUp(email, password).then(() => {
      history.push('/');
    });
  };

  return (
    <PageWrapper>
      <SignInForm signup submitHandler={submit} />
    </PageWrapper>
  );
};

export default SignUpPage;
