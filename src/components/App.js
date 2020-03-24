import React, { useContext } from 'react'
import gql from 'graphql-tag'
import { BrowserRouter, Route } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import GetStarted from './getStarted'
import SignUp from './signUp'
import SignIn from './signIn'
import GlobalFonts from '../fonts/fonts'
import { AuthContext, AuthContextProvider } from '../context/auth'

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
  const token = useContext(AuthContext)
  console.log('here', token)
  return (
    <BrowserRouter>
      <GlobalFonts />
      <Route exact path='/' component={GetStarted} />
      <Route path='/signup' component={SignUp} />
      <Route path='/signin' component={SignIn} />
    </BrowserRouter>
  )
}

export default App
