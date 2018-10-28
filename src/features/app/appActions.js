import {
  APP_FETCHING_REQUEST,
  APP_FETCHING_SUCCESS,
  APP_FETCHING_FAILURE
} from "./appConstants";

export const fetchingRequest = () => ({
  type: APP_FETCHING_REQUEST
});

export const fetchingSuccess = () => ({
  type: APP_FETCHING_SUCCESS
});

export const fetchingFailure = () => ({
  type: APP_FETCHING_FAILURE
});

function fetchData() {}

export const InitializeApp = () => dispatch => {
  dispatch(fetchingRequest());
  try {
    const { questions } = fetchData();
  } catch (error) {
    dispatch(fetchingFailure(error));
  }
};
