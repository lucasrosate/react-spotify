import axios from "axios";
import unauthorizedInterceptor from './interceptors/unauthorizedInterceptor';

var api = (function(){
    const api = axios.create({
        baseURL:"https://api.spotify.com/v1/me"
    });
    unauthorizedInterceptor(api);
    return api;
})();




export default api;