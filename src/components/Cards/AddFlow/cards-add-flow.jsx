/** @jsx jsx */
import { jsx } from 'theme-ui'

// Components
import { Link } from 'react-router-dom'

// Styles
import { buttonStyle } from './cards-add-flow'

function AddFlowCard() {
  return (
    <Link sx={buttonStyle} href="/admin/flow/new">
      + Add New Flow
    </Link>
  )
}

export default AddFlowCard
