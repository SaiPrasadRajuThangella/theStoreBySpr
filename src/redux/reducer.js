import { act } from "react";
import { actions } from "./actions";

const initialState = {
  products: null,
  searchTerm: "",
};

function productsReducer(state = initialState, action) {
  if (action.type === actions.PRODUCTS_SUCCESS) {
    return { ...state, products: action.payload };
  }
  if (action.type === "INPUT_ADDED") {
    
    
    return { ...state, searchTerm: action.payload };
  }
  return state;
}

export default productsReducer;
