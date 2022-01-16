import React from 'react';

const User = (props) => {
    const {user: {id, name, username}, getUserId} = props;
    return (
        <div>
            {id} {name} {username}
            <button onClick={()=>getUserId(id)}>details</button>
        </div>
    );
};

export default User;