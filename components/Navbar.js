import { Component } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'

class Navbar extends Component {
  constructor (props) {
    super(props)

    this.burgerClick = this.burgerClick.bind(this)
    this.state = {
      navBarOpen: false
    }
  }

  burgerClick () {
    this.setState({ navBarOpen: !this.state.navBarOpen })
  }
  renderTransparantNavBar () {
    return this.props.router.pathname === '/' ? 'c-nav-active' : ''
  }
  
  renderBurgerMenu () {
    return this.state.navBarOpen ? 'c-nav--active' : ''
  }

  render () {
    return <nav className={`c-nav ${this.renderTransparantNavBar()}`}>
      <div className="c-nav__logo">
        <h4>
          <Link href="/">
            <a>Blogger</a>
          </Link>
        </h4>
      </div>
      <ul className={`c-nav__links c-nav__home-links ${this.renderBurgerMenu()}`}> 
        <li className="c-nav__links-list">
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li className="c-nav__links-list">
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li className="c-nav__links-list">
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <div className="c-nav__burger" onClick={this.burgerClick}>
        <div className="c-nav__burger-top"></div>
        <div className="c-nav__burger-middle"></div>
        <div className="c-nav__burger-bottom"></div>
      </div>
    </nav>
  }
}

export default withRouter(Navbar)