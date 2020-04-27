import React, { Component } from "react";
import { Logout } from "../../redux/auth-reducer";
import Header from "./Header";
import { connect } from "react-redux";
import { compose } from "redux";

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
  };
};

export default compose(connect(mapStateToProps, { Logout }))(HeaderContainer);
