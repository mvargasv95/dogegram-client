import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
// import gql from 'graphql'

const cache = new InMemoryCache()

const http = new HttpLink({
  uri: 'http://localhost:4000/ '
})

const link = ApolloLink.from([http])

const client = new ApolloClient({
  cache,
  link
})

export default client
