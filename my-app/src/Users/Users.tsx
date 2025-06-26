import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../Sidebar/Sidebar.css';

const Users:React.FC = () =>
{
    return <div className='Users'>
        <Sidebar links={[{ title: 'home', link: '/' }, { title: 'users', link: '/users' }]}></Sidebar>
        <div className='right'></div>
    </div>;
}

export default Users;