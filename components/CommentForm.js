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
      nickname: localStorage.getItem('nickname'),
      picture: localStorage.getItem('picture')
    }
  }

  render () {
    if (this.auth.isAuthenticated()) {

      const userProfile = this.userProfile()

      return <form onSubmit={this.props.mutation}>
      <div className="c-comments__form--user">
        <img className="c-comments__form--user-image" src={userProfile.picture} />
        <span className="c-comments__form--user-nickname">{userProfile.nickname}</span>  
      </div>
      <div className="c-comments__form--body">
        <textarea name='body' className="c-comments__form--body-text" required />
      </div>
      <div className="c-comments__form--row">
        <button type='submit' className='o-submit__btn'>Submit</button>
        <a className="o-submit__btn" onClick={this.logout} >Logout</a>
      </div>
    </form>
    } else {
      return <div className='c-comments__form'>
        <a className='o-submit__btn' onClick={this.login} >Login</a>
      </div>
    }
  }
}

export default withRouter(CommentForm)