import React, { useContext, useEffect } from 'react'
import gql from 'graphql-tag'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import jwt from 'jsonwebtoken'
import GetStarted from './getStarted'
import SignUp from './signUp'
import SignIn from './signIn'
import Home from './home'
import GlobalFonts from '../fonts/fonts'
import { AuthContext } from '../context/auth'

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

const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, 'secret', (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })

const App = () => {
  // const users = useQuery(GET_USERS)
  // if (users.loading) return <h1>Loading</h1>
  // if (users.error) return <h1>Error!</h1>
  // console.log('here', users)
  const { token, removeToken } = useContext(AuthContext)
  useEffect(() => {
    ;(async () => {
      try {
        await verifyToken(token)
      } catch (e) {
        removeToken()
      }
    })()
  }, [token])

  return (
    <BrowserRouter>
      <GlobalFonts />
      <Route exact path='/' render={props => (token ? <Home {...props} /> : <GetStarted {...props} />)} />
      <Route path='/signup' render={props => (token ? <Redirect to='/' /> : <SignUp {...props} />)} />
      <Route path='/signin' render={props => (token ? <Redirect to='/' /> : <SignIn {...props} />)} />
    </BrowserRouter>
  )
}

export default App
