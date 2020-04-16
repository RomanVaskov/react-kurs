import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = ({ postsData, addPostItem }) => {
  const postsElements = postsData.map((item) => {
    return (
      <Post
        key={item.id}
        message={item.message}
        likesCount={item.likesCount}
        id={item.id}
      />
    );
  });

  const addNewPost = (values) => {
    addPostItem(values.newPostText);
  };

  return (
    <div>
      <h3>My Posts</h3>
      <MyPostsFormRedux onSubmit={addNewPost} />
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
};

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostsFormRedux = reduxForm({ form: "profileMyPostsForm" })(MyPostsForm);

export default MyPosts;
