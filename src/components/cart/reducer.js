import { cartActions } from "./actions";

const initialState = {
  cart: {},
  products: 0,
  price: 0,
  
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActions.INC_QTY: {
     
      let productId = action.payload.id;
      let currentCount = state.cart[productId];
     

      state.cart[productId] = 1 + (currentCount ? currentCount : 0);
      state.products += 1;
      state.price += action.payload.price;
      
      
       
      return { ...state };
    }
    case cartActions.DEC_QTY: {
      let productId = action.payload.id;
      let currentCount = state.cart[productId];

      if (currentCount === 1) {
        delete state.cart[productId];
      } else {
        state.cart[productId] -= 1;
      }
      state.products -= 1;
      state.price -= action.payload.price;
      return { ...state };
    }
    default:
      return state;
  }
};
export default cartReducer;
