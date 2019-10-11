import { Component } from 'react'
import { withRouter } from 'next/router'

import { Facebook } from 'react-content-loader'
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
    const MyFacebookLoader = () => <Facebook />

    return  <Layout {...this.props}>
      <div className="c-container__loader">
        <MyFacebookLoader />
      </div>
    </Layout>
  }
}

export default withRouter(Callback)
