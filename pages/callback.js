import { Component } from 'react'
import Router from 'next/router'
import { withRouter } from 'next/router'

import Auth from '../lib/Auth'

import Layout from '../components/Layout'

class Callback extends Component {
  componentDidMount () {
    const auth = new Auth()

    if (/access_token|id_token|error/.test(this.props.router.asPath)) {
      auth.handleAuthentication()
    }
  }

  render () {
    return  <Layout {...this.props}>
      <p>Logging you in...</p>
    </Layout>
  }
}

export default withRouter(Callback)
