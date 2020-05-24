/** @jsx jsx */
import {useState} from 'react'
import {Flex, Text, Box, Button, jsx} from 'theme-ui'
import PropTypes from 'prop-types'

const Status = ({office, status, remarks}) => {
  const [remarksToggled, toggleRemarks] = useState(false)

  const textStyle = {
    color: 'secondary',
  }

  const buttonStyle = {
    background: 'none',
    color: 'secondary',
    cursor: 'pointer',
    ':hover': {
      color: 'primary',
    },
  }

  const flexStyle = {
    justifyContent: 'space-between',
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
        <Box>
          <Text sx={textStyle} as="p">
            {office} - {status}
          </Text>
        </Box>
        <Box>
          <Button sx={buttonStyle} onClick={() => toggleRemarks(!remarksToggled)} as="p">
            View Remarks
          </Button>
        </Box>
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
