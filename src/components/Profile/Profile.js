import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts";

const Profile = () => {
    return (
        <div className={style.content}>
            Main content
            <MyPosts />
        </div>
    )
}

export default Profile;