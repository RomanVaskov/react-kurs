import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "../Dialogs/DialogsContainer";
import HeaderContainer from "../Header/HeaderContainer";
import Music from "../Music/Music";
import Navbar from "../Navbar/Navbar";
import News from "../News/News";
import Settings from "../Settings/Settings";
import UsersContainer from "../Users/UsersContainer";
import style from "./App.module.css";
import ProfileContainer from "../Profile/ProfileContainer";

const App = () => {
  return (
    <BrowserRouter>
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
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
