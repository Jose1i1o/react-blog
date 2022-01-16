import React from "react";

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {

    const handleUpvote = () => {
        setArticleInfo({
            upvotes: upvotes + 1,
            comments: [],
        });
    };

    return (
        <>
            <h3>Upvotes: {upvotes}</h3>
            <button onClick={handleUpvote}>Upvote</button>
        </>
    );
};




//   const upvoteArticle = async () => {
//     const result = await fetch(`/api/articles/${articleName}/upvote`, {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     const body = await result.json();
//     setArticleInfo(body);

//     if (result.ok) {
//       window.location.reload();
//     }
//   };
  
//   return (
//     <>
//         <h3>Upvotes: {upvoteArticle}</h3>
//         <button onClick={handleUpvote}>Upvote</button>
//     </>
//   );
// };

export default UpvoteSection;
