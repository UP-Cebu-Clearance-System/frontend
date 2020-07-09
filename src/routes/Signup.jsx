import React from 'react'

// Components
import { Container, Flex } from 'theme-ui'
import Navigation from 'components/Navigation'
import { SignupForm } from 'components/Forms'

function Signup() {
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
          <SignupForm />
        </Flex>
      </Container>
    </>
  )
}

export default Signup
