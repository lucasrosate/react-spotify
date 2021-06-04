import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, authenticate } from '@/redux/actions/UserActions';
import { State } from '@/interfaces/StateInterface';

const useFetchData = () => {
    const dispatch = useDispatch();

    //var userState = useSelector((state: State) => state);
    var authState = useSelector((state: State) => state.auth);

    useEffect(() => {
        dispatch(authenticate());
    }, [dispatch]);


    useEffect(() => {
        if (authState.access_token)
            dispatch(getUserData());
    }, [authState.access_token, dispatch])
}

export default useFetchData;
