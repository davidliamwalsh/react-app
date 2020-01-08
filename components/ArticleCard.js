import { Component } from 'react'
import Link from 'next/link'
import moment from 'moment'

class ArticleCard extends Component {
  constructor (props) {
    super(props)

    this.gearHover = this.gearHover.bind(this)
    this.gearHoverOut = this.gearHoverOut.bind(this)
    this.state = {
      gearsRotate: false
    }
  }

  gearHover () {
    this.setState({ gearsRotate: !this.state.gearsRotate })
  }

  gearHoverOut () {
    this.setState({ gearsRotate: !this.state.gearsRotate })
  }

  rotateBig () {
    return this.state.gearsRotate ? 'c-articles__list__inner--footer-gears_big-active' : ''
  }

  rotateSmall () {
    return this.state.gearsRotate ? 'c-articles__list__inner--footer-gears_small-active' : ''
  }

  heroTransition () {
    return this.state.gearsRotate ? 'c-articles__list--hero-active' : ''
  }

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
      <Link href={`/article?slug=${article.slug}`} as={`/articles/${article.slug}`}><a className="c-articles__list--link" onMouseOver={this.gearHover} onMouseOut={this.gearHoverOut}>
        <img className={`c-articles__list--hero ${this.heroTransition()}`} src={`${process.env.BACKEND_URL}${article.previewImage}`} />
        <div className="c-article__list__inner">
          <h4 className="c-articles__list__inner--title">{article.title}</h4>
          <p className="c-articles__list__inner--body">{this.truncate(article.body)}</p>
          <div className="c-articles__list__inner--footer">
            <p className="c-articles__list__inner--footer-date">{moment(article.createdAt).format('MMMM Do YYYY')}</p>
            <div className="c-articles__list__inner--footer-gears">
              <img className={`c-articles__list__inner--footer-gears_big ${this.rotateBig()}`} src="/static/gear.png" />
              <img className={`c-articles__list__inner--footer-gears_small ${this.rotateSmall()}`} src="/static/gear.png" />
            </div> 
          </div>   
        </div>
      </a></Link>
    </li>
  }
}

export default ArticleCard