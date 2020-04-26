import axios from "axios";
import {
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_REQUEST,
  LOGIN_AUTH_FAILURE,
  SING_UP_AUTH_REQUEST,
  SING_UP_AUTH_REQUEST_SUCCESS,
  SING_UP_AUTH_REQUEST_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_FAILURE,
  USER_LOGOUT,
} from "./authActionTypes";

// Login actions
export const loginAuth = (payload) => (dispatch) => {
  dispatch(loginAuthRequest());
  axios({
    url: "https://hunger-server.herokuapp.com/api/v1/auth/login",
    data: payload,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data.token));
      dispatch(checkAuth(res.data.token));
    })
    .catch((error) => {
      dispatch(loginAuthFailure(error.message));
    });
};

export const loginAuthRequest = () => ({
  type: LOGIN_AUTH_REQUEST,
});

export const loginAuthSuccess = (payload) => ({
  type: LOGIN_AUTH_SUCCESS,
  payload,
});

export const loginAuthFailure = (payload) => ({
  type: LOGIN_AUTH_FAILURE,
  payload,
});

// Signup actions
export const signupAuth = (payload) => (dispatch) => {
  dispatch(signupAuthRequest());
  axios({
    url: "https://hunger-server.herokuapp.com/api/v1/auth/register",
    data: payload,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((res) => {
      dispatch(signupAuthSuccess(res.data));
    })
    .catch((error) => {
      dispatch(signupAuthFailure(error.message));
    });
};

export const signupAuthRequest = () => ({
  type: SING_UP_AUTH_REQUEST,
});

export const signupAuthSuccess = (payload) => ({
  type: SING_UP_AUTH_REQUEST_SUCCESS,
  payload,
});

export const signupAuthFailure = (payload) => ({
  type: SING_UP_AUTH_REQUEST_FAILURE,
  payload,
});

// Authentication User
export const checkAuth = (payload) => (dispatch) => {
  dispatch(checkAuthRequest());
  axios({
    url: "https://hunger-server.herokuapp.com/api/v1/auth/get-user",
    headers: {
      authtoken: payload,
    },
    method: "GET",
  })
    .then((res) => {
      dispatch(loginAuthSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(checkAuthFailure(error.message));
    });
};

export const checkAuthRequest = () => ({
  type: CHECK_AUTH_REQUEST,
});

export const checkAuthFailure = (payload) => ({
  type: CHECK_AUTH_FAILURE,
  payload,
});

// Logout User
export const logoutUser = () => ({
  type: USER_LOGOUT,
});
