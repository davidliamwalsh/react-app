import { Component } from 'react'
import { withRouter } from 'next/router'

import Auth from '../lib/Auth'

class CommentForm extends Component {
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

      return <form className="c-comment__form" onSubmit={this.props.mutation}>
        <div className="c-comment__form--user">
          <img className="c-comment__form--user-image" src={userProfile.picture} />
          <span className="c-comment__form--user-name">Hi there {userProfile.name}, write a comment...</span>  
        </div>
        <div className="c-comment__form--body">
          <textarea name='body' className="c-comment__form--body-text" required />
        </div>
        <div className="c-comment__form--row">
          <button type='submit' className='o-submit__btn'>Submit</button>
          <a className="o-submit__btn" onClick={this.logout} >Logout</a>
        </div>
      </form>
    } else {
      return <div className='c-comment__form'>
        <a className='o-submit__btn' onClick={this.login} >Login</a>
      </div>
    }
  }
}

export default withRouter(CommentForm)