import axios from 'axios';

export const baseURL = process.env.baseURL || 'http://localhost:5000/';

export const axio = axios.create({ baseURL, timeout: 1000 });
