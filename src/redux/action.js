import axios from "axios";
import Swal from "sweetalert2";

export const GET_USERS = "GET_USERS";
export const GET_USER_ID = "GET_USER_ID";
export const GET_PRINTS = "GET_PRINTS";
export const GET_CLIENTS = "GET_CLIENTS ";
export const GET_PRODUCTS = "GET_PRODUCTS ";

const URL = "http://localhost:3000";

export const createUser = (payload) => {
  return async function () {
    try {
      const response = await axios.post(`${URL}/user/register`, payload);
      Swal.fire("OK", response.data, "success");
    } catch (error) {
      console.log(error);
      Swal.fire(error.response.data, "Vuelva a Intentarlo", "error");
    }
  };
};

export const updateUser = (payload) => {
  return async function () {
    try {
      const response = await axios.put(`${URL}/user/update-user/${payload.id}`, payload);
      Swal.fire("OK", response.data, "success");
    } catch (error) {
      console.log(error);
      Swal.fire(error.response.data, "Vuelva a Intentarlo", "error");
    }
  };
};

export const getUserId = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${URL}/user/user/${id}`);
      return dispatch({
        type: GET_USER_ID,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUsers = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${URL}/user/users`);
      return dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const logicUser = (payload) => {
  return async function () {
    try {
      await axios.post(`${URL}/user/logic/${payload}`);
    } catch (error) {
      console.log(error);
    }
  };
};
export const getPrints = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${URL}/prints`);
      return dispatch({
        type: GET_PRINTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getClients = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${URL}/clientes`);
      return dispatch({
        type: GET_CLIENTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getProducts = () => {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${URL}/products`);
      return dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
