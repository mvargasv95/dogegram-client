import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { CookiesProvider } from 'react-cookie'
import client from './client'
import App from './components/App'
import { AuthContextProvider } from './context/auth'

ReactDOM.render(
  <ApolloProvider client={client}>
    <AuthContextProvider>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </AuthContextProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
