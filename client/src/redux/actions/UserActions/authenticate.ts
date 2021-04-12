import { Dispatch } from 'redux';
import authServerApi from '@/api/AuthServerApi';
import getHarshParams from '@/utils/getHarshParams';
import encrypt from '@/utils/encrypt';
import * as actionType from '@/redux/types';
import { StateAction } from '@/interfaces/StateInterface';
import { IErrorMessage } from '@/interfaces/ErrorHandlingInterface';
import decrypt from '@/utils/decrypt';


interface IToken {
    access_token: string | null,
    refresh_token: string | null,
    success?: boolean
}

/**
 * This function returns user `access_token` and user `refresh_token` after login.
 * 
 * @returns `token` if success or error number `3` if failed.
 */
const authenticate = () => {
    return async (dispatch: Dispatch<StateAction>) => {
        var tokens: IToken = { access_token: null, refresh_token: null };

        tokens.access_token = localStorage.getItem("access_token") as string;
        tokens.refresh_token = localStorage.getItem("refresh_token") as string;

        if (!tokens.access_token && !tokens.refresh_token) {
            tokens = getHarshParams();
            if (tokens.success) {
                localStorage.setItem("access_token", tokens.access_token as string);
                localStorage.setItem("refresh_token", tokens.refresh_token as string);

                return dispatch({
                    type: actionType.AUTH_SUCCESS,
                    payload: tokens
                });
            } else {
                return dispatch({
                    type: actionType.AUTH_FAILED,
                    payload: {
                        codeError: 1,
                        errorMessage: "Params are not valid, user must login"
                    } as IErrorMessage
                });
            }
        } else if (!tokens.access_token && tokens.refresh_token) {
            const res = await authServerApi.get('/refresh_token', {
                params: { refresh_token: encrypt(tokens.refresh_token)}
            });

            tokens.access_token = decrypt(res.data.access_token);
            localStorage.setItem("access_token", tokens.access_token as string);
            localStorage.setItem("refresh_token", tokens.refresh_token as string);

            return dispatch({
                type: actionType.AUTH_SUCCESS,
                payload: tokens
            });
        } else {
            return dispatch({
                type: actionType.AUTH_SUCCESS,
                payload: tokens
            });
        }
    }
}


export default authenticate;