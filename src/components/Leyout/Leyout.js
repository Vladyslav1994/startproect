import React from 'react';
import {Outlet, NavLink} from "react-router-dom";

import './leyaout.style.css'

const Leyout = () => {
    return (
        <div>
            <div className={'main'}>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export default Leyout;