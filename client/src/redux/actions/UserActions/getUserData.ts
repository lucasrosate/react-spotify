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
        const access_token = store.getState().auth.access_token;

        const res = await spotifyWebApi.get('/', {
            headers: { 'Authorization': 'Bearer ' + access_token }
        });

        if (res.status < 400) { 
            dispatch({
                type: actionType.GET_USER_DATA_SUCCESS,
                payload: {
                    data: res.data,
                    spotify: "player"
                }
            });  
    
        } else {
            return dispatch({
                type: actionType.GET_USER_DATA_FAILED,
                payload: {
                    codeError: 3,
                    errorMessage: "Failed to get user data."
                } as IErrorMessage
            } )
        }
    }
}

export default getUserData;
