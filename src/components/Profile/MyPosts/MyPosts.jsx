import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ postsData }) => {
  let postsElements = postsData.map(item => {
    return (
      <Post message={item.message} likesCount={item.likesCount} id={item.id} />
    );
  });

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
