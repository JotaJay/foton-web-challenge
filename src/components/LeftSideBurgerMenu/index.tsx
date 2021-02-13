/* eslint-disable react/prop-types */
import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./style.css";

const LeftSideBurgerMenu: React.FC = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          Books
        </a>
      </Menu>{" "}
      {children}
    </div>
  );
};

export default LeftSideBurgerMenu;
