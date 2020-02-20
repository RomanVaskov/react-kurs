import React from 'react';
import style from './App.module.css';
import Header from '../Header';
import Navbar from '../Navbar';
import Dialogs from '../Dialogs';
// import Profile from '../Profile';


function App() {
  return (
    <div className={style.app_wrapper}>
      <Header />
      <Navbar />
      <div className={style.app_wrapper_content}>
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;