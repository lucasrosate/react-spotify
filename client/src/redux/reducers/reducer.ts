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
        username: "",
        profileImage: "",
        email: ""
    },
    player: null,
    loading: false,
    error: "",
    codeError: null,
}



export const reducer: Reducer<State, StateAction> =
    (state: State = initialState, action: StateAction): State => {
        switch (action.type) {
            case actionType.GET_STATE: 
                return state;

            case actionType.GET_TOKEN_OAUTH2_SUCCESS:
                return {
                    ...state,
                    auth: {
                        access_token: action.payload.access_token ,
                        refresh_token: action.payload.refresh_token
                    }
                }

            case actionType.GET_TOKEN_OAUTH2_FAILED:
                return {
                    ...state,
                    codeError: 1
                }

            default: return state;
        }
    }

export default reducer;