import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Tehnologies />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href="#s">Home</a>
      <a href="#s">New Feeds</a>
      <a href="#s">Messages</a>
    </div>
  );
}

const Tehnologies = () => {
  return (
    <div>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>REACT</li>
      </ul>
    </div>
  );
}

export default App;