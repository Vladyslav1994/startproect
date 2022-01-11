import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams } from "react-router-dom";

import {userService} from "../../services/user.service";
import './user_details.css'
import {useNavigate} from "react-router";

const UserDetails = () => {
    const {id} = useParams();

    const [userDetails, setUserDetails] = useState(null)
    const {state} = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (state) {
            setUserDetails(state)
            return
        }

        userService.getById(id).then(value => setUserDetails({...value}));
    }, [id]);

    return (
        <div className={'user_details'}>
            {userDetails && (
                <div>
                    <div>Id:{userDetails.id}</div>
                    <div>name:{userDetails.name}</div>
                    <div>username:{userDetails.username}</div>
                    <div>email:{userDetails.email}</div>
                    <div>city:{userDetails.address.city}</div>
                    <button onClick={()=> navigate(`posts`)}>posts</button>
                </div>
            )}
            <Outlet/>
        </div>
    );
};

export default UserDetails;