import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

const authApi = axios.create({
    baseURL: REACT_APP_BASE_URL,
    headers: ""
});

export default authApi;