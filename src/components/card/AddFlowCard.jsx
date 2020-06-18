/** @jsx jsx */
import {Link} from 'react-router-dom'
import {jsx} from 'theme-ui'

const AddFlowCard = () => {
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
    fontSize: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '256px',
    textDecoration: 'none',
  }

  return (
    <Link sx={buttonStyle} href="/admin/flow/new">
      + Add New Flow
    </Link>
  )
}

export default AddFlowCard
