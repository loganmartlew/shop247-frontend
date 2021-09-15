import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const signUp = async (email, password) => {
  const auth = getAuth();

  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  if (!user) {
    throw new Error('Error creating new user');
  }

  return user;
};

export default signUp;
