import {combineReducers} from "redux";

import Auth from './reducerExample';

const index={
    auth:Auth
};

export default combineReducers(index);