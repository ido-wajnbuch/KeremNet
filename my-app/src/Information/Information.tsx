import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

interface InformationProps
{
    author: string;
    publishAt: string;
}

const Information : React.FC<InformationProps>  = ({author, publishAt}) => {
    const showInfo = () => {alert(`Author: ${author}\nPublished At: ${publishAt}`);}
    return (
    <button className='information post-button' onClick={showInfo}>
        <FaInfoCircle color="gray"></FaInfoCircle>
    </button>
    );
}

export default Information;