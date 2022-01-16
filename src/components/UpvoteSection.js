import React from "react";

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {

   const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: 'post',
    });
    const body = await result.json();
    setArticleInfo(body);
  };
  
  return (
    <>
        <button onClick={() => upvoteArticle() && window.location.reload(`/articles/${articleName}`)}>Upvote</button>
        <h3>Upvotes: {upvotes}</h3>
    </>
  );
};

export default UpvoteSection;
