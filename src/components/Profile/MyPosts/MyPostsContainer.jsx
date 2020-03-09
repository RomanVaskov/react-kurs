import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ postsData, newPostText, dispatch }) => {
  const addPostItem = () => {
    dispatch(addPostActionCreator());
  };

  const onPostChange = text => {
    let action = updateNewPostTextActionCreator(text);
    dispatch(action);
  };

  return (
    <MyPosts
      postsData={postsData}
      addPostItem={addPostItem}
      onPostChange={onPostChange}
      newPostText={newPostText}
    />
  );
};

export default MyPostsContainer;
