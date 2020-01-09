import { Component } from 'react'

import { MarkdownPreview } from 'react-marked-markdown'

import moment from 'moment'

class FullArticle extends Component {
  render () {

    const { article } = this.props

    return <ul className="c-article"> 
      <li className="c-article__title">
        {article.title}
      </li>
      <hr className="c-main__head-line" />
      <div className="c-article__inner">
        <li className="c-article__inner--image">
          <img src={`${process.env.BACKEND_URL}${article.image}`} />
        </li>
        <li className="c-article__inner--body">
          <MarkdownPreview value={article.body} />
        </li>
      </div>
      <li className="c-article__date">
        Posted {moment(article.createdAt).format('MMMM Do YYYY')}
      </li>
    </ul>
  }
}

export default FullArticle