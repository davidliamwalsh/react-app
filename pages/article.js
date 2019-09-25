import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Layout from '../components/Layout'
import FullArticle from '../components/FullArticle'
import Comment from '../components/Comment'
import withData from '../lib/withData'


class Article extends Component {
  constructor (props) {
    super(props)

    this.articleQuery = gql`
      query article($slug: String!) {
        article(slug:$slug) {
          slug
          title
          image
          body
          createdAt
          comments {
            id
            name
            body
            createdAt
          }
        }
      }
    `
  }

  render () {
    return <Query query={this.articleQuery} variables={{slug: this.props.url.query.slug}}>
      {({ loading, data }) => {
        if (loading) {
          return <Layout {...this.props}>
            <p>Loading..</p>
          </Layout>
        } else {
          return <Layout {...this.props}>
            <div className="c-container-article">
              <FullArticle article={data.article} />
              {data.article.comments.map((comment, index) => {
                return <Comment comment={comment} key={index} />
              })}
            </div>
          </Layout>
        }
      }}
    </Query>
  }
}

export default withData(Article)