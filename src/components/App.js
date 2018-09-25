import ArticleList from './ArticleList'
import NewArticleForm from './NewArticleForm'
import React, {PureComponent} from 'react'
import  'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent {
    state = {
        articles: [],
        isLoading: true
    };
    async componentDidMount() {
        const res = await fetch('/fixtures.json');
        const articles = await res.json();
        setTimeout( () => {
            this.setState({
                articles:  articles,
                isLoading: false
            });
        }, 1000);

    }
    render() {
        const {articles, isLoading} = this.state;
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <h1 className='display-3'>
                        App name
                        <button className='btn' onClick={this.revert}>Revert</button>
                    </h1>
                </div>
                <NewArticleForm onAddArticle={this.handleAddArticle.bind(this)} />
                {isLoading ? <h4 className='text-center'>Loading ...</h4> : <ArticleList articles={articles}/>}


            </div>
        )
    }

    handleAddArticle = (title, text) => {
        const idArticle = Math.random().toString().split('.')[1];
        const newArticle = {id: idArticle, title: title, text: text, date: "2016-06-09T15:03:23.000Z"};
        this.setState({
            articles:  [newArticle, ...this.state.articles]
        });
    };

    revert = () => {
        const articles = this.state.articles.slice();
        this.setState({
            articles:  articles.reverse()
        });
    }
}

export default App;