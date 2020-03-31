import { addPostItem, onPostChange } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  };
};

const MyPostsContainer = connect(mapStateToProps, {
  addPostItem,
  onPostChange
})(MyPosts);

export default MyPostsContainer;
