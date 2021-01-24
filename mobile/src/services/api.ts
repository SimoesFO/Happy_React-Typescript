import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:3333',
    //baseURL: 'http://192.168.15.4:3333',
});

export default api;