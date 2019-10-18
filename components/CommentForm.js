import { Component } from 'react'

class CommentForm extends Component {

  render () {
    return <form className="c-comment__form" onSubmit={this.props.articleComment}>
        <div className="c-comment__form--user">
          <input name='name' className='c-comment__form--user-name' required />
        </div>
        <div className="c-comment__form--body">
          <textarea name='body' className="c-comment__form--body-text" required />
        </div>
        <div className="c-comment__form--row">
          <button type='submit' className='o-submit__btn'>Submit</button>
        </div>
      </form>
  }
}

export default CommentForm