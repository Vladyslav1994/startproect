import React from 'react';

import './user_style.css';
import {Link} from "react-router-dom";

const UserComponent = ({user}) => {
    const {id, name, username} = user;
    return (
        <div className={'wrap_for_users'}>
            <Link to={id.toString()} state={user}> {id} {name} {username}</Link>
        </div>

    );
};

export default UserComponent;