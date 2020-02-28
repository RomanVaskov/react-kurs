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

const App = ({ dialogsData, messagesData, postsData }) => {
  let props = { dialogsData, messagesData, postsData };
  console.log(props);
  return (
    <BrowserRouter>
      <div className={style.app_wrapper}>
        <Header />
        <Navbar />
        <div className={style.app_wrapper_content}>
          <Route
            path="/profile"
            render={() => {
              return <Profile postsData={props.postsData} />;
            }}
          />
          <Route
            path="/dialogs"
            render={() => {
              return (
                <Dialogs
                  dialogsData={props.dialogsData}
                  messagesData={props.messagesData}
                />
              );
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
