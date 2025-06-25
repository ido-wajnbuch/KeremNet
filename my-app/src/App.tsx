import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Post from './Post/Post';
import './Post/Post.css';




function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3031/posts')
    .then((res:any) => setPosts(res.data))
    .catch((err:any) => console.log(err));
  }, []);

  return (
    <div className="App">
      {
        posts.map((post:any) => (
          <Post content={post.content} author={post.author} 
          publishedAt={post.publishedAt} comments={post.comments} likes={post.likes} />
        ))
      }
    </div>
  );
}

export default App;
