import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ postsData, newPostText, addPostItem, onPostChange }) => {
  const postsElements = postsData.map(item => {
    return (
      <Post
        key={item.id}
        message={item.message}
        likesCount={item.likesCount}
        id={item.id}
      />
    );
  });

  const onAddPost = () => {
    addPostItem();
  };

  const onChangePost = e => {
    let text = e.target.value;
    onPostChange(text);
  };

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea value={newPostText} onChange={onChangePost}></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
