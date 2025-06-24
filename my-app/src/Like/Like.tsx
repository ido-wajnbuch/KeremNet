import React, { useState } from 'react';
import { AiFillLike} from 'react-icons/ai'; // Example icons

const Like: React.FC = () => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const handleClick = () => {
        setLiked(prev => !prev);
        setLikeCount(prev => prev + (liked ? -1 : 1));
    };

    return (
        <button className='like' onClick={handleClick}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            {liked ? <AiFillLike color="blue" /> : <AiFillLike color="gray" />}
            <span>{likeCount}</span>
        </button>
    );
}

export default Like;