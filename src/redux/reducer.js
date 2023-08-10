import { GET_USERS, GET_PRINTS } from "./action";

const initialState = {
  prints: [],
  printId: [],
  users: [],
  userId: [],
  clients: [],
  clientId: [],
  products: [],
  productId: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRINTS:
      return {
        ...state,
        users: payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
}
