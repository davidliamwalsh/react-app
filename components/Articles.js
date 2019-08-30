import { Component } from 'react'

class Articles extends Component {
  render () {
    return <div className="c-container-flex">  
      <li className="c-articles__list">
        <img src="/static/article.png" className="c-articles__list--hero" />
        <div className="c-article__list__inner">
          <h4 className="c-articles__list__inner--title">Test Title</h4>
          <p className="c-articles__list__inner--body">Thus, when a URL is loaded straight (without click on the respective menu item), how do I catch this situation and highlight the respective menu item?</p>
          <p className="c-articles__list__inner--date">Posted on import date
            <a href="">view more</a>
          </p>
        </div>
      </li>
      <li className="c-articles__list">
        <img src="/static/article.png" className="c-articles__list--hero" />
        <div className="c-article__list__inner">
          <h4 className="c-articles__list__inner--title">Test Title</h4>
          <p className="c-articles__list__inner--body">Thus, when a URL is loaded straight (without click on the respective menu item), how do I catch this situation and highlight the respective menu item?</p>
          <p className="c-articles__list__inner--date">Posted on import date
            <a href="">view more</a>
          </p>
        </div>
      </li>
      <li className="c-articles__list">
        <img src="/static/article.png" className="c-articles__list--hero" />
        <div className="c-article__list__inner">
          <h4 className="c-articles__list__inner--title">Test Title</h4>
          <p className="c-articles__list__inner--body">Thus, when a URL is loaded straight (without click on the respective menu item), how do I catch this situation and highlight the respective menu item?</p>
          <p className="c-articles__list__inner--date">Posted on import date
            <a href="">view more</a>
          </p>
        </div>
      </li>
    </div>
  }
}

export default Articles