import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Components
import { Box, Flex, Button, Text } from 'theme-ui'
import { Input, Dropdown } from 'components/Forms'
import {
  boxStyle,
  titleStyle,
  tabStyle,
  tabStyleActive,
  formStyle,
  buttonStyle,
  linkStyle,
  messageStyle,
} from '../login-signup-styles'
import loginSignupTabs from '../login-signup-tabs'

const SignupForm = () => {
  const [activeTab, changeTab] = useState(loginSignupTabs.STUDENT)

  return (
    <Box sx={boxStyle}>
      <Flex sx={titleStyle}>
        <Text as="p">Sign Up</Text>
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
      {activeTab === loginSignupTabs.STUDENT && (
        <Flex as="form" sx={formStyle}>
          <Input placeholder="ID" mb={3} />
          <Input placeholder="Name" mb={3} />
          <Input placeholder="Password" type="password" mb={3} />
          <Box sx={{ width: '100%' }}>
            <Dropdown
              mb={3}
              placeholder="College"
              items={['College of Science', 'College of Social Sciences']}
            />
          </Box>
          <Button mt={3} sx={buttonStyle} onClick={() => {}}>
            Sign Up
          </Button>
          <Flex mt={4} sx={linkStyle}>
            <Text as="p" mr={1}>
              Already have an account?
            </Text>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              Login
            </Link>
          </Flex>
        </Flex>
      )}
      {activeTab === loginSignupTabs.APPROVER && (
        <Flex sx={messageStyle}>
          <Text as="p">
            If you are an approver, request your credentials from your department head
            or email Ryan Ciriaco Dulaca at rrdulaca@up.edu.ph
          </Text>
        </Flex>
      )}
    </Box>
  )
}

export default SignupForm
