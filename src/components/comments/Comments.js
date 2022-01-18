import React, {useEffect, useState} from 'react';
import {serviceComments} from "../servise_link/servise_comments";
import Comment from "../comment/Comment";

const Comments = ({postId}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        serviceComments.getComments(postId)
            .then(value => setComments(value))
    },[postId]);
    console.log(comments)
    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;