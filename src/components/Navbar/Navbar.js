import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div><a href="#1">Profile</a></div>
            <div><a href="#1">Messages</a></div>
            <div><a href="#1">News</a></div>
            <div><a href="#1">Music</a></div>
            <div><a href="#1">Settings</a></div>
        </nav>
    )
}

export default Navbar;