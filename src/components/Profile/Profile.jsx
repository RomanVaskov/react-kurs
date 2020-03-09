import React from "react";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ state, dispatch }) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPostsContainer
        postsData={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Profile;
