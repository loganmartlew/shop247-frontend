import { apiUrl } from '../config';

export const fetchApi = async (endpoint, options) => {
  return await fetch(`${apiUrl}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'shop247-api-key': process.env.REACT_APP_API_KEY,
      ...options?.headers,
    },
  });
};

export const authFetchApi = async (endpoint, options, user) => {
  if (!user)
    throw new Error('User must be provided for an authenticated request');

  return await fetch(`${apiUrl}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'shop247-user-uid': user.uid,
      'shop247-api-key': process.env.REACT_APP_API_KEY,
      ...options?.headers,
    },
  });
};
