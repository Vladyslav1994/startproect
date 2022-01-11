import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom'

import {userService} from "../../services/user.service";
import UserComponent from "../../components/userComponent/userComponent";
import "./User_information.css"



const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    },[]);

    return (
        <div className={'user_information'}>
            <div>
                {users.map(user => <UserComponent key={user.id} user={user}/>)}
            </div>
            <Outlet/>
        </div>
    );
};

export default UsersPage;