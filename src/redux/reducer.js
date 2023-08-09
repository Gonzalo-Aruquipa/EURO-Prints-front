import { GET_USERS } from "./action";

const initialState ={
  prints: [],
  printId: [],
  users: [],
  userId: [],
  clients: [],
  clientId: [],
  products: [],
  productId: [],

};

export default function reducer (state = initialState, { type, payload }) {
  switch (type) {

    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
}
