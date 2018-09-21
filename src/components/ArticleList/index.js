import React from 'react'
import Article from '../Article'
import './style.css'

export default function ArticleList({articles}) {
    const articleElements = articles.map(article => <li key={article.id}><Article article = {article} /></li>);

    return (
        <ul>
            {articleElements}
        </ul>
    )
}