import {
  APP_FETCHING_REQUEST,
  APP_FETCHING_SUCCESS,
  APP_FETCHING_FAILURE
} from "./appConstants";

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case APP_FETCHING_REQUEST:
      return { ...state, isFetching: true };

    case APP_FETCHING_SUCCESS:
      return { ...state, isFetching: false };

    case APP_FETCHING_FAILURE:
      return { ...state, isFetching: false };
  }
};
