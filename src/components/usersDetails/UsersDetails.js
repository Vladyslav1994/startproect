import React from 'react';

const UsersDetails = ({user, setUserId}) => {
    const {id, name, username, email} = user

    return (
        <div>
            <div>{id} {name} {username} {email}</div>
            <button onClick={()=> setUserId(id)}>get post</button>
        </div>
    );
};

export default UsersDetails;