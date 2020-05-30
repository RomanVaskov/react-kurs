import React, { Suspense } from "react";
import { connect, Provider } from "react-redux";
import { BrowserRouter, Route, withRouter, Switch } from "react-router-dom";
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
import style from "./App.module.css";

const UsersContainer = React.lazy(() => {
  return import("../Users/UsersContainer");
});

class App extends React.Component {
  catchAllUnhandledRejection = (event) => {
    console.error(event.reason);
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledRejection)
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledRejection)
  }
  render() {
    // if (!this.props.initialized) {
    //   return (
    //     <div className={style.mainPreloader}>
    //       <img alt="img" src={Preloader} />
    //     </div>
    //   )
    // }
    return (
      <div className={style.app_wrapper}>
        <Suspense fallback={<img alt="img" src={Preloader} />}>
          <HeaderContainer />
          <Navbar />
          <div className={style.app_wrapper_content}>
            <Switch>
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
            </Switch>
          </div>
        </Suspense>
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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default ReactJsApp;
