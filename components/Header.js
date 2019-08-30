import React from 'react'

import HomeNavbar from './HomeNavbar'
import SignupForm from './SignupForm'

const Header = () => {
  return (
    <header className="c-header">
      <div className="c-header__image">
      <HomeNavbar />
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
}

export default Header