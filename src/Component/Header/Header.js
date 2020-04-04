import React from "react";
import "./Header.css";
import logo from "../../image/fb.png";
const Header = () => {
  return (
    <div className="top">
      <img src={logo} alt=""/>
        <h1>Welcome to My social World</h1>
    </div>
  );
};
export default Header;