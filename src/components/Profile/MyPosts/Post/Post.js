import React from "react";
import style from "./Post.module.css";

const Post = ({ message }) => {
    return <div className={style.item}>{message}</div>
}

export default Post;