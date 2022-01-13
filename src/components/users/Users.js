import React, {useEffect, useState} from 'react';

import User from "../user/User";
import {userService} from "../servise_link/servise_users";
import './usersCSS.css'
import Posts from "../posts/Posts";

const Users = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value));
    }, []);

    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value));
    };
    return (
        <div>
            <div className={'wrap'}>
                <div className={'user_main'}>{users.map(value => <User key={value.id} user={value}
                                                                       getUserId={getUserId}/>)}</div>
                {user && <div className={'user_details'}>{user.id}-{user.name}-{user.username} - email{user.email} -
                    address:{user.address.street}- {user.address.suite} {user.address.city} {user.address.zipcode}
                <button onClick={()=> <Posts/>}>Get Posts</button>
                </div>}
            </div>
        </div>
    );
};

export default Users;