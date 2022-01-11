import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <div><b>Id</b>:{" "}{post.id}</div>
            <div><b>username</b>:{" "}{post.title}</div>
            <div><b>email</b>:{" "}{post.body}</div>
        </div>
    );
};

export default Post;