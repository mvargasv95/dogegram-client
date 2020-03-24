import React, { createContext } from 'react'
import { useCookies } from 'react-cookie'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(['token'])
  const { token } = cookies

  const setToken = newToken => {
    setCookie('token', newToken, { path: '/' })
  }

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthContextProvider }
