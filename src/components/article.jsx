import React from 'react'
import './article.css'

const Article = ({title , paragraphe}) => (
    <article className='article'>
        <h2 className='article-title'>{title}</h2>
        <p className='article-text'>{paragraphe}</p>
    </article>
)

export default Article