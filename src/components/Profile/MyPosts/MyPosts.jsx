import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ postsData, addPost, newPostText, updateNewPostText }) => {
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

  let NewPostElement = React.createRef();

  const addPostItem = () => {
    addPost();
  };

  const onPostChange = () => {
    let text = NewPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <div>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            ref={NewPostElement}
            value={newPostText}
            onChange={onPostChange}
          ></textarea>
        </div>
        <div>
          <button onClick={addPostItem}>Add post</button>
        </div>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
