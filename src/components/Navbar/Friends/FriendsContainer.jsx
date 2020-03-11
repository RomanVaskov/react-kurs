import Friends from "./Friends";
import { friendsCreator } from "../../../redux/sidebar-reducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    state: state.sidebar
  };
};
const mapDispatchToProps = dispatch => {
  return {
    friendsCreator: () => {
      dispatch(friendsCreator());
    }
  };
};
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
