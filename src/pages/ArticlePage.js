import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articleFeed from './articleFeed';
import ArticleList from '../components/ArticleList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';
import UpvoteSection from '../components/UpvoteSection';
import AddCommentForm from '../components/AddCommentForm';

const ArticlePage = () => {

    const { name } = useParams();
    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
    const [loading, setLoading] = useState(false);
    
    // useEffect and fetch data from api if available
    useEffect(async () => {
        if (article) {
            setLoading(true);
            await fetch(`/api/articles/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setArticleInfo(data);
                setLoading(false);
            });
        }
    }, []);
    
    const article = articleFeed.find(article => article.name === name);

    if (!article) {
        return <NotFoundPage />;
    }
    const otherArticles = articleFeed.filter((article) => article.name !== name);
    
    return (
        <>
            <h1>{article.title}</h1>
            <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo} />
            {article.content.map((paragraph, key) => (
            <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments} />
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <h3>Other Articles:</h3>
            <ArticleList articles={otherArticles} />
        </>
    );
};

export default ArticlePage;