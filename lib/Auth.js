import auth0 from 'auth0-js'
import Router from 'next/router'

class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: AUTH0_REDIRECT_URI,
    audience: AUTH0_AUDIENCE,
    responseType: 'token id_token',
    scope: 'openid profile'
  })

  constructor () {
    this.login = this.login.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.logout = this.logout.bind(this)
  }

  logout () {
    localStorage.clear()
  }

  login (path) {
    localStorage.setItem('return_to', path)
    this.auth0.authorize()
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        console.log(err)
      }
    })
  }

  setSession (authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    localStorage.setItem('name', authResult.idTokenPayload.name)
    localStorage.setItem('picture', authResult.idTokenPayload.picture)
    this.redirectToOriginalPage()
  }

  redirectToOriginalPage () {
    Router.push(localStorage.getItem('return_to'))
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}

export default Auth