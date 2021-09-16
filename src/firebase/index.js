import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCMkfLRhLmiE9fChGg43OelbiTyH4IgN40',
  authDomain: 'shop247-17ab2.firebaseapp.com',
  projectId: 'shop247-17ab2',
  storageBucket: 'shop247-17ab2.appspot.com',
  messagingSenderId: '727742918723',
  appId: '1:727742918723:web:809d00035b3a85ef5ea4f6',
};

initializeApp(firebaseConfig);

export { default as signIn } from './signIn';
export { default as signUp } from './signUp';
export { default as signOut } from './signOut';
export { default as resetPassword } from './resetPassword';
