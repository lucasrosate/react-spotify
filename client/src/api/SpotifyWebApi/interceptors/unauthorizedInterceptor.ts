import { AxiosInstance } from "axios";
import { getAccessToken } from '@/redux/actions/UserActions';

const unauthorizedInterceptor = (api: AxiosInstance) => {
    const UNAUTHORIZED = 401;
    api.interceptors.response.use(
        response => response,
        error => {
            const { status } = error.response;
            if (status === UNAUTHORIZED) {
                localStorage.removeItem("access_token");
                return getAccessToken();
            }
            return Promise.reject(error);
        });
    }


export default unauthorizedInterceptor;