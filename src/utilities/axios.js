import axios from 'axios';

const instance = axios.create({
    timeout: 50000,
    baseURL: 'https://backend.getlinked.ai/hackathon',
});

export default instance;
export function parseDjangoError(error, defaultMessage = 'An error occurred') {
    let message = '';
    if (error.response && error.response.data) {
        const { data } = error.response;
        if (typeof data === 'string') {
            message = data;
        } else if (typeof data === 'object') {
            Object.keys(data).forEach(key => {
                message += `${key}: ${data[key].join(', ')}\n`;
            });
        }
    }
    else if (error.message) message = error.message;
    else message = defaultMessage;
    return message;
};
