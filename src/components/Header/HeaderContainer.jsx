import * as axios from "axios";
import React, { Component } from "react";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";
import { connect } from "react-redux";

class HeaderContainer extends Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true
      })
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
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
