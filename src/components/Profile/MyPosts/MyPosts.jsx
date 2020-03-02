import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ postsData }) => {
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

  const NewPostElement = React.createRef();

  const addPost = () => {
    let text = NewPostElement.current.value;
    alert(text);
  };

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={NewPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
