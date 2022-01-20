import React from 'react';

const UserAlbum = ({album}) => {
    const {id, title} = album;
    return (
        <div>
            <div>{id} {title}</div>
        </div>
    );
};

export default UserAlbum;