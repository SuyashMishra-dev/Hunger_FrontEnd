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
  ADD_FOOD_ID_REQUEST,
  ADD_FOOD_ID_SUCCESS,
  ADD_FOOD_ID_FAILURE,
  FETCH_USER_ORDERS_REQUEST,
  FETCH_USER_ORDERS_SUCCESS,
  FETCH_USER_ORDERS_FAILURE,
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
      dispatch(checkAuth(res.data.token, true));
    })
    .catch((error) => {
      dispatch(loginAuthFailure(error.message));
    });
};

export const loginAuthRequest = () => ({
  type: LOGIN_AUTH_REQUEST,
});

export const loginAuthSuccess = (payload, reqFromServer) => ({
  type: LOGIN_AUTH_SUCCESS,
  payload,
  reqFromServer,
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
export const checkAuth = (payload, reqFromServer) => (dispatch) => {
  dispatch(checkAuthRequest());
  axios({
    url: "https://hunger-server.herokuapp.com/api/v1/auth/get-user",
    headers: {
      authtoken: payload,
    },
    method: "GET",
  })
    .then((res) => {
      dispatch(loginAuthSuccess(res.data.data, reqFromServer));
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

// Add food id
export const addFoodId = (payload, userId) => (dispatch) => {
  dispatch(addFoodIdRequest());
  axios({
    url: `http://localhost:5000/api/v1/auth/book-food/${userId}`,
    data: payload,
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
  })
    .then((res) => {
      dispatch(addFoodIdSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(addFoodIdFailure(error.message));
    });
};

export const addFoodIdRequest = (payload) => ({
  type: ADD_FOOD_ID_REQUEST,
  payload,
});

export const addFoodIdSuccess = (payload) => ({
  type: ADD_FOOD_ID_SUCCESS,
  payload,
});

export const addFoodIdFailure = (payload) => ({
  type: ADD_FOOD_ID_FAILURE,
  payload,
});

// Fetch user food
export const fetchUserOrder = (payload) => (dispatch) => {
  axios({
    url: "http://localhost:5000/api/v1/auth/get-user-food",
    data: payload,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((res) => {
      dispatch(fetchUserOrderSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(fetchUserOrderFailure(error.message));
    });
};

export const fetchUserOrderRequest = (payload) => ({
  type: FETCH_USER_ORDERS_REQUEST,
  payload,
});

export const fetchUserOrderSuccess = (payload) => ({
  type: FETCH_USER_ORDERS_SUCCESS,
  payload,
});

export const fetchUserOrderFailure = (payload) => ({
  type: FETCH_USER_ORDERS_FAILURE,
  payload,
});
