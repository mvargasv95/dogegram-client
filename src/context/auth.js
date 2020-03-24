import React, { createContext } from 'react'
import { useCookies } from 'react-cookie'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(['token'])
  return <AuthContext.Provider value={cookies.token}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthContextProvider }
