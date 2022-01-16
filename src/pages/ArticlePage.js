import React, { useState, useEffect } from 'react';
import articleFeed from './articleFeed';
import { useParams } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
import NotFoundPage from './NotFoundPage';
import CommentsList from '../components/CommentsList';

const ArticlePage = ({ match }) => {

    const name = useParams(match).name;
    const article = articleFeed.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
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
            <CommentsList comments={articleInfo.comments} />
            <h3>Other articles:</h3>
            <ArticleList articles={otherArticles} />
        </>
    );
}

export default ArticlePage;