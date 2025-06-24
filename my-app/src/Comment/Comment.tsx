import React from 'react';
import { FaComment } from 'react-icons/fa';

const Comment : React.FC = () => {
    const [openPopup, setOpenPopup] = React.useState(false);

    return(
        <span className='comment-wrapper'>
            <button className='comment' style={{background:'none', border:'none'}}
                onClick={() => setOpenPopup(true)}>
                <FaComment color="gray"></FaComment>
            </button>
            {
                openPopup &&
                <div className='comments-popup'>
                    <div className='comments-popup-inner'>
                        <button className='close-popup' onClick={() => setOpenPopup(false)}>X</button>
                        ido
                    </div>
                </div>
            }

        </span>
    );
}

export default Comment;