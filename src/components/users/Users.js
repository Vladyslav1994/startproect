import React, {useEffect, useState} from 'react';

import User from "../user/User";
import {userService} from "../servise_link/servise_users";

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    },[]);

    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value));
    };
    return (
        <div>
            {user && <div>{user.id}-{user.name}-{user.email}</div>}
            {users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}
        </div>
    );
};

export default Users;