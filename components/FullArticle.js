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
        <img src={`http://localhost:3001${article.image}`} />
      </li>
      <li className="c-article__body">
        {article.body}
      </li>
      <li className="c-article__date">
        <time dateTime={article.created_at}>{moment(article.created_at).format('LL')}</time>
      </li>
    </ul>
  }
}

export default FullArticle