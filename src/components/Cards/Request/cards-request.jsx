/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

// Hooks
import { useState } from 'react'

// Components
import { Flex, Card, Button, Box } from 'theme-ui'
import { Title, SubInfo } from './components'
import { TextArea } from 'components/Forms'
import CustomButton from 'components/Button'

// Images
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons'

// Styles
import {
  cardStyle,
  cardStyleWithBG,
  buttonStyle,
  flexStyle,
  boxStyle,
} from './cards-request-styles'

function RequestCard({ children, studentInfo, status }) {
  const [isRequestCardToggled, toggleRequestCard] = useState(false)

  return (
    <Card sx={status ? cardStyleWithBG(status) : cardStyle}>
      <Button sx={buttonStyle} onClick={() => toggleRequestCard(!isRequestCardToggled)}>
        <Title name={studentInfo.name} type={studentInfo.type} />
        <Flex sx={flexStyle}>
          {studentInfo.subInfo.map((info) => (
            <SubInfo name={info.name} value={info.value} key={info.name} />
          ))}
        </Flex>
        {children !== null && children}
      </Button>
      {isRequestCardToggled && (
        <Box sx={boxStyle}>
          <TextArea label="Remarks (Optional)" />
          <Box mt={3}>
            <CustomButton icon={faCheck} color="#86D88E" mr={3}>
              Pass
            </CustomButton>
            <CustomButton icon={faBan} color="#DF6464">
              Fail
            </CustomButton>
          </Box>
        </Box>
      )}
    </Card>
  )
}

RequestCard.defaultProps = {
  children: null,
  status: null,
}

RequestCard.propTypes = {
  children: PropTypes.element,
  studentInfo: PropTypes.object,
  status: PropTypes.oneOf('pass', 'fail'),
}

export default RequestCard
