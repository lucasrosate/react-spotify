import { Dispatch } from "react";
import * as actionType from '@/redux/types';
import { StateAction } from "@/interfaces/StateInterface";

const loadPlayer = (player: Spotify.SpotifyPlayer) => {
    return (dispatch: Dispatch<StateAction>) => {
        return dispatch({
            type: actionType.LOAD_PLAYER,
            payload: player
        });
    }
}

export default loadPlayer;