import React, {useEffect, useState} from 'react';
import {photoService} from "../../services/photo.service";
import UserAlbum from "../user_Album/user_album";
import {useParams, Outlet} from "react-router-dom";

const UserAlbums = () => {
    const [albums, setAlbums] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        photoService.getByIdPhoto(id)
            .then(value => setAlbums([...value]))
    },[id]);
    console.log(albums)
    return (
        <div>
            <div>{albums.map(album => <UserAlbum key={album.id} album={album}/>)}</div>
            <Outlet/>
        </div>
    );
};

export default UserAlbums;