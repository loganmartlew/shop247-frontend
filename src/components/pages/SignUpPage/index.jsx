import SignInForm from '../../auth/SignInForm';
import { PageWrapper } from './SignUpPageStyles';

const SignUpPage = () => {
  return (
    <PageWrapper>
      <SignInForm signup />
    </PageWrapper>
  );
};

export default SignUpPage;
