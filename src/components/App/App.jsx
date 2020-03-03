import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import style from "./App.module.css";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Dialogs from "../Dialogs/Dialogs";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";
import News from "../News/News";
import Music from "../Music/Music";

const App = ({ state, addPost, updateNewPostText }) => {
  return (
    <BrowserRouter>
      <div className={style.app_wrapper}>
        <Header />
        <Navbar state={state} />
        <div className={style.app_wrapper_content}>
          <Route
            path="/profile"
            render={() => {
              return (
                <Profile
                  state={state}
                  addPost={addPost}
                  updateNewPostText={updateNewPostText}
                />
              );
            }}
          />
          <Route
            path="/dialogs"
            render={() => {
              return <Dialogs state={state} />;
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
