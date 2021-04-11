import { Dispatch } from 'redux';
import * as actionType from '@/redux/types';
import authServerApi from '@/api/AuthServerApi';
import { StateAction } from '@/interfaces/StateInterface';


/**
 * This function get access_token if the user already has the refresh_token.
 * 
 * @returns `access_token` or fail returning error number `2`.
 */
const getAccessToken = () => {
    return async (dispatch: Dispatch<StateAction>) => {

        const refresh_token = localStorage.getItem("refresh_token") as string;

        authServerApi.get("/refresh_token", {
            params: {
                refresh_token: refresh_token
            }
        })
            .then((res) => {
                console.log(res);
                if (res.status !== 400) {
                    localStorage.setItem("access_token", res.data.access_token);
                    return dispatch({
                        type: actionType.GET_ACCESS_TOKEN_SUCCESS,
                        payload: res.data.access_token
                    });
                }
            })
            .catch((err) => { throw err; });
    }
}

export default getAccessToken;
