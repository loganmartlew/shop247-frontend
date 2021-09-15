import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const signIn = async (email, password) => {
  const auth = getAuth();

  const { user } = await signInWithEmailAndPassword(auth, email, password);

  if (!user) {
    throw new Error('Error creating new user');
  }

  return user;
};

export default signIn;
