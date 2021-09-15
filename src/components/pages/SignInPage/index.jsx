import { useHistory } from 'react-router-dom';
import SignInForm from '../../auth/SignInForm';
import { PageWrapper } from './SignInPageStyles';
import { useAuth } from '../../../contexts/AuthContext';

const SignInPage = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const submit = (email, password) => {
    signIn(email, password).then(() => {
      history.push('/');
    });
  };

  return (
    <PageWrapper>
      <SignInForm submitHandler={submit} />
    </PageWrapper>
  );
};

export default SignInPage;
