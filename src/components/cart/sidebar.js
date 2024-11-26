import {
  forwardRef,

  useImperativeHandle,
  
  useState,
} from "react";
import "../../styles/sidebar.scss";
import { SidebarProduct } from "./sidebarProduct";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Sidebar = forwardRef((props, ref) => {
  const [show, setShow] = useState(false);
  const closeModal = () => {
    setShow((old) => !old);
  };
  const navigate = useNavigate()
  const products = useSelector((state) => {
    const productsList = state.x.products;
    const cart = state.y.cart;
    const list = [];
    productsList?.forEach((product) => {
      if (cart[product.id]) {
        list.push({
          ...product,
          quantity: cart[product.id],
          totalPrice: product.price * cart[product.id],
        });
      }
    });

    return list;
  });
  // console.log(products);

  useImperativeHandle(ref, () => {
    return { setShow };
  });

  if (!show) return null;
  return (
    <div className="cart-sidebar-container">
      <div className="sidebar">
        <div className="head">
          <span>My Cart</span>
          <span onClick={closeModal} className="material-icons">
            close
          </span>
        </div>

        <div className="products">
          {products.length > 0 ? (
            products.map((product, index) => {
              return <SidebarProduct data={product} key={index} />;
            })
          ) : (
            <div>
              <h1><center>No Items here</center></h1>
              <h3><center>Please add items to the cart</center></h3>
            </div>
          )}
        </div>
        {products.length>0?<div className="total-section">
          <table>
            <tbody>
              <tr>
                <td><span>📋</span>Items total: </td>
                <td>$
                  {Number(products
                    .map((product) => product.totalPrice)
                    .reduce((sum, price) => sum + price, 0)).toFixed(2)}
                </td>
              </tr>
              <tr>
                <td><span>🚴</span>Delivery charge:</td>
                <td>$
                  <s>25</s>
                  <> </>
                  <b style={{color:"blue"}}>FREE</b>
                </td>
              </tr>
              <tr>
                <td><span>🏷️</span>Handling charge:</td>
                <td>
                  <b>FREE</b>
                </td>
              </tr>
              <tr>
                <td><h2>Grand total</h2></td>
                <td>
                  <h3><>$
                  {Number(products
                    .map((product) => product.totalPrice)
                    .reduce((sum, price) => sum + price, 0)).toFixed(2)}
                  </></h3>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={()=>{setShow((old) => !old) ;navigate("./checkout")  }}>Proceed to Checkout</button>
        </div>:<></>}
      </div>
    </div>
  );
});
