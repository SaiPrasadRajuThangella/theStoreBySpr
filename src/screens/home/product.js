import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../components/cart/actions";
import { notification } from "antd";
import { Modal } from "antd";

const Product = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.y.cart[data.id] ?? 0);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const increment = () => {
    // notification.success({
    //   message:"success",
    //   description:"Item added successfully"

    // })
    dispatch({ type: cartActions.INC_QTY, payload: data });
  };
  const decrement = () => {
    dispatch({ type: cartActions.DEC_QTY, payload: data });
  };

  return (
    <div className="product-card">
      <img src={data.image} alt={data.title}></img>
        <p className="title">{data.title}</p>
      <div className="bottom-box">
        <div className="description">
        <p className="short-description">
          {data.description.length > 100
            ? `${data.description.substring(0, 150)}...`
            : data.description}
        </p>
        <div>{data.description.length > 100 && (
          <span className="read-more" onClick={handleOpenModal}>
            Read More...
          </span>
        )}</div>
        </div>
      </div>
      <Modal
        title={data.title}
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
      >
        <p>{data.description}</p>
      </Modal>
      
      <p className="price">$ {data.price}</p>
      {count === 0 ? (
        <button onClick={increment}>Add Item</button>
      ) : (
        <div className="btn-grp">
          <span className="material-icons" onClick={decrement}>
            horizontal_rule
          </span>
          <p>{count}</p>
          <span className="material-icons" onClick={increment}>
            add
          </span>
        </div>
      )}
    </div>
  );
};
export default Product;
