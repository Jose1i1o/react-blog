import React from 'react';
import articleFeed from './articleFeed';
import ArticleList from '../components/ArticleList';

const ArticleListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticleList articles={articleFeed} />
    </>
);

export default ArticleListPage;