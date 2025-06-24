import React from 'react';
import { FaComment } from 'react-icons/fa';

const Comment : React.FC = () => {
    return (<button className='comment' style={{background:'none', border:'none'}}>
        <FaComment color="gray"></FaComment></button>);
}

export default Comment;