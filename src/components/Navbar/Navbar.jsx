import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = () => {
  return (
    <div className={style.bg}>
      <nav>
        <div className={style.item}>
          <NavLink to="/profile" activeClassName={style.activeLink}>
            Profile
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/dialogs" activeClassName={style.activeLink}>
            Messages
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/users" activeClassName={style.activeLink}>
            Users
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/news" activeClassName={style.activeLink}>
            News
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/music" activeClassName={style.activeLink}>
            Music
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink to="/settings" activeClassName={style.activeLink}>
            Settings
          </NavLink>
        </div>
      </nav>
      <div className={style.friends}>
        <h3>Friends</h3>
        <div className={style.friends_item}>
          <FriendsContainer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
