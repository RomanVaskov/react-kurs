import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root')
  );
}

rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});