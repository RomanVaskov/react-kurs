import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>New Post</div>
            <div className={style.posts}>
                <Post message='Hello world' />
                <Post message='Hello React' />
            </div>
        </div>
    )
}

export default MyPosts;