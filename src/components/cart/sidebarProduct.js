import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "./actions";

export const SidebarProduct = ({ data }) => {
  // console.log(data)
  const dispatch = useDispatch();
  // const [count,setCount] = useState(0)

  const increment = () => {
    dispatch({ type: cartActions.INC_QTY, payload: data });
  };
  const decrement = () => {
    dispatch({ type: cartActions.DEC_QTY, payload: data });
  };

  return (
    <div className="product">
      <img alt="" src={data.image} />

      <div className="title-box">
        <span>{data.title}</span>
        <b>
           ${data.price} X {data.quantity}
        </b>
        <b>Total :  ${Number(data.totalPrice).toFixed(2)}</b>
      </div>
      <div className="btn-group">
        <span onClick={decrement}>-</span>
        <span>{data.quantity}</span>
        <span onClick={increment}>+</span>
      </div>
    </div>
  );
};
