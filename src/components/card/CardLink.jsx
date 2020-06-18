/** @jsx jsx */
import {Link} from 'react-router-dom'
import {Text, Box, jsx} from 'theme-ui'

const CardLink = () => {
  const buttonStyle = {
    background: 'none',
    color: 'secondary',
    cursor: 'pointer',
    ':hover': {
      p: {
        color: 'primary',
      },
    },
    width: '100%',
    borderRadius: 'default',
    boxShadow: 'default',
    p: 0,
    textAlign: 'left',
    textDecoration: 'none',
  }

  const boxStyle = {
    p: [3, 4],
  }

  const textStyle = {
    color: 'secondary',
    fontSize: 2,
  }

  const subinfoStyle = {
    color: 'secondary',
    fontSize: 1,
    opacity: '0.5',
  }

  const imageStyle = {
    width: '100%',
    height: '160px',
    backgroundColor: '#dedede',
  }

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
