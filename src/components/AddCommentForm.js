import React, { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [userName, setUserName] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async () => {
        const response = await fetch(`/api/articles/${articleName}/add-comment`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: userName,
                text: commentText
            })
        });
        console.log(response);
        const body = await response.json();
        console.log(body);
        setArticleInfo(body);
        setUserName('');
        setCommentText('');
    }

    return (
    <div className="add-comment-form">
        <h3>Add a comment</h3>
        <form>
            <label htmlFor="userName">Name</label>
            <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <label htmlFor="comment">Comment</label>
            <textarea rows='4' cols='50' id="comment" value={commentText} onChange={(e) => setCommentText(e.target.value)}/>
            <button onClick = {() => addComment()} >Submit</button>
        </form>
    </div>
    );
};

export default AddCommentForm;