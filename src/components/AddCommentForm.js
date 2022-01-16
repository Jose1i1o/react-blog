import React, { useState } from 'react';

const AddCommentForm = () => {
    const [userName, setUserName] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async ({ articleName, setArticleInfo }) => {
        const response = await fetch(`/api/articles/${articleName}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName,
                text: commentText
            })
        });
        const body = await response.json();
        setArticleInfo(body);
        setUserName('');
        setCommentText('');

        if (response.ok) {
            window.location.reload();
        } else {
            alert('Error: ' + response.statusText);
        }
    }

    return (
    <div className="add-comment-form">
        <h3>Add a comment</h3>
        <form>
            <label htmlFor="userName">Name</label>
            <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <label htmlFor="comment">Comment</label>
            <textarea rows='4' cols='50' value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder='Type your comment here' id="comment" />
            <button onClick = {() => addComment()} >Submit</button>
        </form>
    </div>
    );
};

export default AddCommentForm;