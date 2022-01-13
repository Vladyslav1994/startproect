import React from 'react';

const Post = (props) => {
    const {post: {id, name, body}} = props;
    return (
        <div>
            {id} {name} {body}
            {/*<button onClick={()=> (id)}>Get Details</button>*/}
        </div>
    );
};

export default Post;