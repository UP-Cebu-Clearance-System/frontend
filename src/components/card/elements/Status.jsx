/** @jsx jsx */
import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck, faTimes, faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons'
import {Flex, Text, Box, jsx} from 'theme-ui'
import PropTypes from 'prop-types'
import CustomButton from './Button'

const Status = ({office, status, remarks}) => {
  const [remarksToggled, toggleRemarks] = useState(false)

  const textStyle = {
    color: 'secondary',
  }

  const flexStyle = {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  }

  const officeStyle = {
    alignItems: 'center',
    flexWrap: 'wrap',
  }

  const boxStyle = {
    px: [3, 4, null, null],
    py: 1,
    borderTop: '1px solid #ebebeb',
  }

  const remarksStyle = {
    p: 2,
  }

  return (
    <Box sx={boxStyle}>
      <Flex sx={flexStyle}>
        <Flex sx={officeStyle}>
          <FontAwesomeIcon
            icon={status === 'Passed' ? faCheck : faTimes}
            style={{marginRight: '12px', color: status === 'Passed' ? '#86D88E' : '#DF6464'}}
          />
          <Text sx={textStyle} as="p">
            {office} - {status}
          </Text>
        </Flex>
        <CustomButton
          onClick={() => toggleRemarks(!remarksToggled)}
          icon={!remarksToggled ? faCaretDown : faCaretUp}
        >
          View Remarks
        </CustomButton>
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
