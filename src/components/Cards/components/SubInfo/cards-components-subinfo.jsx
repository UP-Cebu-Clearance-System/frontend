/** @jsx jsx */
import { Box, Text, jsx } from 'theme-ui'
import PropTypes from 'prop-types'

// Styles
import { boxStyle, nameStyle, valueStyle } from './cards-components-subinfo-styles'

function SubInfo({ name, value }) {
  return (
    <Box sx={boxStyle}>
      <Text sx={nameStyle} as="span">
        {name}:
      </Text>
      <Text sx={valueStyle} as="span">
        {value}
      </Text>
    </Box>
  )
}

SubInfo.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default SubInfo
