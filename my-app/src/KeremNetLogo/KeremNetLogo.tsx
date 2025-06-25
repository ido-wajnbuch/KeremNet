import React from 'react';

const KeremNetLogo : React.FC = () =>
{
    return (
        <div className='logo'>
            <img className='logo-img' src={require('./logo.jpg')} onClick={() => {alert("ido"); }}></img>
            <p className='logo-txt'>KeremNet</p>
        </div>
    );
}

export default KeremNetLogo;