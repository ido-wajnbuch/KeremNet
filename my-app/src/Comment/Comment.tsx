import React from 'react';
import { useState } from 'react';
import { FaComment } from 'react-icons/fa';
import Modal from 'react-modal';

interface CommentProps
{
    comments: string[];
}

const Comment : React.FC<CommentProps> = ({ comments }) => {
    const [popup, setPopup] = useState(false);

    const clickOpenPopup = () => {setPopup(true); console.log(popup);};
    const clickClosePopup = () => {setPopup(false); console.log(popup);};

    return(
        <>
        <button className='comment post-button' onClick={clickOpenPopup}>
            <FaComment color="gray"></FaComment>
        </button>
        <Modal className='comments-window' isOpen={popup}>
        <button className='close-comments' onClick={clickClosePopup}>X</button>
            {comments.map(comment => (
                   <ul>
                        <li>{comment}</li>
                   </ul>
                ))}
                
        </Modal>
        </>
    );
}

export default Comment;