/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

// Hooks
import { useState } from 'react'

// Components
import { Flex, Card, Button, Box } from 'theme-ui'
import TextArea from '../TextArea'
import Title from './elements/Title'
import SubInfo from './elements/SubInfo'
import Button from 'components/Button'

// Images
import { faCheck, faBan } from '@fortawesome/free-solid-svg-icons'
import pass from '../../static/images/pass.png'
import fail from '../../static/images/fail.png'

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
    <Card sx={status ? cardStyleWithBG : cardStyle}>
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
            <Button icon={faCheck} color="#86D88E" mr={3}>
              Pass
            </Button>
            <Button icon={faBan} color="#DF6464">
              Fail
            </Button>
          </Box>
        </Box>
      )}
    </Card>
  )
}

RequestCard.defaultProps = {
  children: null,
}

RequestCard.propTypes = {
  children: PropTypes.element,
  studentInfo: PropTypes.object,
}

export default RequestCard
