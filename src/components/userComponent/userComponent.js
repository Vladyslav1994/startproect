import React from 'react';

import './user_style.css';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

const UserComponent = ({user}) => {
    const {id, name, username} = user;
    const navigation = useNavigate()

    return (
        <div className={'wrap_for_users'}>
            <Link to={id.toString()} state={user}> {id} {name} {username}</Link>
            <button onClick={() => navigation('albums')}>albums</button>
        </div>

    );
};

export default UserComponent;