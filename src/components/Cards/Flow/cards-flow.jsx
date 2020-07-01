/** @jsx jsx */
import { jsx } from 'theme-ui'

// Components
import { Link } from 'react-router-dom'
import { Text, Box } from 'theme-ui'

//Styles
import { buttonStyle, boxStyle, textStyle, imageStyle } from './cards-flow-styles'

function FlowCard() {
  return (
    <Link sx={buttonStyle} to="/admin/flow">
      <Box sx={imageStyle} />
      <Box sx={boxStyle}>
        <Text sx={textStyle} as="p">
          Clearance
        </Text>
      </Box>
    </Link>
  )
}

export default FlowCard
