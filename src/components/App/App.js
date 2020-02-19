import React from 'react';
import style from './App.module.css';
import Header from '../Header';
import Navbar from '../Navbar';
import Profile from '../Profile';

function App() {
  return (
    <div className={style.app_wrapper}>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;