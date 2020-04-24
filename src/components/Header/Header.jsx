import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/000/039/568/original/hawx-logo-vector.jpg"
        alt=""
      />
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.Logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
