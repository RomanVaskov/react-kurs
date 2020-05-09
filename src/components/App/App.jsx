import React from "react";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import HeaderContainer from "../Header/HeaderContainer";
import Music from "../Music/Music";
import Navbar from "../Navbar/Navbar";
import News from "../News/News";
import Settings from "../Settings/Settings";
import UsersContainer from "../Users/UsersContainer";
import style from "./App.module.css";
import ProfileContainer from "../Profile/ProfileContainer";
import UserLogin from "../Login/Login";
import { initializeApp } from "../../redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "../../assets/img/spinner.svg";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <img alt="img" src={Preloader} />;
    }
    return (
      <div className={style.app_wrapper}>
        <HeaderContainer />
        <Navbar />
        <div className={style.app_wrapper_content}>
          <Route
            path="/profile/:userId?"
            render={() => {
              return <ProfileContainer />;
            }}
          />
          <Route
            path="/dialogs"
            render={() => {
              return <DialogsContainer />;
            }}
          />
          <Route
            path="/users"
            render={() => {
              return <UsersContainer />;
            }}
          />
          <Route
            path="/login"
            render={() => {
              return <UserLogin />;
            }}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);
