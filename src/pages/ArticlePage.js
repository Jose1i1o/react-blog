import React, { useState, useEffect } from 'react';
import articleFeed from './articleFeed';
import { useParams } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({ match }) => {

    const name = useParams(match).name;
    const article = articleFeed.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        setArticleInfo({ upvotes: Math.ceil(Math.random() * 10) });
    }, [name]);

    if(!article) return <NotFoundPage />;

    const otherArticles = articleFeed.filter(article => article.name !== name);
    
    return(
        <>
            <h1>{ article.title }</h1>
            <p> This post has been updated { articleInfo.upvotes } times.</p>
            { article.content.map((paragraph, key) => (
                <p key={key}>{ paragraph }</p>
            ))}
            <h3>Other articles:</h3>
            <ArticleList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;