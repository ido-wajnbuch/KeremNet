import React, { useState } from 'react';
import { AiFillLike} from 'react-icons/ai'; // Example icons


interface LikeProps
{
    likeCount: number;
}

const Like: React.FC<LikeProps> = ({ likeCount }) => {
    const [liked, setLiked] = useState(false);
    const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);

    const handleClick = () => {
        setLiked(prev => !prev);
        setCurrentLikeCount(prev => prev + (liked ? -1 : 1));
    };

    return (
        <button className='like post-button' onClick={handleClick}>
            {liked ? <AiFillLike color="blue" /> : <AiFillLike color="gray" />}
            <span>{currentLikeCount}</span>
        </button>
    );
}

export default Like;