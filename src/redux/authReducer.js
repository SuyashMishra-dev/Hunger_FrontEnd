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
import { toast } from "react-toastify";

const initialState = {
  user: {},
  signUpMsg: "",
  isLoading: false,
  token: "",
  isAuth: false,
  errorMsg: "",
  isAdmin: false,
  orderList: [],
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_AUTH_SUCCESS:
      if (action.reqFromServer) {
        toast.success("Login Successfully :)");
      }
      if (payload.role === "feeder") {
        return {
          ...state,
          isLoading: false,
          user: payload,
          isAuth: true,
          isAdmin: true,
        };
      } else {
        return {
          ...state,
          isLoading: false,
          user: payload,
          isAuth: true,
          isAdmin: false,
        };
      }
    case LOGIN_AUTH_FAILURE:
      toast.error(`${payload} :(`);
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
      };
    case SING_UP_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SING_UP_AUTH_REQUEST_SUCCESS:
      toast.success("Singup Successfully :)");
      return {
        ...state,
        isLoading: false,
        signUpMsg: payload,
      };
    case SING_UP_AUTH_REQUEST_FAILURE:
      toast.error(`${payload} :(`);
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
      };
    case CHECK_AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CHECK_AUTH_FAILURE:
      toast.error(`${payload} :(`);
      return {
        ...state,
        isLoading: false,
      };
    case USER_LOGOUT:
      localStorage.clear();
      toast.info("Logout Successfully!!!");
      return {
        ...state,
        isAuth: false,
        isAdmin: false,
      };
    case ADD_FOOD_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_FOOD_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case ADD_FOOD_ID_FAILURE:
      toast.error("Something went wrong!!! Try Again");
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_USER_ORDERS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_ORDERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        orderList: payload,
      };
    case FETCH_USER_ORDERS_FAILURE:
      toast.error("Something went wrong!!! Try Again");
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
export default authReducer;
