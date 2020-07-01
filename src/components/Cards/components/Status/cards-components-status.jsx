/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

// Hooks
import { useState } from 'react'

// Components
import { Flex, Text, Box } from 'theme-ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './Button'

// Icons
import {
  faCheck,
  faTimes,
  faCaretDown,
  faCaretUp,
} from '@fortawesome/free-solid-svg-icons'

// Styles
import {
  boxStyle,
  flexStyle,
  officeStyle,
  textStyle,
  remarksStyle,
} from './cards-components-status-styles'

function Status({ office, status, remarks }) {
  const [remarksToggled, toggleRemarks] = useState(false)

  return (
    <Box sx={boxStyle}>
      <Flex sx={flexStyle}>
        <Flex sx={officeStyle}>
          <FontAwesomeIcon
            icon={status === 'Passed' ? faCheck : faTimes}
            style={{
              marginRight: '12px',
              color: status === 'Passed' ? '#86D88E' : '#DF6464',
            }}
          />
          <Text sx={textStyle} as="p">
            {office} - {status}
          </Text>
        </Flex>
        <Button
          onClick={() => toggleRemarks(!remarksToggled)}
          icon={!remarksToggled ? faCaretDown : faCaretUp}
        >
          View Remarks
        </Button>
      </Flex>
      {remarksToggled && (
        <Box sx={remarksStyle}>
          <Text sx={textStyle} as="p">
            {remarks}
          </Text>
        </Box>
      )}
    </Box>
  )
}

Status.defaultProps = {
  remarks: null,
}

Status.propTypes = {
  remarks: PropTypes.string,
  status: PropTypes.oneOf(['Passed', 'Failed']),
  office: PropTypes.string.isRequired,
}

export default Status
