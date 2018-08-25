import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-filipe.firebaseio.com/'
});

export default instance;