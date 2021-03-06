import axios from 'axios';
//import config from 'config';
//import { axio, blurb } from './axio';
import {
  GET_PRESENTS,
  ADD_PRESENT,
  EDIT_PRESENT,
  DELETE_PRESENT,
  PRESENTS_LOADING
} from './types';

import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getPresents = () => (dispatch) => {
  dispatch(setPresentsLoading());

  console.log('process.env=' + JSON.stringify(process.env));
  axios
    .get('api/presents')
    .then((res) => {
      dispatch({
        type: GET_PRESENTS,
        payload: res.data
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addPresent = (present) => (dispatch, getState) => {
  axios
    .post('api/presents', present, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: ADD_PRESENT,
        payload: res.data
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const editPresent = (present) => (dispatch, getState) => {
  axios
    .post(`api/presents/edit/${present._id}`, present, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: EDIT_PRESENT,
        payload: res.data
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deletePresent = (id) => (dispatch, getState) => {
  axios
    .delete(`api/presents/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_PRESENT,
        payload: id
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setPresentsLoading = () => {
  return {
    type: PRESENTS_LOADING
  };
};
