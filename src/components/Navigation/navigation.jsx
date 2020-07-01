/** @jsx jsx */
import { jsx } from 'theme-ui'

// Components
import { Link } from 'react-router-dom'
import { Box } from 'theme-ui'

function Navigation() {
  return (
    <Box p={3} bg="muted" as="header">
      <Link
        to="/"
        sx={{
          color: 'secondary',
          variant: 'styles.h6',
          textDecoration: 'none',
        }}
      >
        UP Cebu Clearance System
      </Link>
    </Box>
  )
}

export default Navigation
