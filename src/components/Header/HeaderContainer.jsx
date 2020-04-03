import React, { Component } from "react";
import { authUser } from "../../redux/auth-reducer";
import Header from "./Header";
import { connect } from "react-redux";

class HeaderContainer extends Component {
  componentDidMount() {
    this.props.authUser();
  }
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = state => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  };
};
export default connect(mapStateToProps, { authUser })(HeaderContainer);
