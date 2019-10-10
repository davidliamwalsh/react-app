import { Component } from 'react'
import { withRouter } from 'next/router'

import Auth from '../lib/Auth'

class CommentForm extends Component {
  constructor (props) {
    super(props)

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

  render () {
    if (this.auth.isAuthenticated()) {
      return <form onSubmit={this.props.mutation}>
      <p className="c-comments__form--row">
        <label>Name</label>
        <input name='name' className='c-comments__form--name' required />
      </p>
      <p className="c-comments__form--row">
        <label>Body</label>
        <textarea name='body' className='c-comments__form--body' required />
      </p>
      <p className="c-comments__form--row">
        <button type='submit' className='o-submit__btn'>Submit</button>
        <a className="o-submit__btn" onClick={this.logout} >Logout</a>
      </p>
    </form>
    } else {
      return <div className='c-comments__form'>
        <a className='o-submit__btn' onClick={this.login} >Login</a>
      </div>
    }
  }
}

export default withRouter(CommentForm)