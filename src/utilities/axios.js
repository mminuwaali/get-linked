import axios from 'axios';

const instance = axios.create({
    timeout: 5000,
    baseURL: 'https://api.example.com',
});

export default instance;
