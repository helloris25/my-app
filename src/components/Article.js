import React, {PureComponent} from 'react'

class Article extends PureComponent {
    render() {
        const {article, isOpen, onButtonClick} = this.props;
        const body = isOpen && <section className="card-text">{article.text}</section>;
        const style = {width: '50%'};
        return (
            <div className='card mx-auto' style={style}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button className='btn btn-primary btn-lg float-right' onClick={onButtonClick}>{isOpen ? 'Opened' : 'Closed'}</button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className='card-subtitle text-muted'>creation date: {(new Date(article.date)).toDateString()}</h6>
                    {body}
                </div>
            </div>
        )
    }
}

export default Article;