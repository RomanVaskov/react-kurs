import React from "react";
import style from "./Post.module.css";

const Post = ({ message, likesCount }) => {
  return (
    <div className={style.item}>
      <img
        src="https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        alt="Avatar"
      />
      {message}
      <div>
        <span>like {likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
