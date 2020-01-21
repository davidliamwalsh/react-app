import { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import '../scss/application.scss'

import MetaTags from 'react-meta-tags';

class Layout extends Component {

  render () {
    return <div>
      <MetaTags>
        <link id="favicon" rel="icon" href="/static/DW-logo.jpg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        <title>React Blooger</title>
        <meta id="meta-description" name="description" content="Hi, my name is David Walsh! I am from Leeds (UK), and I have a passion for Web Development! I am confident hand coding HTML5, CSS3 (Sass), and JavaScript. I have experience with jQuery, Ruby and RoR, TDD, OOP, using Version Control (GIT), Webpack, Bootstrap, and Photoshop. More recently I am working website security with JWT and Rack middleware." />
      </MetaTags>
      <Header />
      { this.props.children }
      <Footer />
    </div>
  }
}

export default Layout