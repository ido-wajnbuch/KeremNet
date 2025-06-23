import React from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './Post/Post';
import './Post/Post.css';


function App() {
  return (
    <div className="App">
      <Post content="Hello World!" author="Ido Wajnbuch" publishDateTime={new Date()} />
    </div>
  );
}

export default App;
