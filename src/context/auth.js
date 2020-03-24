import React, { createContext } from 'react'
import { useCookies } from 'react-cookie'

const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const { token } = cookies

  const setToken = newToken => {
    setCookie('token', newToken, { path: '/' })
  }

  const removeToken = () => removeCookie('token')

  return <AuthContext.Provider value={{ token, setToken, removeToken }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthContextProvider }
