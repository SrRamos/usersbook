import Axios from 'axios';
import { IUser } from '../types';

const axios = Axios.create({
  baseURL: 'https://encouraging-complete-periwinkle.glitch.me',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  }
});

/**
 * @param {page} number page to paginate the results
 * @param {search} string query search
 * @return {IUser[]} users list
 */
const fetchUsers = async (page: number = 1, search?: string): Promise<IUser[]> => {
  const url = `/users?_page=${page}&_limit=6${search ? `&q=${search}` : ''}`

  return axios.get(url).then(res => res.data)
}

const api = {
  fetchUsers,
}

export default api;
