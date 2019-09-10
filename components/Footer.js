import { Component } from 'react'
import Link from 'next/link'

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
          <Link href="#">
            <a><img src="/static/github.png" className="c-footer__column--right-hero" /></a>
          </Link>
          <Link href="#">
            <a><img src="/static/linkedin.png" className="c-footer__column--right-hero" /></a>
          </Link>
        </p>
      </div>
    </div>
  }
}

export default Footer