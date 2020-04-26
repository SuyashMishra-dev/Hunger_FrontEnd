import {
  GET_ALL_ITEM_REQUEST,
  GET_ALL_ITEM_SUCCESS,
  GET_ALL_ITEM_FAILURE,
  GET_SINGLE_ITEM_REQUEST,
  GET_SINGLE_ITEM_SUCCESS,
  GET_SINGLE_ITEM_FAILURE,
  EDIT_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_REQUEST,
  ADD_ITEM_FAILURE,
  EDIT_ITEM_SUCCESS,
  EDIT_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  SEARCH_FOOD_REQUEST,
  SEARCH_FOOD_SUCCESS,
  SEARCH_FOOD_FAILURE,
} from "./actionTypes";
import { toast } from "react-toastify";

const initialState = {
  data: [],
  searchData: [],
  singleData: {},
  isLoading: false,
  errorMsg: "",
  message: "",
};

const foodReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ALL_ITEM_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case GET_ALL_ITEM_FAILURE:
      toast.error(`${payload} :(`);
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
      };
    case GET_SINGLE_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SINGLE_ITEM_SUCCESS:
      return {
        ...state,
        singleData: payload,
        isLoading: false,
      };
    case GET_SINGLE_ITEM_FAILURE:
      toast.error(`${payload} :(`);
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
      };
    case ADD_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_ITEM_SUCCESS:
      toast.success(`Added Successfully :)`);
      return {
        ...state,
        isLoading: false,
      };
    case ADD_ITEM_FAILURE:
      toast.error(`${payload} :(`);
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
      };
    case EDIT_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case EDIT_ITEM_SUCCESS:
      toast.success(`Your Order Booked Successfully :)`);
      return {
        ...state,
        isLoading: false,
        singleData: payload,
      };
    case EDIT_ITEM_FAILURE:
      toast.error(`${payload} :(`);
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_ITEM_SUCCESS:
      toast.success(`Deleted Successfully!!! :)`);
      return {
        ...state,
        isLoading: false,
      };
    case DELETE_ITEM_FAILURE:
      toast.error(`${payload} :(`);
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
      };
    case SEARCH_FOOD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_FOOD_SUCCESS:
      if (payload.length === 0) {
        toast.error(`No Item Found In Range :(`);
      }
      return {
        ...state,
        isLoading: false,
        searchData: payload,
      };
    case SEARCH_FOOD_FAILURE:
      toast.error(`${payload} :(`);
      return {
        ...state,
        isLoading: false,
        errorMsg: payload,
      };
    default:
      return state;
  }
};

export default foodReducer;
