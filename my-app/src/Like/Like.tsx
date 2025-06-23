import React, { useState } from 'react';
import { AiFillLike} from 'react-icons/ai'; // Example icons

const Like: React.FC = () => {
    const [likeCount, setLikeCount] = useState(0);

    const handleClick = () => {setLikeCount(prev => prev + 1);};

    return (
        <button onClick={handleClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <AiFillLike size={24} color="gray" />
            <span>{likeCount}</span>
        </button>
    );
}

export default Like;