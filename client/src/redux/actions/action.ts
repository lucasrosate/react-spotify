
import axios from 'axios';
import store from '../store/store';
import getHarshParams from '@/utils/getHarshParams';
import * as actionType from '../types';
import { State, StateAction } from '@/interfaces/StateInterface';
import { Dispatch } from 'redux';


export const getToken = () => {
    return (dispatch: Dispatch<StateAction>) => {
        const {
            success,
            access_token,
            refresh_token
        } = getHarshParams();

        if(success) {
            return dispatch({
                type: actionType.GET_TOKEN_OAUTH2_SUCCESS,
                payload: {
                    access_token,
                    refresh_token
                }
            });
            
        } else {
            return dispatch({
                type: actionType.GET_TOKEN_OAUTH2_FAILED,
                payload: {

                }
            });
        }
    }
}

export const getUserData = () => {
    return async (dispatch: Dispatch<StateAction>) => {
            const state = store.getState();

            const res = await axios.get('https://api.spotify.com/v1/me', {
                headers: { 'Authorization': 'Bearer ' + state.auth.access_token }
            });

            dispatch({
                type: actionType.UPDATE_USER_DATA_SUCCESS,
                payload: res.data
            });
    
        
    }
}