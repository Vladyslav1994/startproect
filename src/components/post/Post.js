import React from 'react';

const Post = ({post}) => {
    const {id, name, body} = post;
    return (
        <div>
            {id} {name} {body}
        </div>
    );
};

export default Post;