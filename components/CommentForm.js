import { Component } from 'react'
import { withRouter } from 'next/router'

class CommentForm extends Component {

  render () {
    return <form className="c-comment__form" onSubmit={this.props.articleComment}>
      <div className="c-comment__form--user">
        <img className="c-comment__form--user-image" src={this.props.userPicture} />
        <span className="c-comment__form--user-name">{this.props.userName}</span>
        <input type='hidden' name='name' value={this.props.userName} />
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

export default withRouter(CommentForm)