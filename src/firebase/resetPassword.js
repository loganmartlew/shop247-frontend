import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const resetPassword = async email => {
  const auth = getAuth();

  await sendPasswordResetEmail(auth, email);
};

export default resetPassword;
