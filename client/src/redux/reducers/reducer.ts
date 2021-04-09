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
            url:null,
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
    error: "",
    codeError: null
}



export const reducer: Reducer<State, StateAction> =
    (state: State = initialState, action: StateAction): State => {
        switch (action.type) {

            case actionType.UPDATE_USER_DATA_SUCCESS:
                return {
                    ...state,
                    auth: {
                        access_token: action.payload.tokens.access_token,
                        refresh_token: action.payload.tokens.refresh_token,
                    },
                    user: {
                        ...action.payload.data,
                        isLoggedIn: true,
                    }
                }

            case actionType.UPDATE_USER_DATA_FAILED:
                return {
                    ...state,
                    error: action.payload
                }

            default: return state;
        }
    }

export default reducer;