import { Component } from 'react'
import Link from 'next/link'
import moment from 'moment'

class ArticleCard extends Component {
  truncate (string) {
    if (string.length > 99) {
      return `${string.substr(0, 99)} ...`
    } else {
      return string
    }
  }

  render () {
    const { article } = this.props

    return <li className="c-articles__list">
      <div className="c-articles__list--hero">{article.image}</div>
      <div className="c-article__list__inner">
        <h4 className="c-articles__list__inner--title">{article.title}</h4>
        <p className="c-articles__list__inner--body">{this.truncate(article.body)}</p>
        <p className="c-articles__list__inner--date"><time dateTime={article.created_at}>{moment(article.created_at).format('LL')}</time><br />
          <Link href={`/post?id=${article.id}`}>
            <a>view more</a>
          </Link>
        </p>
      </div>
    </li>
  }
}

export default ArticleCard