import React from "react";
import data from "../../helper/data.js";
import "./Product.scss";

const Product = ({ data }) => {
  return (
    <div className="container">
      {data.map((item, index) => (
        <div key={index} className="card">
          <div className="card-over">
            <p className="title">{item.title}</p>
          </div>
          <div className="price">
            <h1>{item.price} $</h1>
          </div>
          <img className="img" src={item.image} alt="" />
        </div>
      ))}
    </div>
  );
};
export default Product;
