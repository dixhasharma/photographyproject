import React from "react";
import { css } from "aphrodite/no-important";
import navStyle from "../Styles/NavbarStyle";

const Navbar = ({setSearch}) => {
  return (
    <nav className={css(navStyle.navbar)}>
      <div className={css(navStyle.homeElement)}>
        <a className={css(navStyle.anchorDiv)} href="/">
          <h3 style={{verticalAlign:"middle"}}>TARSplash</h3>
        </a>
        <div className={css(navStyle.inputDiv)}>
          <input
            onChange={(e)=>{setTimeout(()=>{setSearch(e.target.value)},1500)}}
            className={css(navStyle.inputBox)}
            type="text"
            placeholder="Search free high-resolution photos"
          />
        </div>
      </div>
      <div className="clickable-element">
        <ul className="Link-Element">
          <li className={css(navStyle.listElement)}>
            <a href="/" className={css(navStyle.anchorDiv)}>
              Home
            </a>
          </li>
          <li className={css(navStyle.listElement)}>
            <a href="/" className={css(navStyle.anchorDiv)}>
              Collections
            </a>
          </li>
          <li className={css(navStyle.listElement)}>
            <a href="/" className={css(navStyle.anchorDiv)}>
              Explore
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
