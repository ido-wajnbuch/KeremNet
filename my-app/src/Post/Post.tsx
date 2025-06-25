import React from 'react';
import Like from '../Like/Like';
import Information from '../Information/Information';
import Comment from '../Comment/Comment'; 

interface PostProps
{
    content: string;
    author: string;
    publishedAt: string;
    comments: string[];
    likes: number;
}

const Post: React.FC<PostProps> = ({ content, author, publishedAt, comments, likes }) => {
    return (
        <div className="post">
            <span className='post-content'>{content}</span>
            <div className='post-inner-container'>
                <Like likeCount={likes}/>
                <Comment comments={comments}/>
                <Information author={author} publishAt={publishedAt}/>
            </div>
        </div>
    );
};

export default Post;
