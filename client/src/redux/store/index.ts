import {createStore, applyMiddleware, Store }  from 'redux';
import thunk from 'redux-thunk';

import reducer from '@/redux/reducers';
import { State, StateAction } from '@/interfaces/StateInterface';

const store: Store<State, StateAction> & {
    dispatch: any
}  = 
    createStore(reducer, applyMiddleware(thunk));

export default store;
