/** @jsx jsx */
import {Text, jsx} from 'theme-ui'
import PropTypes from 'prop-types'

const Title = ({name, type}) => {
  const textStyle = {
    color: 'primary',
  }

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
