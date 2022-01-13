import React from 'react';

const User = (props) => {
    const {user: {id, name, email}, getUserId} = props;
    return (
        <div>
            {id} {name} {email}
            <button onClick={()=> getUserId(id)}>getId</button>
        </div>
    );
};

export default User;