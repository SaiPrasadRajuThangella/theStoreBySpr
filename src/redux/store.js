import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import productsReducer from "./reducer";
import { thunk } from "redux-thunk";
import cartReducer from "../components/cart/reducer";


const rootReducer = combineReducers({
    x:productsReducer,
    y:cartReducer

})


const store = createStore(rootReducer, applyMiddleware(thunk));


export default store;
