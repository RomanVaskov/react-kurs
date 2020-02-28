import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import state from "./services/db";

ReactDOM.render(<App state={state} />, document.getElementById('root'));