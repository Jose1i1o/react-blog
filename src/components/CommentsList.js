import React from 'react';



const CommentsList = ({ comments }) => {
    return (
        <>
        <div className="comments-list">
            <h2>Comments</h2>
            <ul>
                {comments.map((comment, key) => (
                    <li key={key}>
                        <p>{comment.userName}</p>
                        <p>-- {comment.text}, {new Date(comment.timestamp).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
};


export default CommentsList;