import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || '' // with proxy, leave as ''
});

export default api;