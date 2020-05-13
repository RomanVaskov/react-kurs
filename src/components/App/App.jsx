import React from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import Preloader from "../../assets/img/spinner.svg";
import { initializeApp } from "../../redux/app-reducer";
import store from "../../redux/redux-store";
import DialogsContainer from "../Dialogs/DialogsContainer";
import HeaderContainer from "../Header/HeaderContainer";
import UserLogin from "../Login/Login";
import Music from "../Music/Music";
import Navbar from "../Navbar/Navbar";
import News from "../News/News";
import ProfileContainer from "../Profile/ProfileContainer";
import Settings from "../Settings/Settings";
import UsersContainer from "../Users/UsersContainer";
import style from "./App.module.css";

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

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

let ReactJsApp = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default ReactJsApp;
