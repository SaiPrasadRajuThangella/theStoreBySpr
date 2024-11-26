import React, { useState } from "react";

import "./styles/checkout.scss";
import { Modal } from "antd";
import { useSelector } from "react-redux";

const Checkout = () => {
  const totalPrice = useSelector((s) => s.y.price);

  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="container">
      <h1 className="prod-title">Payment Page</h1>
      <p className="subtitle">Choose your payment method:</p>

      <div className="total-section-payment">
        <p>Total:</p>
        <p> ${Number(totalPrice).toFixed(2)}</p>
      </div>
      <h6>All transactions are secure and excrypted</h6>
      <div className="options">
        <label className="option">
          <input type="radio" name="payment" value="card" />
          Card
        </label>
        <label className="option">
          <input type="radio" name="payment" value="upi" />
          UPI
        </label>
        <label className="option">
          <input type="radio" name="payment" value="netbanking" />
          Net Banking
        </label>
        <label className="option">
          <input type="radio" name="payment" value="wallet" />
          Wallet
        </label>
      </div>

      <button
        onClick={() => {
          setIsModalVisible((old) => !old);
        }}
        className="button"
      >
        Proceed to Pay
      </button>
      <Modal
        title="PAYMENT CONFIRMATION"
        open={isModalVisible}
        onOk={() => setIsModalVisible((old) => !old)}
        onCancel={() => setIsModalVisible((old) => !old)}
      >
        <h3>
          From here payment continues. Thank you for visiting this Site. To go
          back to main page you can also click on THE STORE logo. 
        </h3>
        <h4>Have a great day!</h4>
      </Modal>
    </div>
  );
};

export default Checkout;
