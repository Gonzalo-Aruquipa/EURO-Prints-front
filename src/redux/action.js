import axios from "axios";

export const GET_USERS = "GET_USERS";

const URL = "http://localhost:3000";

export const getUsers=( )=> {
  return async function (dispatch) {
    try {
      const res = await axios.get(`${URL}/clientes`);
      return dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

}
