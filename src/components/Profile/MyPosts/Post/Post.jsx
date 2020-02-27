import React from "react";
import style from "./Post.module.css";

const Post = ({ message }) => {
  return (
    <div className={style.item}>
      <img
        src="https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg"
        alt="Avatar"
      />
      {message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
