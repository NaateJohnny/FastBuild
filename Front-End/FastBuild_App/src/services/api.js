import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://localhost:63606/api',
    // baseURL: 'https://localhost:44365/api',
    baseURL: 'http://10.0.2.2:5000/api',
    timeout: 1000,
});

export default api;