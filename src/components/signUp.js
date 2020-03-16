import React from 'react'
import styled from 'styled-components'
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
`

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const Input = styled.input`
  height: 47px;
  background: #fff;
  padding: 5px;
  color: #003d5b;
  font-size: 2vw;
  font-family: Muli;
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

const SignUp = () => {
  return (
    <Wrapper>
      <Title>Dogegram</Title>
      <Doge src={doge} alt='Doge' />
      <Form>
        <FormDiv>
          <Input type='email' placeholder='Email' />
          <Input type='text' placeholder='Username' />
          <Input type='password' placeholder='Password' />
          <Button>Sign Up</Button>
        </FormDiv>
      </Form>
    </Wrapper>
  )
}

export default SignUp
