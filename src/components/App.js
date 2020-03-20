import React from 'react'
import gql from 'graphql-tag'
import { BrowserRouter, Route } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { CookiesProvider } from 'react-cookie'
import GetStarted from './getStarted'
import SignUp from './signUp'
import SignIn from './signIn'
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

const App = () => {
  // const users = useQuery(GET_USERS)
  // if (users.loading) return <h1>Loading</h1>
  // if (users.error) return <h1>Error!</h1>
  // console.log('here', users)
  return (
    <BrowserRouter>
      <CookiesProvider>
        <GlobalFonts />
        <Route exact path='/' component={GetStarted} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
      </CookiesProvider>
    </BrowserRouter>
  )
}

export default App
