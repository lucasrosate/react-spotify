
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

        console.log(success)

        if (success) {
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

        var access_token = localStorage.getItem("access_token");
        var refresh_token = localStorage.getItem("refresh_token");


        if (!access_token) {
            const newToken = getHarshParams();
            console.log(newToken)

            if (newToken.success && newToken.access_token.length > 1) {
                console.log(newToken)
                access_token = newToken.access_token;
                refresh_token = newToken.refresh_token;

            } else {
                return dispatch({
                    type: actionType.UPDATE_USER_DATA_FAILED,
                    payload: ""
                });
            }
        }

        const res = await axios.get('https://api.spotify.com/v1/me', {
            headers: { 'Authorization': 'Bearer ' + access_token }
        });

        if (res.status >= 400) {
            localStorage.removeItem("access_token");
            return getUserData();
        }

        localStorage.setItem("access_token", access_token as string);
        localStorage.setItem("refresh_token", refresh_token as string);


        const data = res.data;

        dispatch({
            type: actionType.UPDATE_USER_DATA_SUCCESS,
            payload: {
                data,
                tokens: {
                    refresh_token,
                    access_token
                }
            }

        });


    }
}