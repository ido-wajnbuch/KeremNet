import React from 'react';
import Like from '../Like/Like'; 

interface PostProps
{
    content: string;
    author: string;
    publishDateTime: Date;
    //comment: React.ReactNode; Assuming comment is a React component
}

const Post: React.FC<PostProps> = ({ content, author, publishDateTime}) => {
    return (
        <div className="post">
            <span className='post-content'>{content}</span>
            <span className='post-metadata'>{author} {publishDateTime.toString().split('GMT')[0]}</span>
            <span className='social-buttons'><Like/></span>
        </div>
    );
};

export default Post;
