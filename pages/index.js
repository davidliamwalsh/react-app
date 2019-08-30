import { Component } from 'react'

import Header from '../components/Header'
import Articles from '../components/Articles'
import Slider from '../components/Slider'
import Layout from '../components/Layout'

import '../scss/application.scss'

class Index extends Component {

  render () {
    return <div>
      { this.props.children }
      <Header />
      <div className="c-container"> 
        <div className="c-articles">
          <h2 className="c-main__head">My Articles</h2> 
          <hr className="c-main__head-line" /> 
          <Articles />
        </div>
    
        <div className="c-work">
          <h2 class="c-main__head">My Work</h2>
          <hr class="c-main__head-line" />
          <Slider />
        </div>
      </div>

      <Layout />
    </div>
  }
}

export default Index