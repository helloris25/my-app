import React, {PureComponent} from 'react'
import './style.css'

class NewArticleForm extends PureComponent {
    state = {
        title: '',
        text: '',
        agree: false,
    };
    render() {
        const { title, text, agree} = this.state;
        return (
            <div style={{width: '50%', marginBottom: '50px'}} className='mx-auto'>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input  type="text" className="form-control" id="title" onChange={this.onChange} value={title} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Body</label>
                    <textarea name="" className="form-control" id="text" cols="30" rows="10" onChange={this.onChange} value={text} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">agrees with the conditions</label>
                    <input type="checkbox" onChange={this.onChange} id='agree' checked={agree}/>
                </div>
                <button disabled={!this.validate()} type="submit" className="btn btn-primary" onClick={this.onBtnClick}>Add article</button>
            </div>
        )
    }
    onBtnClick = () => {
        const { title, text } = this.state;
        this.props.onAddArticle(title, text);
    };

    onChange = e => {
        const { id, value } = e.currentTarget;
        this.setState({
            [id]: value
        })
    };

    validate = () => {
        const {agree, title, text} = this.state;
        return agree && title.trim() && text.trim()
    }
}

export default NewArticleForm