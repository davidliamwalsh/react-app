import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import ArticleCard from '../components/ArticleCard'
import Slider from '../components/Slider'
import Layout from '../components/Layout'
import withData from '../lib/withData'

class Index extends Component {

  constructor (props) {
    super(props)

    this.articlesQuery = gql`
      query articles {
        articles {
          id
          image
          body
          createdAt
          title
        }
      }
    `
  }

  render () {
    return <Query query={this.articlesQuery}>
      {({ loading, data }) => {
        if (loading) {
          return <Layout {...this.props}>
            <p>Loading...</p>
          </Layout>
        } else {
          return <Layout {...this.props}>
            <div className='c-container'>
              <div className="c-articles">
                <h2 className="c-main__head">My Articles</h2> 
                <hr className="c-main__head-line" /> 
                <div className="c-container-flex">
                  {data.articles.map((article, index) => {
                    return <ArticleCard key={index} article={article} />
                  })}
                </div>
              </div>
            </div>
            <Slider />
          </Layout>
        }
      }}
    </Query>
  }

}

export default withData(Index)