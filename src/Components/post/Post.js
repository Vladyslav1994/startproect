import React from 'react';

const Post = (props) => {
    const {id, title, body} = props.post;
    return (
        <div>
            {id} {title} {body}
        </div>
    );
};

export default Post;