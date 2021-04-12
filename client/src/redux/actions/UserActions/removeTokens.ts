import { REMOVE_TOKENS } from '@/redux/types';
import { Dispatch } from "react"
import { StateAction } from "@/interfaces/StateInterface"


const removeTokens = () => (dispatch: Dispatch<StateAction>) =>
    dispatch({
        type: REMOVE_TOKENS,
        payload: ""
    })

export default removeTokens;

