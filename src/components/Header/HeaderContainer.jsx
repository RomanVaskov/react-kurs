import React, { Component } from "react";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";
import { connect } from "react-redux";
import { usersApi } from "../../api/api";

class HeaderContainer extends Component {
  componentDidMount() {
    usersApi.setAuthUser().then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
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
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
