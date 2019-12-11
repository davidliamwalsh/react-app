const withSass = require('@zeit/next-sass')
const webpack = require("webpack")

require("dotenv").config()

module.exports = withSass({
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_REDIRECT_URI: process.env.AUTH0_REDIRECT_URI,
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
    GRAPHQL_URL: process.env.GRAPHQL_URL
  }
})