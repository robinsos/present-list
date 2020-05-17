import {v1 as uuid} from "uuid";
import { GET_PRESENTS, ADD_PRESENT, DELETE_PRESENT, PRESENTS_LOADING } from '../actions/types'

const initialState = {
    presents: [],
    loading: false
}

export default function( state = initialState, action) {
    switch(action.type) {
        case GET_PRESENTS : 
            return {
                ...state,
                presents: action.payload,
                loading: false
            }

        case DELETE_PRESENT : 
            return {
                ...state,
                presents: state.presents.filter(item=> item.id !== action.payload )
            };
        case ADD_PRESENT:
            return {
                ...state,
                presents: [action.payload, ...state.presents]
            }
        case PRESENTS_LOADING:
            return {
                ...state,
                loading: true
            }
            default:
            return state;
    }
}

