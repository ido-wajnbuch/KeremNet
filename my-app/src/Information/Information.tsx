import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

interface InformationProps
{
    author: string;
    publishAt: string;
}

const Information : React.FC<InformationProps>  = ({author, publishAt}) => {
    const showInfo = () => {alert(`Author:${author}\nPublished At:${publishAt}`);}
    return (<button className='information' onClick={showInfo} style={{background:'none', border:'none'}}>
        <FaInfoCircle color="gray"></FaInfoCircle></button>);
}

export default Information;