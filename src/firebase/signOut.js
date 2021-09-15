import { getAuth, signOut as logOut } from 'firebase/auth';

const signOut = async () => {
  const auth = getAuth();

  await logOut(auth);
};

export default signOut;
