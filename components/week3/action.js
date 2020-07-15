const FETCH_USER = "FETCH_USER";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

import fetchData2 from "../../services";

export default (a = "usd", b = "vnd") => {
  return (dispatch) => {
    dispatch(fetchingData());
    return fetchData2(a, b)
      .then((data) => dispatch(fetchDataSuccess(data)))
      .catch((error) => dispatch(fetchDataFailed(error)));
  };
};

const fetchingData = () => ({
  type: FETCH_USER,
});

const fetchDataSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: {
    user,
  },
});

const fetchDataFailed = (error) => ({
  type: FETCH_USER_FAILED,
  payload: { error },
});
