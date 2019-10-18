import { Component } from 'react'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import { withRouter } from 'next/router'

import Layout from '../components/Layout'
import FullArticle from '../components/FullArticle'
import ArticleComment from '../components/ArticleComment'
import Comment from '../components/Comment'
import { Facebook } from 'react-content-loader'


import withData from '../lib/withData'


class Article extends Component {
  constructor (props) {
    super(props)

    this.articleComment = this.articleComment.bind(this)

    this.addComment = gql`
      mutation addComment($slug: String!, $name: String!, $body: String!) {
        addComment(slug:$slug, name:$name, body:$body) {
          id
          name
          body
          createdAt
        }
      }
    `

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
 

  articleComment (event, addComment) {
    event.preventDefault()
    const form = event.target

    addComment({ 
      variables: {
        slug: this.props.url.query.slug,
        name: form.name.value,
        body: form.body.value
      }
    })

    form.reset()
  }

  render () {

    const MyFacebookLoader = () => <Facebook />

    return <Query query={this.articleQuery} variables={{slug: this.props.router.query.slug}}>
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
            <div className="c-container-article">
              <FullArticle article={data.article} />
              <Mutation mutation={this.addComment}>
                {addComment => {
                  return <div>
                    <ArticleComment mutation={(event) => this.articleComment(event, addComment)} />
                    <div className="c-comments__comment">
                      <h3>Comments</h3>
                      <hr className="c-main__head-line" />
                      {data.article.comments.map((comment, index) => {
                        return <Comment comment={comment} key={index} />
                      })}
                    </div>  
                  </div>
                }}
              </Mutation>
            </div>
          </Layout>
        }
      }}
    </Query>
  }
}

export default withRouter(withData(Article))