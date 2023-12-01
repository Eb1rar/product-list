import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <h2 className="title">Product List</h2>
      <ul>
        <li className="categories">
          <a href="#">ALL</a>
          <a href="#">ELECTRONICS</a>
          <a href="#">JEWELLERY</a>
          <a href="#">MEN'S CLOTHING</a>
          <a href="#">WOMEN'S CLOTHING</a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
