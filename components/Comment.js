import { Component } from 'react'
import moment from 'moment'

class Comment extends Component {

  render () {

    const { comment } = this.props

    return  <div className="c-comments">
      <div className="c-comments__comment__card">
        <p className="c-comments__comment__card--name">Comment by {comment.name}</p>
        <p className="c-comments__comment__card--body">{comment.body}</p>
        <p className="c-comments__comment__card--date">Posted {moment(comment.createdAt).fromNow()}</p>
      </div>
    </div>
  }
}

export default Comment