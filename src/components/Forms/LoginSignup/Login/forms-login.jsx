import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Components
import { Box, Flex, Button, Text } from 'theme-ui'
import { Input } from 'components/Forms'
import {
  boxStyle,
  titleStyle,
  tabStyle,
  tabStyleActive,
  formStyle,
  buttonStyle,
  linkStyle,
} from '../login-signup-styles'
import loginSignupTabs from '../login-signup-tabs'

const LoginForm = () => {
  const [activeTab, changeTab] = useState(loginSignupTabs.STUDENT)

  return (
    <Box sx={boxStyle}>
      <Flex sx={titleStyle}>
        <Text as="p">Login</Text>
      </Flex>
      <Flex>
        <Button
          sx={activeTab === loginSignupTabs.STUDENT ? tabStyleActive : tabStyle}
          onClick={() => changeTab(loginSignupTabs.STUDENT)}
        >
          {loginSignupTabs.STUDENT}
        </Button>
        <Button
          sx={activeTab === loginSignupTabs.APPROVER ? tabStyleActive : tabStyle}
          onClick={() => changeTab(loginSignupTabs.APPROVER)}
        >
          {loginSignupTabs.APPROVER}
        </Button>
      </Flex>
      <Flex as="form" sx={formStyle}>
        <Input placeholder="ID" mb={3} />
        <Input placeholder="Password" type="password" mb={3} />
        <Button mt={3} sx={buttonStyle} onClick={() => {}}>
          Log In
        </Button>
        <Flex mt={4} sx={linkStyle}>
          <Text as="p" mr={1}>
            No account?
          </Text>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            Sign up here
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default LoginForm
