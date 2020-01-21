import { Component } from 'react'
import { withRouter } from 'next/router'

import ScrollAnimation from 'react-animate-on-scroll';
import Navbar from './Navbar'
import SignupForm from './SignupForm'

class Header extends Component {
  constructor (props) {
    super(props)

    this.scrollClick = this.scrollClick.bind(this)
  }

  scrollClick () {
    window.scrollTo({top: 600, behavior: 'smooth'})
  }

  render () {
    if (this.props.router.pathname === '/') {
      return (
        <header className="c-header">
          <div className="c-header__image">
            <Navbar />
            <div className="c-header__container">
              <div className="c-header__intro">
                <ScrollAnimation animateIn='wobble' initiallyVisible={true}>
                  <h3 className="c-header__name">DAVID<span>/</span>WALSH</h3>
                </ScrollAnimation>
                <h4 className="c-header__title">Web Developer</h4>
              </div>
              <SignupForm />
              <div className="c-header__arrow" onClick={this.scrollClick}>
                <div />
                <div />
              </div>
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