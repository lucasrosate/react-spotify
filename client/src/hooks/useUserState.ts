import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, getAccessToken, authenticate } from '@/redux/actions/UserActions';
import { State } from '@/interfaces/StateInterface';

const useUserState = () => {
    const dispatch = useDispatch();

    var userState = useSelector((state: State) => state.user);
    var authState = useSelector((state: State) => state.auth);
    var errorState = useSelector((state: State) => state.error);

    useEffect(() => { dispatch(authenticate()) }, [dispatch]);

    useEffect(() => {
        console.log(errorState.codeError);
        if (errorState.codeError === 1)
            dispatch(getAccessToken());
    }, [errorState.errorMessage, dispatch]);

    useEffect(() => {
        if (authState.access_token)
            dispatch(getUserData());
    }, [authState.access_token, dispatch])

    return userState;
}

export default useUserState;
