import axios from "axios";
import {
  GET_ALL_ITEM_REQUEST,
  GET_ALL_ITEM_SUCCESS,
  GET_ALL_ITEM_FAILURE,
  GET_SINGLE_ITEM_REQUEST,
  GET_SINGLE_ITEM_SUCCESS,
  GET_SINGLE_ITEM_FAILURE,
  ADD_ITEM_REQUEST,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  EDIT_ITEM_REQUEST,
  EDIT_ITEM_SUCCESS,
  EDIT_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
  SEARCH_FOOD_REQUEST,
  SEARCH_FOOD_SUCCESS,
  SEARCH_FOOD_FAILURE,
} from "./actionTypes";

// Get All Food Items
export const getAllItems = () => (dispatch) => {
  dispatch(getAllItemsRequest());
  axios({
    url: "https://hunger-server.herokuapp.com/api/v1/foods",
    method: "GET",
  })
    .then((res) => {
      dispatch(getAllItemsSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getAllItemsFailure(error.message));
    });
};

export const getAllItemsRequest = () => ({
  type: GET_ALL_ITEM_REQUEST,
});

export const getAllItemsSuccess = (payload) => ({
  type: GET_ALL_ITEM_SUCCESS,
  payload,
});

export const getAllItemsFailure = (payload) => ({
  type: GET_ALL_ITEM_FAILURE,
  payload,
});

// Get Single Food Item
export const getSingleItem = (payload) => (dispatch) => {
  dispatch(getSingleItemRequest());
  axios({
    url: `https://hunger-server.herokuapp.com/api/v1/foods/${payload}`,
    method: "GET",
  })
    .then((res) => {
      dispatch(getSingleItemSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(getSingleItemFailure(error.message));
    });
};

export const getSingleItemRequest = () => ({
  type: GET_SINGLE_ITEM_REQUEST,
});

export const getSingleItemSuccess = (payload) => ({
  type: GET_SINGLE_ITEM_SUCCESS,
  payload,
});

export const getSingleItemFailure = (payload) => ({
  type: GET_SINGLE_ITEM_FAILURE,
  payload,
});

// Add New Item
export const addItem = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(addItemRequest());
  axios({
    url: "https://hunger-server.herokuapp.com/api/v1/foods",
    data: payload,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((res) => {
      dispatch(addItemSuccess(res.data.data));
      window.location.href = `/upload?id=${res.data.data._id}`;
    })
    .catch((error) => {
      dispatch(addItemFailure(error.message));
    });
};

export const addItemRequest = () => ({
  type: ADD_ITEM_REQUEST,
});

export const addItemSuccess = (payload) => ({
  type: ADD_ITEM_SUCCESS,
  payload,
});

export const addItemFailure = (payload) => ({
  type: ADD_ITEM_FAILURE,
  payload,
});

// Edit Item
export const editItem = (payload, id) => (dispatch) => {
  dispatch(editItemRequest());
  axios({
    url: `https://hunger-server.herokuapp.com/api/v1/foods/${id}`,
    data: payload,
    headers: {
      "Content-Type": "application/json",
    },
    method: "PUT",
  })
    .then((res) => {
      dispatch(editItemSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(editItemFailure(error.message));
    });
};

export const editItemRequest = () => ({
  type: EDIT_ITEM_REQUEST,
});

export const editItemSuccess = (payload) => ({
  type: EDIT_ITEM_SUCCESS,
  payload,
});

export const editItemFailure = (payload) => ({
  type: EDIT_ITEM_FAILURE,
  payload,
});

// Delete Item
export const deleteItem = (payload) => (dispatch) => {
  console.log(payload);
  dispatch(deleteItemRequest());
  axios({
    url: `https://hunger-server.herokuapp.com/api/v1/foods/${payload}`,
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then((res) => {
      dispatch(deleteItemSuccess(res.data));
    })
    .catch((error) => {
      dispatch(deleteItemFailure(error.message));
    });
};

export const deleteItemRequest = (payload) => ({
  type: DELETE_ITEM_REQUEST,
  payload,
});

export const deleteItemSuccess = (payload) => ({
  type: DELETE_ITEM_SUCCESS,
  payload,
});

export const deleteItemFailure = (payload) => ({
  type: DELETE_ITEM_FAILURE,
  payload,
});

// Search Food
export const searchFood = (payload) => (dispatch) => {
  dispatch(searchFoodRequest());
  axios({
    url: `https://hunger-server.herokuapp.com/api/v1/foods/radius/${payload.pin}/${payload.range}`,
    method: "GET",
  })
    .then((res) => {
      dispatch(searchFoodSuccess(res.data.data));
    })
    .catch((error) => {
      dispatch(searchFoodFailure(error.message));
    });
};

export const searchFoodRequest = () => ({
  type: SEARCH_FOOD_REQUEST,
});

export const searchFoodSuccess = (payload) => ({
  type: SEARCH_FOOD_SUCCESS,
  payload,
});

export const searchFoodFailure = (payload) => ({
  type: SEARCH_FOOD_FAILURE,
  payload,
});
