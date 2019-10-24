import { Component } from 'react'
import { withRouter } from 'next/router'

import Auth from '../lib/Auth'
import CommentForm from './CommentForm'

class ArticleComment extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: {}
    }

    this.auth = new Auth()
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  logout () {
    this.auth.logout()
    window.location.reload()
  }

  login () {
    this.auth.login(this.props.router.asPath)
  }

  userProfile () {
    return {
      name: localStorage.getItem('name'),
      picture: localStorage.getItem('picture')
    }
  }

  render () {
    if (this.auth.isAuthenticated()) {
      const userProfile = this.userProfile()
      return <div>
        <CommentForm articleComment={this.props.mutation} userName={userProfile.name} userPicture={userProfile.picture} />
        <a className="o-submit__btn" onClick={this.logout} >Logout</a>
      </div>
    } else {
      return <div className='c-comment__form'>
        <a className='o-submit__btn' onClick={this.login} >Login</a>
      </div>
    }
  }
}

export default withRouter(ArticleComment)