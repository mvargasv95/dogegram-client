import React from 'react'
import gql from 'graphql-tag'
import { BrowserRouter, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import GetStarted from './getStarted'
import SignUp from './signUp'
import GlobalFonts from '../fonts/fonts'

const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
      username
      email
    }
  }
`

// if (users.loading) return <h1>Loading</h1>
// if (users.error) return <h1>Error!</h1>

const App = () => {
  // const users = useQuery(GET_USERS)
  return (
    <BrowserRouter>
      <GlobalFonts />
      <Route exact path='/' component={GetStarted} />
      <Route path='/signup' component={SignUp} />
    </BrowserRouter>
  )
}

export default App
