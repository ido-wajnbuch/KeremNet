import React from 'react';
import Like from '../Like/Like';
import Information from '../Information/Information';
import Comment from '../Comment/Comment'; 

interface PostProps
{
    content: string;
    author: string;
    //comment: React.ReactNode; Assuming comment is a React component
}

const Post: React.FC<PostProps> = ({ content, author }) => {
    const publishDateTime = new Date();
    return (
        <div className="post">
            <span className='post-content'>{content}</span>
            <div className='post-inner-container'>
                <span className='like-button'><Like/></span>
                <span className='comment-button'><Comment/></span>
                <span className='information-button'><Information author={author} 
                publishAt={publishDateTime.toString().split('GMT')[0]}/></span>
            </div>
        </div>
    );
};

export default Post;
