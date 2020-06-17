/** @jsx jsx */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserMinus, faTimes} from '@fortawesome/free-solid-svg-icons'
import {Flex, Text, Box, Button, jsx} from 'theme-ui'
import PropTypes from 'prop-types'
import CustomButton from './Button'

const Step = ({index, approvers}) => {
  const textStyle = {
    color: 'secondary',
  }

  const flexStyle = {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  }

  const rowStyle = {
    py: 1,
  }

  const buttonStyle = {
    background: 'none',
    color: 'secondary',
    cursor: 'pointer',
    ':hover': {
      color: 'primary',
    },
    fontSize: '14px',
    px: 0,
  }

  const boxStyle = {
    px: [3, 4],
    py: [2, 3],
    borderTop: '1px solid #ebebeb',
  }

  const indexStyle = {
    color: 'secondary',
    fontSize: '12px',
  }

  return (
    <Box sx={boxStyle}>
      <Text sx={indexStyle} as="p">
        {`STEP ${index}`}
      </Text>
      <Box sx={rowStyle}>
        {approvers.map((approver) => (
          <Flex sx={flexStyle}>
            <Text sx={textStyle} as="p">
              {approver.name}
            </Text>
            <CustomButton onClick={() => {}} icon={faUserMinus} text="Remove Approver" />
          </Flex>
        ))}
        <Flex sx={flexStyle}>
          <Button sx={buttonStyle} onClick={() => {}}>
            + Add Concurrent Approver
          </Button>
          <CustomButton onClick={() => {}} icon={faTimes} text="Remove Step" />
        </Flex>
      </Box>
    </Box>
  )
}

Step.defaultProps = {
  approvers: null,
}

Step.propTypes = {
  approvers: PropTypes.object,
  index: PropTypes.number.isRequired,
}

export default Step
