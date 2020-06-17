/** @jsx jsx */
import {Text, Link, Box, jsx} from 'theme-ui'

const FlowCard = () => {
  const buttonStyle = {
    background: 'none',
    color: 'secondary',
    cursor: 'pointer',
    ':hover': {
      color: 'primary',
    },
    width: '100%',
    borderRadius: 'default',
    boxShadow: 'default',
    p: 0,
    textAlign: 'left',
  }

  const boxStyle = {
    p: [3, 4],
  }

  const textStyle = {
    color: 'secondary',
    fontSize: 2,
  }

  const imageStyle = {
    width: '100%',
    height: '160px',
    backgroundColor: '#dedede',
  }

  return (
    <Link sx={buttonStyle} href="/admin/flow">
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
