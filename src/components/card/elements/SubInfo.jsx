/** @jsx jsx */
import {Box, Text, jsx} from 'theme-ui'
import PropTypes from 'prop-types'

const SubInfo = ({name, value}) => {
  const boxStyle = {
    width: ['full', '1/2', '1/2', '1/2', '1/4'],
  }
  const nameStyle = {
    color: 'secondary',
    fontWeight: 'bold',
    fontSize: 1,
  }

  const valueStyle = {
    color: 'secondary',
    fontSize: 1,
    ml: 2,
  }

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
