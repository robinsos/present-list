import axios from "axios";
import {
  GET_PRESENTS,
  ADD_PRESENT,
  EDIT_PRESENT,
  DELETE_PRESENT,
  PRESENTS_LOADING,
} from "./types";

const axio = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 1000,
});

export const getPresents = () => (dispatch) => {
  dispatch(setPresentsLoading());
  axio
    .get("api/presents")
    .then((res) => {
      dispatch({
        type: GET_PRESENTS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addPresent = (present) => dispatch => {
  axio
    .post("api/presents", present)
    .then((res) => {
      dispatch({
        type: ADD_PRESENT,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editPresent = (present) => dispatch => {
    axio
      .post(`api/presents/edit/${present._id}`, present)
      .then((res) => {
        dispatch({
          type: EDIT_PRESENT,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const deletePresent = (id) => dispatch => {
  axio.delete(`api/presents/${id}`)
    .then( (res) => {
        dispatch({
            type: DELETE_PRESENT,
            payload: id,
        })
    }).catch(err => {
        console.log(err);
    });  
};

export const setPresentsLoading = () => {
  return {
    type: PRESENTS_LOADING,
  };
};
