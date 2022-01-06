import React from 'react';
import { Link } from 'react-router-dom';
import articleFeed from './articleFeed';

const ArticleList = () => (
    <>
        <h1>Articles</h1>
        { articleFeed.map((article, key) => (
            <Link key={key} to={`/article/${article.name}`}>
                <h3>{article.title}</h3>
            </Link>
        ))}
    </>
);

export default ArticleList;