import { User } from '../store/types';

export const fetchUserFromApi = async (): Promise<User> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  if (!response.ok) throw new Error('Failed to fetch user');
  return await response.json();
};
