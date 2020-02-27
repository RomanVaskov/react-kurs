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

function App() {
  return (
    <BrowserRouter>
      <div className={style.app_wrapper}>
        <Header />
        <Navbar />
        <div className={style.app_wrapper_content}>
          <Route path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
