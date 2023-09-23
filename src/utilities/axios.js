import axios from 'axios';

const instance = axios.create({
    timeout: 5000,
    baseURL: 'https://backend.getlinked.ai',
});

export default instance;
