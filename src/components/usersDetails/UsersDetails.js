import React, {useEffect, useState} from 'react';

import {postService} from "../servise_link/service_posts";
import Posts from "../posts/Posts";


const UsersDetails = ({user}) => {
    const {id, name, username, email} = user
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPosts()
            .then(value => setPosts([...value]))
    },[]);


    return (
        <div>
            <div>{id} {name} {username} {email}</div>
            <button onClick={()=> posts && <Posts posts={posts}/>}>get post</button>
        </div>
    );
};

export default UsersDetails;