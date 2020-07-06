/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'theme-ui'

// Styles
import { buttonStyle, iconStyle } from './button-styles.js'

function ButtonComponent({ children, icon, color, ...options }) {
  return (
    <Button variant="outline" sx={buttonStyle(color)} {...options}>
      {icon && <FontAwesomeIcon icon={icon} style={iconStyle} />}
      {children}
    </Button>
  )
}

ButtonComponent.defaultProps = {
  icon: null,
}

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.object,
}

export default ButtonComponent
