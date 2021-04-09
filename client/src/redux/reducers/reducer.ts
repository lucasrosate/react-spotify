import { State, StateAction } from '@/interfaces/StateInterface';
import { Reducer, Store } from 'redux';
import { Dispatch } from 'redux';
import * as actionType from '../types';

const initialState: State = {
    auth: {
        access_token: null,
        refresh_token: null,
    },
    user: {
        id: null,
        displayName: "",
        email: "",
        followers: {
            href: null,
            total: null
        },
        profileImage: "",
        externalUrl: {
            spotify: ""
        },
        images: [{
            url: null,
            height: null,
            width: null
        }],
        product: "",
        href: "",
        type: "",
        uri: "",
        isLoggedIn: false
    },
    player: null,
    loading: false,
    error: {
        errorMessage: "",
        codeError: null
    }

}



export const reducer: Reducer<State, StateAction> =
    (state: State = initialState, action: StateAction): State => {
        switch (action.type) {

            case actionType.GET_USER_DATA_SUCCESS:
                return {
                    ...state,
                    user: {
                        ...action.payload.data,
                        isLoggedIn: true,
                    }
                }

            case actionType.GET_USER_DATA_FAILED:
                return {
                    ...state,
                    error: action.payload
                }


            case actionType.GET_ACCESS_TOKEN_SUCCESS:
                return {
                    ...state,
                    auth: {
                        ...state.auth,
                        access_token: action.payload
                    }
                }

            case actionType.GET_USER_DATA_FAILED:
                return {
                    ...state,
                    error: action.payload
                }

            case actionType.AUTH_SUCCESS: 
                return {
                    ...state,
                    auth: {
                        ...action.payload
                    }
                }
            
            case actionType.AUTH_SUCCESS:
                return {
                    ...state,
                    error: action.payload
                }

            default: return state;
        }
    }

export default reducer;