import React from 'react'
import styled from 'styled-components'
import doge from '../assets/doge.png'
import galaxy from '../assets/galaxy.jpg'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: url(${galaxy}) no-repeat;
  background-size: cover;
  align-items: center;
`

const Title = styled.h1`
  font-size: 6vw;
  font-family: 'Press Start';
  color: #d4c2fc;
  margin-bottom: 0;
`

const Doge = styled.img`
  max-height: 80vh;
  max-width: 100%;
`

const Button = styled.button`
  width: 25%;
  height: 7vh;
  font-size: 2vw;
  color: #30638e;
  border-radius: 2px;
`

const Button1 = styled(Button)`
  background: #d4c2fc;
`

const Button2 = styled(Button)`
  background: #fff;
  margin: 10px 0;
`

const GetStarted = () => {
  return (
    <Wrapper>
      <Title>Dogegram</Title>
      <Doge src={doge} alt='doge' />

      <Button1>Get Started</Button1>
      <Button2>Log in</Button2>
    </Wrapper>
  )
}

export default GetStarted
