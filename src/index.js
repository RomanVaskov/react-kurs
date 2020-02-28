import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

let dialogsData = [
  { id: 1, name: "Роман" },
  { id: 2, name: "Алексей" },
  { id: 3, name: "Дмитрий" },
  { id: 4, name: "Роман" }
];

let messagesData = [
  { id: 1, message: "PHP" },
  { id: 2, message: "PHP" },
  { id: 3, message: "VUE" },
  { id: 4, message: "REACT" }
];

let postsData = [
  { id: 1, message: "Hello PHP", likesCount: 10 },
  { id: 2, message: "Hello PHP", likesCount: 11 },
  { id: 3, message: "Hello VUE", likesCount: 15 },
  { id: 4, message: "Hello REACT", likesCount: 17 }
];

ReactDOM.render(<App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />, document.getElementById('root'));