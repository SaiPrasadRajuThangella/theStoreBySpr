import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/thunk";
import Product from "./product";
import "./styles/products.scss";
import { Spin } from "antd";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => {
    return state.x.products;
  });

  const searchTerm = useSelector((state) => state.x.searchTerm);

  const filteredProducts = products
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  // console.log(filteredProducts);
  useEffect(() => {
    dispatch(fetchProducts);
  }, []);

  if (products === null)
    return (
      <div className="loading">
        <Spin size="large" />
        <center>
          <div className="title-container">
            <div className="title">
              <div style={{ color: "#4B5875" }}>WELCOME TO </div>
              <div>
                <span style={{ color: "#4B5875", marginRight: "10px" }}>
                  THE
                </span>
                <span style={{ color: "#54b225" }}>STORE</span>
              </div>
            </div>
          </div>
          <span className="caption">Your Daily Groceries, Delivered </span>
          <span style={{ color: "#54b225" }}>Fast! </span>
        </center>
      </div>
    );

  return (
    <div className="products-list">
      {filteredProducts.length>0?filteredProducts.map((product) => (
        <Product data={product} key={product.id} />
      )):<center ><h2 >No products found :( </h2></center>}
    </div>
  );
};

export default HomeScreen;
