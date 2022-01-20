import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {useParams} from "react-router-dom";
import Post from "./Post";

const UserPosts = () => {
    const [userPost, setUserPost] = useState([])
    const {id} = useParams()
    useEffect(() => {
        postService.getByIdPosts(id).then(value => setUserPost([...value]))
    },[id]);
    console.log(userPost);

    return (
        <div className={'userPost'}>
            {userPost.map(post => <Post post={post} key={post.id} />
            )}
        </div>
    );
};

export default UserPosts;