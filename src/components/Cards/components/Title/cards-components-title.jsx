/** @jsx jsx */
import { Text, jsx } from 'theme-ui'
import PropTypes from 'prop-types'

// Styles
import { textStyle } from './cards-components-title-styles'

function Title({ name, type }) {
  return (
    <Text sx={textStyle} as="h3">
      {name} - {type}
    </Text>
  )
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Title
