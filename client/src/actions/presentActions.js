import axios from 'axios';
import { GET_PRESENTS, ADD_PRESENT, DELETE_PRESENT, PRESENTS_LOADING } from './types'

const axio = axios.create({
    baseURL: 'http://localhost:5000/',
    timeout: 1000,
  });

export const getPresents = () => dispatch => {
    dispatch(setPresentsLoading());
    axio
      .get('api/presents')
      .then( res => {
        dispatch({
            type: GET_PRESENTS,
            payload: res.data
        })
      }).catch(err => {
          console.log( err );
      })
};

export const deletePresent = id => {
    return { 
        type: DELETE_PRESENT,
        payload: id
    };
};

export const addPresent = present => {
    return { 
        type: ADD_PRESENT,
        payload: present
    };
};

export const setPresentsLoading = () => {
    return { 
        type: PRESENTS_LOADING
    };
};