import React, {useEffect, useState} from 'react';
import Post from "../post/Post";
import {postService} from "../servise_link/service_posts";

const Posts = ({userId, ...rest}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getPosts(userId)
            .then(value => setPosts(value))
    }, [userId]);

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post} {...rest}/>)}
        </div>
    );
};

export default Posts;