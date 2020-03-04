import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ state, dispatch }) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts
        postsData={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;
