import { Component } from 'react'

class Footer extends Component {
  render () {
    return <div className="c-footer">
      <div className="c-footer__column--left">
        <p>Copyright by David Walsh 2019</p>
      </div>
      <div className="c-footer__column--main">
        <p>Ruby on Rails Blogging App</p>
      </div>
      <div className="c-footer__column--right">
        <p>
          <a href="https://github.com/davidliamwalsh">
            <img src="/static/github.png" className="c-footer__column--right-hero" />
          </a>
          <a href="https://www.linkedin.com/in/david-walsh-ab550138/">
            <img src="/static/linkedin.png" className="c-footer__column--right-hero" />
          </a>
        </p>
      </div>
    </div>
  }
}

export default Footer