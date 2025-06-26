import React from 'react';
import { SidebarData } from './SIdebarData';

interface SidebarProps
{
    links:SidebarData[];
}

const Sidebar : React.FC<SidebarProps> = ({links}) =>
{
    return(
    <div className='sidebar'>
        <ul className='sidebar-list'>
            {
                links.map((val, key) => {
                    return(
                        <li className='sidebar-row' key={key} onClick={() => {window.location.pathname = val.link} }>
                            <div>{val.title}</div>
                        </li>
                    );
                })
            }
        </ul>
    </div>
    );
}

export default Sidebar;