import { Component } from 'react'
import moment from 'moment'

class FullArticle extends Component {
  render () {

    const { article } = this.props

    return <ul className="c-article"> 
      <li className="c-article__title">
        {article.title}
      </li>
      <hr className="c-main__head-line" />
      <li className="c-article__image">
        <img src={`${process.env.RUBY_HOST}${article.image}`} />
      </li>
      <li className="c-article__body">
        {article.body}
      </li>
      <li className="c-article__date">
        Posted {moment(article.createdAt).fromNow()}
      </li>
    </ul>
  }
}

export default FullArticle