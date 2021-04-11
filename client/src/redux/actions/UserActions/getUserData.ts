import { Dispatch } from 'redux';
import store from '@/redux/store'
import spotifyWebApi from '@/api/SpotifyWebApi';
import * as actionType from '@/redux/types';
import { StateAction } from '@/interfaces/StateInterface';
import { IErrorMessage } from '@/interfaces/ErrorHandlingInterface';

/**  This function returns user data using access_token.
 * 
 * @returns `user_data` or fail returning error number `1`.
 */
const getUserData = () => {
    return async (dispatch: Dispatch<StateAction>) => {
        const tokens = store.getState().auth;

        if (!tokens.access_token) {
            return dispatch({
                type: actionType.GET_USER_DATA_FAILED,
                payload: {
                    errorMessage: "access_token does not exist.",
                    codeError: 1
                } as IErrorMessage
            });
        }
        const res = await spotifyWebApi.get('/', {
            headers: { 'Authorization': 'Bearer ' + tokens.access_token }
        });

        return dispatch({
            type: actionType.GET_USER_DATA_SUCCESS,
            payload: res.data
        });

    }
}

export default getUserData;
