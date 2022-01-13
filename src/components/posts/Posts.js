import React, {useEffect, useState} from 'react';
import {userService} from "../servise_link/servise_users";
import Post from "../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState([]);

    useEffect(() => {
        userService.getPosts()
            .then(value => setPosts(value))
    },[]);

    // const getPostId = (id) => {
    //     userService.getPostId(id)
    //         .then(value => setPost(value))
    // };

    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;