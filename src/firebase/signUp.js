import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

const signUp = async (name, email, password) => {
  const auth = getAuth();

  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  if (!user) {
    throw new Error('Error creating new user');
  }

  await updateProfile(user, { displayName: name });

  return user;
};

export default signUp;
