import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Layout from '../components/Layout'
import Article from '../components/Article'
import Comment from '../components/Comment'
import withData from '../lib/withData'

class Post extends Component {
  constructor (props) {
    super(props)

    this.articleQuery = gql`
      query article($id: ID!) {
        article(id:$id) {
          id
          title
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
    return <Query query={this.articleQuery} variables={{id: this.props.url.query.id}}>
      {({ loading, data: { article } }) => {
        if (loading) {
          return <Layout {...this.props}>
            <p>Loading..</p>
          </Layout>
        } else {
          return <Layout {...this.props}>
            <div>
              <Article article={article} />
            </div>
          </Layout>
        }
      }}
    </Query>
  }
}

export default withData(Post)