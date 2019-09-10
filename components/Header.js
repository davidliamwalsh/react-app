import { Component } from 'react'
import { withRouter } from 'next/router'

import Navbar from './Navbar'
import SignupForm from './SignupForm'

class Header extends Component {
  render () {
    if (this.props.router.pathname === '/') {
      return (
        <header className="c-header">
          <div className="c-header__image">
            <Navbar />
            <div className="c-header__container">
              <div className="c-header__intro">
                <h3 className="c-header__name">DAVID<span>/</span>WALSH</h3>
                <h4 className="c-header__title">Web Developer</h4>
              </div>
              <SignupForm />
            </div>
          </div>
        </header>
      )  
    } else {
      return <Navbar />
    }
  }
}

export default withRouter(Header)