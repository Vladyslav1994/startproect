import React, {useEffect, useState} from 'react';

import User from "../user/User";
import {userService} from "../servise_link/servise_users";
import './usersCSS.css'
import UsersDetails from "../usersDetails/UsersDetails";


const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)


    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, []);

    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value))
    };


    return (
        <div>
            <div className={'wrap'}>
                <div className={'user_main'}>{users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}</div>
                {user && <div><UsersDetails user={user}/></div>}
            </div>
        </div>
    );
};

export default Users;