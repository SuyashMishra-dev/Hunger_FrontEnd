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
import { toast } from "react-toastify";

const initialState = {
  user: {},
  signUpMsg: "",
  isLoding: false,
  token: "",
  isAuth: false,
  errorMsg: "",
  isAdmin: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_AUTH_REQUEST:
      return {
        ...state,
        isLoding: true,
      };
    case LOGIN_AUTH_SUCCESS:
      // toast.success("Login Successfully :)");
      if (payload.role === "feeder") {
        return {
          ...state,
          isLoding: false,
          user: payload,
          isAuth: true,
          isAdmin: true,
        };
      } else {
        return {
          ...state,
          isLoding: false,
          user: payload,
          isAuth: true,
          isAdmin: false,
        };
      }
    case LOGIN_AUTH_FAILURE:
      toast.error(`${payload} :(`);
      return {
        ...state,
        isLoding: false,
        errorMsg: payload,
      };
    case SING_UP_AUTH_REQUEST:
      return {
        ...state,
        isLoding: true,
      };
    case SING_UP_AUTH_REQUEST_SUCCESS:
      toast.success("Singup Successfully :)");
      return {
        ...state,
        isLoding: false,
        signUpMsg: payload,
      };
    case SING_UP_AUTH_REQUEST_FAILURE:
      toast.error(`${payload} :(`);
      return {
        ...state,
        isLoding: false,
        errorMsg: payload,
      };
    case CHECK_AUTH_REQUEST:
      return {
        ...state,
        isLoding: true,
      };
    case CHECK_AUTH_FAILURE:
      toast.error(`${payload} :(`);
      return {
        ...state,
        isLoding: false,
      };
    case USER_LOGOUT:
      localStorage.clear();
      toast.info("Logout Successfully!!!");
      return {
        ...state,
        isAuth: false,
        isAdmin: false,
      };

    default:
      return state;
  }
};
export default authReducer;
