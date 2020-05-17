import { combineReducers } from 'redux';
import presentReducer from './presentReducer';



export default combineReducers({
    presents: presentReducer,
    // add more here when needed!
});