import { Component } from 'react'

class Navbar extends Component {

  burgerClick () {
    const nav = document.querySelector("ul[data-behavior='nav_links']")
    const navLinks = document.querySelectorAll("li[data-behavior='nav_list']")
    
    nav.classList.toggle('c-nav--active')

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`
      }
    })
  }

  render () {
    return <nav className="c-nav">
      <div className="c-nav__logo">
        <h4>
          <a href="http://localhost:3000/">Blogger</a>
        </h4>
      </div>
      <ul data-behavior="nav_links" className="c-nav__links"> 
        <li data-behavior="nav_list"><a href="http://localhost:3000/">Home</a></li>
        <li data-behavior="nav_list"><a href="http://localhost:3000/About">About</a></li>
        <li data-behavior="nav_list"><a href="http://localhost:3000/Contact">Contact</a></li>
      </ul>
      <div className="c-nav__burger" onClick={this.burgerClick.bind(this)}>
        <div className="c-nav__burger-top"></div>
        <div className="c-nav__burger-middle"></div>
        <div className="c-nav__burger-bottom"></div>
      </div>
    </nav>
  }
}

export default Navbar