import React from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './Post/Post';
import './Post/Post.css';




function App() {
  const content = "Hello World!";
  const author = "Ido Wajnbuch";
  const publishedAt = new Date().toString().split('GMT')[0];
  const comments = ["comment 1", "good post", "i like it"];
  const likes = 10;

  return (
    <div className="App">
      <Post content={content} author={author} 
      publishedAt={publishedAt} comments={comments} likes={likes} />
    </div>
  );
}

export default App;
