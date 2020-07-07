import React from 'react'
import { Link } from 'react-router-dom'

// Components
import { Container, Box, Flex, Button, Text } from 'theme-ui'
import Navigation from 'components/Navigation'
import { Input } from 'components/Forms'

function Flows() {
  const flexStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    height: 'calc(100vh - 58px)',
  }

  const boxStyle = {
    border: '1px solid #DEDEDE',
    borderRadius: '4px',
  }

  return (
    <>
      <Navigation />
      <Container>
        <Flex sx={flexStyle}>
          <Box sx={boxStyle}>
            <Box>Login</Box>
            <Flex>
              <Button>Student</Button>
              <Button>Approver</Button>
            </Flex>
            <Box>
              <Input placeholder="ID" />
              <Input placeholder="Password" type="password" />
            </Box>
            <Button>Login</Button>
            <Flex>
              <Text>New Account?</Text>
              <Link>Sign up Here</Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Flows
