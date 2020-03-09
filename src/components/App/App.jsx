import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import style from "./App.module.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import DialogsContainer from "../Dialogs/DialogsContainer";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";
import News from "../News/News";
import Music from "../Music/Music";

const App = ({ state, dispatch }) => {
  return (
    <BrowserRouter>
      <div className={style.app_wrapper}>
        <Header />
        <Navbar state={state} />
        <div className={style.app_wrapper_content}>
          <Route
            path="/profile"
            render={() => {
              return <Profile state={state} dispatch={dispatch} />;
            }}
          />
          <Route
            path="/dialogs"
            render={() => {
              return <DialogsContainer state={state} dispatch={dispatch} />;
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
