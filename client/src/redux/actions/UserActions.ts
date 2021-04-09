
import axios from 'axios';
import store from '../store/store';
import getHarshParams from '@/utils/getHarshParams';
import * as actionType from '../types';
import { State, StateAction } from '@/interfaces/StateInterface';
import { Dispatch } from 'redux';
import { IErrorMessage } from '@/interfaces/ErrorHandlingInterface';


export const getUserData = () => {
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

        const res = await axios.get('https://api.spotify.com/v1/me', {
            headers: { 'Authorization': 'Bearer ' + tokens.access_token }
        });

        if (res.status >= 400) {
            localStorage.removeItem("access_token");
            return getAccessToken();
        }

        return dispatch({
            type: actionType.GET_USER_DATA_SUCCESS,
            payload: res.data
        })

    }
}

export const getAccessToken = () => {
    return async (dispatch: Dispatch<StateAction>) => {
        const refresh_token = localStorage.getItem("refresh_token");

        const res = await axios.get("http://localhost:3333/refresh_token", {
            data: refresh_token
        });

        if (res.status !== 400) {
            localStorage.setItem("access_token", res.data.access_token);
            return dispatch({
                type: actionType.GET_ACCESS_TOKEN_SUCCESS,
                payload: res.data.access_token
            });

        } else {

            localStorage.removeItem("refresh_token");
            return dispatch({
                type: actionType.GET_ACCESS_TOKEN_FAILED,
                payload: ""
            });
        }
    }
}

export const authenticate = () => {
    return async (dispatch: Dispatch<StateAction>) => {
        const tokens = getHarshParams();

        if (tokens.success) {
            return dispatch({
                type: actionType.AUTH_SUCCESS,
                payload: tokens
            })
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