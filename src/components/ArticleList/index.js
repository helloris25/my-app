import React, {PureComponent} from 'react'
import Article from '../Article'
import './style.css'

class ArticleList extends PureComponent {
    state = {
        openArticleId: null
    };
    render() {
        const articleElements = this.props.articles.map(article =>
            <li className='article-list__li' key={article.id}>
                <Article article = {article}
                         isOpen = {this.state.openArticleId === article.id}
                         onButtonClick = {this.handleClick.bind(this, article.id)}/>
            </li>);

        return (
            <ul>
                {articleElements.length > 0 ? articleElements : <h4 className='text-center'>Sorry! No articles</h4>}
            </ul>
        )
    }

    handleClick = openArticleId => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null: openArticleId
    })
}

export default ArticleList