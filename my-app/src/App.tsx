import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Post from './Post/Post';
import {PostType} from './Post/Post';
import './Post/Post.css';




function App() {
  const API_URL = 'http://localhost:3031/posts';
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => 
    {
      try
      {
        const response = await fetch(API_URL);
        if(!response.ok)
        {
          throw new Error("problem with fetching data");
        }
        const data : PostType[] = await response.json();
        setPosts(data);
      }
      catch(err:any)
      {
        console.log(typeof err);
        setError(err.message);
      }
      finally
      {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (error)
  {
    return <div>Error: {error}</div>;
  } 
    

  return (
    <div className="App">
      {
        posts.map((post:PostType) => (
          <Post content={post.content} author={post.author} 
          publishedAt={post.publishedAt} comments={post.comments} likes={post.likes} />
        ))
      }
    </div>
  );
}

export default App;
