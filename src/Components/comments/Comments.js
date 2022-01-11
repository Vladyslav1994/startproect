import React, {useEffect, useState} from 'react';

import Comment from "../comment/Comment";

const Comments = () => {
    const [comments, setComement] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((value) => value.json())
            .then(value => setComement(value))
    },[]);
    return (
        <div>
            {comments.map(value => <Comment key={value.id} coment={value}/>)}
        </div>
    );
};

export default Comments;