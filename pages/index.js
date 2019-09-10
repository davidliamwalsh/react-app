import { Component } from 'react'

import Header from '../components/Header'
import Article from '../components/Article'
import Slider from '../components/Slider'
import Layout from '../components/Layout'

class Index extends Component {
  renderArticles () {
    return [1,2,3].map((index) => {
      return <Article key={index}/>
    })
  }

  render () {
    return <Layout>
      <div className="c-container"> 
        <div className="c-articles">
          <h2 className="c-main__head">My Articles</h2> 
          <hr className="c-main__head-line" /> 
          <div className="c-container-flex"> 
            {this.renderArticles()}
          </div>
        </div>
        <div className="c-work">
          <h2 className="c-main__head">My Work</h2>
          <hr className="c-main__head-line" />
          <Slider />
        </div>
      </div>
    </Layout>
  }
}

export default Index