import { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'next/router'

import Layout from '../components/Layout'
import FullArticle from '../components/FullArticle'
import CommentForm from '../components/CommentForm'
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
    return <Query query={this.articleQuery} variables={{slug: this.props.router.query.slug}}>
      {({ loading, data }) => {
        if (loading) {
          return <Layout {...this.props}>
            <p>Loading..</p>
          </Layout>
        } else {
          return <Layout {...this.props}>
            <div className="c-container-article">
              <FullArticle article={data.article} />
              <CommentForm />
              <div className="c-comments__comment">
                <h3>Comments</h3>
                <hr className="c-main__head-line" />
                {data.article.comments.map((comment, index) => {
                  return <Comment comment={comment} key={index} />
                })}
              </div>
            </div>
          </Layout>
        }
      }}
    </Query>
  }
}

export default withRouter(withData(Article))