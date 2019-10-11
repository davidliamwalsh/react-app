import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { Facebook } from 'react-content-loader'

import Layout from '../components/Layout'
import ArticleCard from '../components/ArticleCard'
import withData from '../lib/withData'

class Articles extends Component {
  constructor (props) {
    super(props)

    this.articlesQuery = gql`
      query articles {
        articles {
          slug
          previewImage
          title
          body
          createdAt
        }
      }
    `
  }

  render () {
    const MyFacebookLoader = () => <Facebook />
    return <Query query={this.articlesQuery}>
      {({ loading, data }) => {
        if (loading) {
          return <Layout {...this.props}>
            <div className="c-loader__container">
              <p className="c-loader__message">Article loading...</p>
              <MyFacebookLoader />
            </div>
          </Layout>
        } else {
          return <Layout {...this.props}>
            <div className='c-container'>
              <div className="c-articles__gallery">
                <h2 className="c-main__head">My Articles</h2> 
                <hr className="c-main__head-line" /> 
                <div className="c-container-flex">
                  {data.articles.map((article, index) => {
                    return <ArticleCard key={index} article={article} />
                  })}
                </div>
              </div>
            </div>
          </Layout>
        }
      }}
    </Query>
  }
}
    

 


export default withData(Articles)