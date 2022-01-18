import React from 'react';

const Post = ({post, setUserComments}) => {
    const {id, name, body} = post;
    return (
        <div>
            {id} {name} {body}
            <button onClick={() => setUserComments(id)}>Comments</button>
        </div>
    );
};

export default Post;