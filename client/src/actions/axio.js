import axios from 'axios';

export const axio = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 1000,
});
