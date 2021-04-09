import { useCallback, useEffect, useState } from "react";
import { getToken, getUserData } from '@/redux/actions/UserActions';
import { State } from '@/interfaces/StateInterface';
import { useDispatch, useSelector } from 'react-redux';


const useUserState = () => {
    const dispatch = useDispatch();
    var userState = useSelector((state: State) => state);

    const setNewToken = useCallback(async () => {
        dispatch(getUserData());
    }, [getToken, getUserData]);

    useEffect(() => {
        setNewToken();
    }, [dispatch, setNewToken]);

    return userState;
}

export default useUserState;
