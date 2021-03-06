import React from 'react'

// Components
import { Container, Flex } from 'theme-ui'
import Navigation from 'components/Navigation'
import { LoginForm } from 'components/Forms'

function Login() {
  const flexStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 58px)',
  }

  return (
    <>
      <Navigation />
      <Container>
        <Flex sx={flexStyle}>
          <LoginForm />
        </Flex>
      </Container>
    </>
  )
}

export default Login
