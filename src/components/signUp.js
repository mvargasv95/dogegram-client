import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import doge from '../assets/doge.png'
import galaxy from '../assets/galaxy.jpg'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  background: url(${galaxy}) no-repeat;
  background-size: cover;
  align-items: center;
`

const Title = styled.h3`
  font-size: 5vw;
  font-family: 'Press Start';
  color: #d4c2fc;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 26px;
  }
  &:hover {
    cursor: pointer;
  }
`

const Doge = styled.img`
  max-height: 300px;
  max-width: 70%;
  margin-bottom: 50px;
`

const Form = styled.form`
  width: 40%;
  @media (max-width: 768px) {
    width: 50%;
  }
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  height: 47px;
  background: #fff;
  padding: 5px 10px;
  color: #003d5b;
  font-size: 2vw;
  font-family: Muli;
  border: none;
`

const Button = styled.button`
  width: 100%;
  height: 74px;
  font-size: 2.5vw;
  background: #d4c2fc;
  color: #30638e;
  border-radius: 2px;
  font-family: Muli;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 26px;
  }
`

const SIGN_UP = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      token
    }
  }
`

const SignUp = ({ history }) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [signUp] = useMutation(SIGN_UP, {
    onCompleted({ signUp: { token } }) {
      console.log('here', token)
      setName('')
      setUsername('')
      setEmail('')
      setPassword('')
    },
    onError(error) {
      console.error(error)
      return
    }
  })

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('here', e)
    if (!name || !username || !email || !password) {
      alert('Please fill out all of the fields')
      return
    }
    const input = { name, username, email, password }
    await signUp({
      variables: { input }
    })
  }

  return (
    <Wrapper>
      <Title onClick={() => history.push('/')}>Dogegram</Title>
      <Doge src={doge} alt='Doge' />
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Name'
          required
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          type='email'
          placeholder='Email'
          required
          name='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type='text'
          placeholder='Username'
          required
          name='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Password'
          required
          name='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button>Sign Up</Button>
      </Form>
    </Wrapper>
  )
}

export default SignUp
