import { User } from '../types';

// eslint-disable-next-line
const API_URL = `https://jsonplaceholder.typicode.com/users`;

export function getPeoples(): Promise<User[]> {
  return fetch(API_URL)
    .then(response => response.json());
}
