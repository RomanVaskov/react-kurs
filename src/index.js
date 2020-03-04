import React from 'react';
import ReactDOM from 'react-dom';
import store from './services/db';
import './index.css';
import App from './components/App/App';

let rerenderEntireTree = (state) => {
  ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} />, document.getElementById('root'));
}
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);