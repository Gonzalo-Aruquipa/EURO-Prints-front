import { GET_USERS, GET_PRINTS, GET_CLIENTS, GET_PRODUCTS } from "./action";

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
        prints: payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
      case GET_CLIENTS:
      return {
        ...state,
        clients: payload,
      };
      case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
}
