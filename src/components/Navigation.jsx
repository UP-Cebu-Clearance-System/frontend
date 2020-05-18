/** @jsx jsx */
import {Link} from 'react-router-dom'
import {Box, jsx} from 'theme-ui'

const Navigation = () => (
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

export default Navigation
