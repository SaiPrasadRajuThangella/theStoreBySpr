import axios from "axios";
import  {actions}  from "./actions";
export async function fetchProducts(dispatch) {
  try {
    const response = await axios({
      url: "https://fakestoreapi.com/products",
      method: "GET",
    });
    dispatch({ type: actions.PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
}
 