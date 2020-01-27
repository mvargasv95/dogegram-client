import React from 'react'
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

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
  const users = useQuery(GET_USERS)

  if (users.loading) return <h1>Loading</h1>
  if (users.error) return <h1>Error!</h1>
  return <h1>This is a dogegram!</h1>
}

export default App
