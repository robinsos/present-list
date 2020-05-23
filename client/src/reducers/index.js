import { combineReducers } from 'redux';
import presentReducer from './presentReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    presents: presentReducer,
    error: errorReducer,
    auth: authReducer
    // add more here when needed!
});