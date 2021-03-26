import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://spark-6d2dd-default-rtdb.firebaseio.com/'
});

export default instance;