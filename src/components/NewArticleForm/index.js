import React, {PureComponent} from 'react'
import './style.css'

class NewArticleForm extends PureComponent {
    constructor(props) {
        super(props);
        this.input = React.createRef();
        this.textarea = React.createRef();
    }
    render() {
        return (
            <div style={{width: '50%', marginBottom: '50px'}} className='mx-auto'>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input  type="text" className="form-control" id="title" defaultValue='' ref={this.input} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Body</label>
                    <textarea name="" className="form-control" id="" cols="30" rows="10" defaultValue=''  ref={this.textarea}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onBtnClick}>Add article</button>
            </div>
        )
    }
    onBtnClick = e => {
        alert(`${this.input.current.value} ${this.textarea.current.value}`)
    }


}

export default NewArticleForm