import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  required,
  minLengthCreator,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = React.memo(({ postsData, addPostItem }) => {
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
});

const maxLength30 = maxLengthCreator(30);
const minLength2 = minLengthCreator(2);
const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          validate={[required, maxLength30, minLength2]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const MyPostsFormRedux = reduxForm({ form: "profileMyPostsForm" })(MyPostsForm);

export default MyPosts;
