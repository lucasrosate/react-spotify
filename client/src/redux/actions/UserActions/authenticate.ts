import { Dispatch } from 'redux';
import * as actionType from '@/redux/types';
import getHarshParams from '@/utils/getHarshParams';
import getAccessToken from './getAccessToken';

import { StateAction } from '@/interfaces/StateInterface';
import { IErrorMessage} from '@/interfaces/ErrorHandlingInterface';
import store from '@/redux/store';

/**
 * This function returns user `access_token` and user `refresh_token` after login.
 * 
 * @returns `token` if success or error number `3` if failed.
 */
const authenticate = () => {
    return async (dispatch: Dispatch<StateAction>) => {


        var tokens = {
            access_token: localStorage.getItem("access_token") as string,
            refresh_token: localStorage.getItem("refresh_token") as string,
            success: false
        };
        console.log(tokens);
        tokens.success = tokens.refresh_token ? true : false;

        if (tokens.success && !tokens.access_token)
            return store.dispatch(getAccessToken());

        if (!tokens.success)
            tokens = getHarshParams();



        if (tokens.success) {
            return dispatch({
                type: actionType.AUTH_SUCCESS,
                payload: tokens
            });
        } else {
            return dispatch({
                type: actionType.AUTH_FAILED,
                payload: {
                    errorMessage: "token data is not valid",
                    codeError: 3
                } as IErrorMessage
            });
        }
    }
}


export default authenticate;