import store from "@/redux/store";
import { AxiosInstance } from "axios";
import removeTokens from "@/redux/actions/UserActions/removeTokens";

const unauthorizedInterceptor = (api: AxiosInstance) => {
    const UNAUTHORIZED = 401;
    api.interceptors.response.use(
        response => response,
        error => {
            const { status } = error.response;
            if (status === UNAUTHORIZED) {
                localStorage.removeItem("access_token");
            }
            store.dispatch(removeTokens());
            return Promise.reject(error);
        });
}


export default unauthorizedInterceptor;