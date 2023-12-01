import React from "react";

const Image = ({ data }) => {
  return (
    <>
      <h1>Product List</h1>
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <img src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Image;
