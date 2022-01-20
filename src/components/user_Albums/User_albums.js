import React, {useEffect, useState} from 'react';
import {photoService} from "../../services/photo.service";
import UserAlbum from "../user_Album/user_album";

const UserAlbums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        photoService.getByPhoto()
            .then(value => setAlbums([...value]))
    });
    return (
        <div>
            {albums.map(album => <UserAlbum key={album.id} album={album}/>)}
        </div>
    );
};

export default UserAlbums;