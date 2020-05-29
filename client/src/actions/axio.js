import axios from 'axios';

export const baseURL = 'https://damp-tor-32321.herokuapp.com/';
//export const baseURL = process.env.MY_BASE_ENV || 'http://localhost:5000/';

export const axio = axios.create({ baseURL, timeout: 1000 });
