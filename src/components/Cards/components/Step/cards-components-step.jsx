/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

// Components
import { Flex, Text, Box, Button } from 'theme-ui'
import Button from './Button'

// Icons
import { faUserMinus, faTimes } from '@fortawesome/free-solid-svg-icons'

// Styles
import {
  textStyle,
  flexStyle,
  rowStyle,
  buttonStyle,
  boxStyle,
  indexStyle,
} from './cards-components-styles'

function Step({ index, approvers }) {
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
            <Button onClick={() => {}} icon={faUserMinus}>
              Remove Approver
            </Button>
          </Flex>
        ))}
        <Flex sx={flexStyle}>
          <Button sx={buttonStyle} onClick={() => {}}>
            + Add Concurrent Approver
          </Button>
          <Button onClick={() => {}} icon={faTimes}>
            Remove Step
          </Button>
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
