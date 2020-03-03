import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { addPost, updateNewPostText } from "./services/db";

export const rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />, document.getElementById('root'));
}