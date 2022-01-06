import React from 'react';
import articleFeed from './articleFeed';
import { useParams } from 'react-router-dom';

const ArticlePage = ({ match }) => {
    const name = useParams(match).name;
    const article = articleFeed.find(article => article.name === name);

    if(!article) return <h1>Article not found</h1>;
    
    return(
        <>
            <h1>{ article.title }</h1>
            { article.content.map((paragraph, key) => (
                <p key={key}>{ paragraph }</p>
            )) }
        </>
    );
}

export default ArticlePage;