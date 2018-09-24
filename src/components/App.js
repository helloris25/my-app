import ArticleList from './ArticleList'
import NewArticleForm from './NewArticleForm'
import React, {PureComponent} from 'react'
import  articles from '../fixtures'
import  'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent {
    state = {
        reverted: false,
        articles: articles
    };
    render() {
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='display-3'>
                        App name
                        <button className='btn' onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                <NewArticleForm onAddArticle={this.handleAddArticle} />
                <ArticleList articles={this.state.reverted ? this.state.articles.slice().reverse() : this.state.articles}/>
            </div>
        )
    }

    handleAddArticle = () => {

    }

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}

export default App;