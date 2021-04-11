import axios from "axios";
import unauthorizedInterceptor from './interceptors/unauthorizedInterceptor';

var api = axios.create({
    baseURL:"https://api.spotify.com/v1/me"
});

unauthorizedInterceptor(api);

export default api;