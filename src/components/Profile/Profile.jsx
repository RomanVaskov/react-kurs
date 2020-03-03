import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ state, addPost, updateNewPostText }) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts
        postsData={state.profilePage.postsData}
        addPost={addPost}
        newPostText={state.profilePage.newPostText}
        updateNewPostText={updateNewPostText}
      />
    </div>
  );
};

export default Profile;
