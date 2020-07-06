/** @jsx jsx */
import { jsx } from 'theme-ui'

// Components
import { Link } from 'react-router-dom'
import { Text, Box } from 'theme-ui'

// Styles
import {
  buttonStyle,
  imageStyle,
  boxStyle,
  textStyle,
  subinfoStyle,
} from './cards-link-styles'

function CardLink() {
  return (
    <Link sx={buttonStyle} to="/admin/flow">
      <Box sx={imageStyle} />
      <Box sx={boxStyle}>
        <Text sx={textStyle} as="p">
          Clearance
        </Text>
        <Text sx={subinfoStyle} as="p">
          100 Students
        </Text>
      </Box>
    </Link>
  )
}

export default CardLink
