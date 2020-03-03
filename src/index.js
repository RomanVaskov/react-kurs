import React from 'react';
import ReactDOM from 'react-dom';
import state, { subscribe, addPost, updateNewPostText } from './services/db';
import './index.css';
import App from './components/App/App';

let rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />, document.getElementById('root'));
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree);