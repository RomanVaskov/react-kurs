import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  };
};

let mapDispatchToProps = dispatch => {
  return {
    addPostItem: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: text => {
      dispatch(updateNewPostTextActionCreator(text));
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
