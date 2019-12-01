import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'
import { setContext } from 'apollo-link-context'

let apolloClient = null

if (!process.browser) {
  global.fetch = fetch
}

function create(initialState) {
  const httpLink = createHttpLink({
    uri: process.env.GRAPHQL_URL,
    credentials: 'same-origin'
  })
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token')
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : ''
      }
    }
  })

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo(initialState) {
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}