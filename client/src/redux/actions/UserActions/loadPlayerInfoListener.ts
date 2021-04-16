import { Dispatch } from 'react'
import * as actionType from '@/redux/types';
import { StateAction } from '@/interfaces/StateInterface';

const loadPlayerInfoListener = (eventListener: any) => {
    return (dispatch: Dispatch<StateAction>) => {
        return dispatch({
            type: actionType.LOAD_PLAYER_INFO_EVENT_LISTENER,
            payload: eventListener
        });
    }
}

export default loadPlayerInfoListener;