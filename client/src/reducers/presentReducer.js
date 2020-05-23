import {
  GET_PRESENTS,
  ADD_PRESENT,
  EDIT_PRESENT,
  DELETE_PRESENT,
  PRESENTS_LOADING,
} from "../actions/types";

const initialState = {
  presents: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRESENTS:
      return {
        ...state,
        presents: action.payload,
        loading: false,
      };

    case DELETE_PRESENT:
      return {
        ...state,
        presents: state.presents.filter((item) => item._id !== action.payload),
      };
    case ADD_PRESENT:
      return {
        ...state,
        presents: [action.payload, ...state.presents],
      };
    case EDIT_PRESENT:
      return {
        ...state,
        presents: state.presents.
            map(present => present._id !== action.payload._id ? present : action.payload)
      };
    case PRESENTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
